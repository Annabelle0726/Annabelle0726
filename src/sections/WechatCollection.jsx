import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import { wechatCollections } from '../components/wechat-catalog';
import './agency-bloom.css';

export default function WechatCollection({ id, language = 'zh', onNavigate }) {
  const collection = wechatCollections.find(item => item.id === id);
  const available = collection.articles.filter(([route]) => route).length;
  return <section className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="WECHAT / COLLECTION" title={collection.title} as="h1" />
    <div className="article-body">
      <p>{collection.description}</p>
      <p>{available === collection.articles.length ? `${available} 篇文章` : `${available} 篇已收录 · ${collection.articles.length - available} 篇待补充`}</p>
      {collection.articles.map(([route, title], index) => <div key={title}>
        <h3><span>{String(index + 1).padStart(2, '0')}</span>{route ? <a href={'#' + route} onClick={onNavigate}>{title}</a> : title}</h3>
        {!route && <p>正文待补充</p>}
      </div>)}
      <ArticleFooter routeId={id} language={language} onNavigate={onNavigate} />
    </div>
  </div></section>;
}
