import test from 'node:test';
import assert from 'node:assert/strict';
import { articlePageLinks } from '../src/components/article-pagination.js';
import { resolveNavigation } from '../src/navigation.js';

test('article pagination follows sidebar order in both directions', () => {
  const ids = [
    'wechat-things-i-love', 'agency-bloom', 'agency-bloom-applause', 'agency-bloom-ideas', 'design-care', 'personal-brand', 'being-seen',
    'wechat-product-life', 'agency-bloom-value', 'understanding-needs', 'waymark-notes', 'meaning-of-expression', 'taste-studio-notes', 'page-soul', 'readme-atelier-notes', 'spec-to-tested-code-notes',
    'wechat-seeing-each-other', 'respecting-lives', 'ai-love-letters',
    'wechat-making-sense-of-the-numbers', 'beyond-the-selloff', 'experience-compounds',
  ];
  for (let i = 0; i < ids.length; i++) {
    const links = articlePageLinks(ids[i]);
    assert.equal(links.previous.href, '#' + (ids[i - 1] || 'services'));
    assert.equal(links.next.href, '#' + (ids[i + 1] || 'models'));
    assert.ok(resolveNavigation(links.previous.href));
    assert.ok(resolveNavigation(links.next.href));
  }
});
test('the last article in Life behind products leads to Seeing each other', () => {
  assert.equal(articlePageLinks('readme-atelier-notes').next.href, '#spec-to-tested-code-notes');
  const links = articlePageLinks('spec-to-tested-code-notes');
  assert.equal(links.previous.href, '#readme-atelier-notes');
  assert.equal(links.next.href, '#wechat-seeing-each-other');
  assert.deepEqual(resolveNavigation('#spec-to-tested-code-notes'), { id: 'spec-to-tested-code-notes', view: 'spec-to-tested-code-notes', group: 'wechat' });
});

test('unknown articles have no pagination', () => assert.equal(articlePageLinks('missing'), null));

test('collections contain 6, 8, 2 and 2 distinct articles with valid routes', async () => {
  const { wechatCollections, collectionForArticle } = await import('../src/components/wechat-catalog.js');
  assert.deepEqual(wechatCollections.map(c => c.articles.length), [6, 8, 2, 2]);
  const ids = wechatCollections.flatMap(c => c.articles.map(([id]) => id));
  assert.equal(new Set(ids).size, 18);
  for (const c of wechatCollections) for (const [id] of c.articles) {
    assert.equal(resolveNavigation('#' + id)?.group, 'wechat');
    assert.equal(collectionForArticle(id).id, c.id);
  }
});
