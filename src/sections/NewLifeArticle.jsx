import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import Figure from '../components/ArticleFigure';
import { newLifeArticles } from './new-life-articles';
import { connectionArticles } from './connection-articles';
import { collectionForArticle } from '../components/wechat-catalog';
import { selloffMedia } from './selloff-media';
import { remainingArticleMedia } from './remaining-article-media';
import './agency-bloom.css';

export default function NewLifeArticle({ id, language = 'zh', onNavigate }) {
  const article = newLifeArticles[id] || connectionArticles[id];
  const collection = collectionForArticle(id);
  const media = id === 'beyond-the-selloff' ? selloffMedia : remainingArticleMedia[id];
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow={collection.en.toUpperCase() + ' / NOTES'} title={article.title} as="h1" />
    <div className="article-body">
      <Figure image={media?.cover} kind="cover" />
      {article.intro.map((text, index) => <React.Fragment key={text}><Figure image={media?.beforeIntro?.[index]} align="aside" /><p>{text}</p></React.Fragment>)}
      {article.sections.map((section, index) => <React.Fragment key={section.title + index}>
        <Figure image={media?.beforeSections?.[index]} />
        <h3><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</h3>
        {section.topic && <p className="article-topic">{section.topic}</p>}
        {section.paragraphs.map((text, i) => <React.Fragment key={i}>
          <Figure image={media?.beforeParagraphs?.[`${index}:${i}`]} align="aside" caption={typeof text === 'object' ? text.caption : undefined} />
          {typeof text === 'string' ? <p>{text}</p> : text.caption ? null : <blockquote>{text.quote}</blockquote>}
        </React.Fragment>)}
      </React.Fragment>)}
      <Figure image={media?.afterBody} />
      <p>{article.closing}{!article.noSignature && <><br />关注 <strong>独钓江雪9447</strong>，我们下次见</>}</p>
      <Figure image={media?.closing} kind="signature" />
      <ArticleFooter routeId={id} language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
