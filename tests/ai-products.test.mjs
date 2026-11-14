import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveNavigation, sameContentView } from '../src/navigation.js';

test('AI products has a project view distinct from the existing article destinations', () => {
  const route = resolveNavigation('#ai-products');
  assert.deepEqual(route, { id: 'ai-products', view: 'ai-products', group: 'projects' });
  for (const id of ['waymark-notes', 'taste-studio-notes']) {
    const article = resolveNavigation('#' + id);
    assert.equal(article.group, 'wechat');
    assert.equal(sameContentView(route, article), false);
  }
});
