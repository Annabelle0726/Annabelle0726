import React from 'react';
import WebProjectNav from './WebProjectNav';
import { collectionForArticle } from './wechat-catalog';
import { articlePageLinks } from './article-pagination';

export default function ArticleFooter({ routeId, language = 'zh', onNavigate }) {
  const en = language === 'en';
  const links = articlePageLinks(routeId, en);
  const collection = collectionForArticle(routeId);
  return <>{collection && <p className="article-collection-return"><a href={'#' + collection.id} onClick={onNavigate}>← {collection.title}</a></p>}{links && <WebProjectNav {...links} en={en} onNavigate={onNavigate} ariaLabel={en ? 'Article navigation' : '文章翻页'} />}</>;
}
