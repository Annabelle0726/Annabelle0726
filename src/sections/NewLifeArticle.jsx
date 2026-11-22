import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import { newLifeArticles } from './new-life-articles';
import { connectionArticles } from './connection-articles';
import { collectionForArticle } from '../components/wechat-catalog';
import './agency-bloom.css';

export default function NewLifeArticle({ id, language = 'zh', onNavigate }) {
  const article = newLifeArticles[id] || connectionArticles[id];
  const collection = collectionForArticle(id);
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow={collection.en.toUpperCase() + ' / NOTES'} title={article.title} as="h1" />
    <div className="article-body">
      {article.intro.map(text => <p key={text}>{text}</p>)}
      {article.sections.map((section, index) => <React.Fragment key={section.title + index}>
        <h3><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</h3>
        {section.topic && <p className="article-topic">{section.topic}</p>}
        {section.paragraphs.map((text, i) => typeof text === 'string' ? <p key={i}>{text}</p> : text.caption ? <p className="article-cover-caption" key={i}>{text.caption}</p> : <blockquote key={i}>{text.quote}</blockquote>)}
      </React.Fragment>)}
      <p>{article.closing}{!article.noSignature && <><br />关注 <strong>独钓江雪9447</strong>，我们下次见</>}</p>
      <ArticleFooter routeId={id} language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
