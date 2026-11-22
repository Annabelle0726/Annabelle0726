import { wechatCollections } from './wechat-catalog.js';

export function articlePageLinks(routeId, en = false) {
  const entries = wechatCollections.flatMap(collection => [[collection.id, en ? collection.en : collection.title], ...collection.articles.filter(([id]) => id)]);
  const index = entries.findIndex(([id]) => id === routeId);
  if (index < 0) return null;
  const entry = ([id, label]) => ({ href: '#' + id, label });
  return {
    previous: entry(index ? entries[index - 1] : ['services', en ? 'Data & AI' : '数据与 AI']),
    next: entry(index < entries.length - 1 ? entries[index + 1] : ['models', en ? 'Favorites' : '灵感收藏']),
  };
}
