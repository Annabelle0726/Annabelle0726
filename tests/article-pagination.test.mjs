import test from 'node:test';
import assert from 'node:assert/strict';
import { articlePageLinks } from '../src/components/article-pagination.js';
import { resolveNavigation } from '../src/navigation.js';

test('article pagination follows sidebar order in both directions', () => {
  const ids = ['wechat-product-life', 'agency-bloom-value', 'understanding-needs', 'waymark-notes', 'meaning-of-expression', 'taste-studio-notes', 'page-soul', 'readme-atelier-notes', 'spec-to-tested-code-notes', 'beyond-the-selloff', 'experience-compounds', 'wechat-seeing-each-other', 'respecting-lives', 'ai-love-letters', 'wechat-things-i-love', 'design-care', 'agency-bloom-ideas', 'agency-bloom-applause', 'agency-bloom', 'personal-brand', 'being-seen'];
  for (let i = 0; i < ids.length; i++) {
    const links = articlePageLinks(ids[i]);
    assert.equal(links.previous.href, '#' + (ids[i - 1] || 'services'));
    assert.equal(links.next.href, '#' + (ids[i + 1] || 'models'));
    assert.ok(resolveNavigation(links.previous.href));
    assert.ok(resolveNavigation(links.next.href));
  }
});
test('Spec to Tested Code article connects to the next article in its collection', () => {
  assert.equal(articlePageLinks('readme-atelier-notes').next.href, '#spec-to-tested-code-notes');
  const links = articlePageLinks('spec-to-tested-code-notes');
  assert.equal(links.previous.href, '#readme-atelier-notes');
  assert.equal(links.next.href, '#beyond-the-selloff');
  assert.deepEqual(resolveNavigation('#spec-to-tested-code-notes'), { id: 'spec-to-tested-code-notes', view: 'spec-to-tested-code-notes', group: 'wechat' });
});

test('unknown articles have no pagination', () => assert.equal(articlePageLinks('missing'), null));

test('collections contain 10, 2 and 6 distinct articles with valid routes', async () => {
  const { wechatCollections, collectionForArticle } = await import('../src/components/wechat-catalog.js');
  assert.deepEqual(wechatCollections.map(c => c.articles.length), [10, 2, 6]);
  const ids = wechatCollections.flatMap(c => c.articles.map(([id]) => id));
  assert.equal(new Set(ids).size, 18);
  for (const c of wechatCollections) for (const [id] of c.articles) {
    assert.equal(resolveNavigation('#' + id)?.group, 'wechat');
    assert.equal(collectionForArticle(id).id, c.id);
  }
});
