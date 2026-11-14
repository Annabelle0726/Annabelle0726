import React, { useRef, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectPagination from '../components/ProjectPagination';
import ribbon from '../assets/hero-art.png';
import tasteConcept from '../assets/ai-products/taste-concept-compact.webp';
import tasteFlourish from '../assets/ai-products/wordmark-flourish.svg';
import './ai-products.css';

function ProjectLink({ href, en, name, onNavigate }) {
  return <a className="ai-project-link" href={href} onClick={onNavigate}><span>{en ? 'Explore the project' : '查看项目介绍'}</span><span aria-hidden="true">↗</span><span className="visually-hidden"> · {name}</span></a>;
}

function WaymarkPreview({ en }) {
  const [confirmed, setConfirmed] = useState(false);
  const t = (zh, english) => en ? english : zh;
  const jobs = [
    { id: 'product', title: t('产品设计师', 'Product Designer'), team: 'STUDIO / 01', tag: t('作品集准备', 'Portfolio ready'), stage: 0 },
    { id: 'ai', title: t('AI 应用工程师', 'AI Engineer'), team: 'LAB / 02', tag: 'Python · AI', stage: 1 },
    { id: 'frontend', title: t('前端开发工程师', 'Frontend Developer'), team: 'DIGITAL / 03', tag: 'React · TypeScript', stage: confirmed ? 2 : 1, featured: true },
    { id: 'ux', title: t('UX 设计师', 'UX Designer'), team: 'DESIGN / 05', tag: t('准备项目讲解', 'Prepare case study'), stage: 2 }
  ];
  const card = job => <div key={job.id} data-job={job.id} className={`wm-job ${job.featured ? 'wm-job-featured' : ''} ${job.featured && confirmed ? 'wm-job-updated' : ''}`}>
    <div className="wm-job-meta"><span className="wm-job-icon" aria-hidden="true">{job.featured ? '↗' : job.team.charAt(0)}</span><span>{job.team}</span><span aria-hidden="true">···</span></div>
    <h3>{job.title}</h3><p>{job.tag}</p>
    <div className="wm-job-foot"><span>{job.featured ? t('优先关注', 'Shortlisted') : t('远程', 'Remote')}</span><span>{job.featured ? (confirmed ? t('面试中', 'Interviewing') : t('已投递', 'Applied')) : '↗'}</span></div>
  </div>;
  return <figure className="ai-preview ai-waymark" data-confirmed={confirmed} aria-label={t('求职工作台概念预览，示例岗位', 'Job workspace concept with sample roles')}>
    <div className="wm-toolbar"><span className="wm-workspace-icon" aria-hidden="true">◈</span><strong>{t('我的求职工作台', 'My workspace')}</strong><span className="wm-sample">{t('概念预览', 'Concept preview')}</span></div>
    <div className="wm-tabs"><strong>{t('岗位看板', 'Job board')}</strong><span>{t('面试准备', 'Preparation')}</span><span>{t('消息', 'Inbox')}<i/></span><span className="wm-view-icon" aria-hidden="true">▤</span></div>
    <div className="wm-board">
      {[t('待投递', 'Saved'), t('已投递', 'Applied'), t('面试中', 'Interviewing')].map((label, stage) => <section className="wm-column" key={stage}>
        <div className="wm-column-title"><span className={`wm-dot wm-dot-${stage}`}/><h4>{label}</h4><small>{jobs.filter(job => job.stage === stage).length}</small><span aria-hidden="true">+</span></div>
        {jobs.filter(job => job.stage === stage).map(card)}
      </section>)}
    </div>
    <div className="wm-mobile-jobs"><div className="wm-mobile-label">{t('精选岗位', 'Selected role')}<span>01 / 04</span></div>{card(jobs[2])}<div className="wm-preparation"><span aria-hidden="true">✓</span><div><strong>{t('下一步 · 面试准备', 'Next · Interview prep')}</strong><p>{t('整理项目经历与作品集', 'Review projects and portfolio')}</p></div></div></div>
    <aside className="wm-assistant" aria-label={t('AI 助手演示', 'AI assistant demo')}>
      <span className="wm-assistant-icon" aria-hidden="true">{confirmed ? '✓' : '✧'}</span>
      <p role="status">{confirmed ? t('已更新为面试中', 'Updated to Interviewing') : <><strong>{t('已识别面试邀请', 'Interview invitation detected')}</strong><span>{t('「前端开发工程师」可更新为面试中', 'Frontend Developer can move to Interviewing')}</span></>}</p>
      <button className="wm-confirm" type="button" onClick={() => setConfirmed(value => !value)}>{confirmed ? t('撤销', 'Undo') : t('确认更新', 'Confirm update')}</button>
    </aside>
  </figure>;
}

function TasteWordmark() {
  return <strong className="ai-taste-wordmark">Taste Studio<img src={tasteFlourish} alt="" aria-hidden="true" width="90" height="22"/></strong>;
}

function TastePreview({ en }) {
  const dialog = useRef(null);
  const alt = en ? 'Three complete Flower Studio concepts: blush peony, burgundy bloom and airy pale flowers.' : '三张完整的花卉网站概念草图：浅粉牡丹、酒红花瓣与自然枝叶。';
  const open = () => dialog.current.showModal();
  return <figure className="ai-preview ai-taste">
    <div className="ai-preview-bar"><TasteWordmark/><span>{en ? 'Design studies' : '设计方向'}</span></div>
    <div className="ai-preview-stage ai-taste-stage"><img className="ai-concept-art" src={tasteConcept} alt={alt} width="1536" height="1024" loading="lazy"/></div>
    <figcaption className="ai-preview-footer"><span>{en ? 'One brief, three directions' : '同一份简报，三种方向'}</span><button type="button" className="ai-preview-action" onClick={open}>{en ? 'View full sketch ↗' : '查看完整草图 ↗'}</button></figcaption>
    <dialog ref={dialog} className="ai-concept-dialog" aria-label={en ? 'Full Taste Studio concept' : 'Taste Studio 完整草图'} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.current.close();
    }}>
      <div><TasteWordmark/><button type="button" autoFocus onClick={() => dialog.current.close()}>{en ? 'Close ×' : '关闭 ×'}</button></div>
      <img src={tasteConcept} alt={alt} width="1536" height="1024"/>
    </dialog>
  </figure>;
}

export default function AIProducts({ language = 'zh', onNavigate }) {
  const en = language === 'en';
  return <section id="ai-products" className="ai-products" lang={en ? 'en' : 'zh-CN'}>
    <div className="ai-overview-ribbon" aria-hidden="true"><img src={ribbon} alt="" width="1536" height="864"/></div>
    <div className="ai-products-inner">
      <SectionHeader as="h1" eyebrow="AI PRODUCTS" title={en ? 'AI products' : 'AI 产品'} subtitle={en ? 'From real needs to everyday work with AI' : '从真实需求出发，让 AI 进入日常工作'} />
      <div className="ai-product-list">
        <article className="ai-product-row" aria-labelledby="ai-waymark-title">
          <div className="ai-product-copy"><p className="ai-product-number">01 <span/></p><h2 id="ai-waymark-title">Waymark</h2><p className="ai-product-category">{en ? 'A personal job-search workspace' : '个人求职工作空间'}</p>
            <p className="ai-product-description">{en ? 'Bring jobs, application progress and interview preparation together. AI interprets excerpts you approve; imported messages update progress after your confirmation.' : '集中管理岗位、投递进度与面试准备。AI 解读你确认发送的摘录；导入的招聘消息经你确认后，再更新进度。'}</p>
            <p className="ai-project-facts">{en ? 'Product design & development · Runs locally' : '产品设计与开发 · 本地运行'}</p>
            <ProjectLink href="#waymark-notes" en={en} onNavigate={onNavigate} name="Waymark"/>
          </div><WaymarkPreview en={en}/>
        </article>
        <article className="ai-product-row ai-product-row-reverse" aria-labelledby="ai-taste-title">
          <div className="ai-product-copy"><p className="ai-product-number">02 <span/></p><h2 id="ai-taste-title">Taste Studio</h2><p className="ai-product-category">{en ? 'A UI design Skill' : 'UI 设计 Skill'}</p>
            <p className="ai-product-description">{en ? 'Guide AI to explore multiple design directions, then refine the interface through your preferences and feedback—keeping the details that drew you in.' : '让 AI 先呈现多个设计方向，再依据偏好与反馈细化界面，把最初喜欢的细节保留下来。'}</p>
            <p className="ai-project-facts">{en ? 'Skill design · Demo site published' : 'Skill 设计 · 演示站已上线'}</p>
            <ProjectLink href="#taste-studio-notes" en={en} onNavigate={onNavigate} name="Taste Studio"/>
          </div><TastePreview en={en}/>
        </article>
      </div>
      <ProjectPagination routeId="ai-products" en={en} onNavigate={onNavigate}/>
    </div>
  </section>;
}
