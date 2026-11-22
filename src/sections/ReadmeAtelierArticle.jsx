import React from 'react';
import Figure from '../components/ArticleFigure';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-readme-atelier/0.webp';
import image1 from '../assets/article-readme-atelier/1.webp';
import image2 from '../assets/article-readme-atelier/2.webp';
import image3 from '../assets/article-readme-atelier/3.gif';
import closingAnimation from '../assets/article-taste-studio/7.gif';

const Heading = ({ number, children }) => <h3><span>{number}</span>{children}</h3>;

export default function ReadmeAtelierArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="README ATELIER / PROJECT NOTES" title="好项目，值得一份好读的 README" as="h1" />
    <div className="article-body">
      <Figure src={image0} alt="README Atelier 的文章封面" width={1080} height={608} kind="cover" />
      <p>准备把一个项目发给别人时，我喜欢先点开自己的仓库，假装是第一次来。那些反复改过的界面、犹豫过的决定，我都记得，可对方只看得到眼前这一页。要是没有我在旁边解释，她会从哪里开始看？这个问题，也是我做 <strong>README Atelier</strong> 的起点。它是一个开源的 Codex Skill，帮开发者给自己的项目找到一个好开场，再把故事讲清楚。</p>
      <Heading number="01">花瓣上的那滴水珠</Heading>
      <p className="article-topic">TASTE STUDIO</p>
      <p>给 <strong>Taste Studio</strong> 写 README，我最想让人先看到的是几张并排的花店首页草图。它们都在回答同一个问题：一个人下班路上想来取花，打开页面时，应该先看到什么？几张草图的构图不同，给人的感觉也不同。我在意的是花瓣上那滴水珠，可它从草图来到真正的页面之后，取花入口依然得好找。看着这个细节怎么被选中、怎么留到最后，读者就能明白，<strong>Taste Studio</strong> 所说的「把自己的选择留在设计里」，具体是什么样子。</p>
      <Figure src={image1} alt="Taste Studio README 的设计草图与叙事" caption="Taste Studio · 从设计感受，到完整叙事" width={1080} height={667} kind="demo" />
      <Heading number="02">一张等着自己确认的卡片</Heading>
      <p className="article-topic">AGENCY BLOOM</p>
      <p>轮到 <strong>Agency Bloom</strong>，我想把开场留给一张小小的决策卡。Bloom 是一款微信小程序，帮人在对未来没那么确定的时候，理清处境，想想有哪些选择，再记下自己愿意尝试的一小步。我想让人留意卡片上那个需要自己确认的动作：<strong>AI 可以给出建议，但什么要留下，得由使用者自己决定</strong></p>
      <p>技术栈当然有它的位置，只是如果让我选一个画面来介绍 Bloom，我会先选这一张。它比一排技术标签更能说清楚，我为什么要做这个产品。</p>
      <Figure src={image2} alt="Agency Bloom README 中的决策卡" caption="Agency Bloom · 每一张决策卡，都由你自己掌控" width={1080} height={608} kind="demo" />
      <Heading number="03">给项目找到一个好开场</Heading>
      <p className="article-topic">README ATELIER</p>
      <p>这两个项目让我发现，我写 README 最容易卡住的地方，是不知道该把什么放在前面。所以我让 <strong>README Atelier</strong> 从读仓库开始：看看已有的说明、截图和示例，到底有哪些东西能让读者更快看懂项目。它会摆出几个真正不同的视觉方向，等我选定，再顺着那个方向做封面、整理正文和示例。能用一张图说明白的，就让图说话；要看到一次操作的来龙去脉，再考虑做一段 GIF。等读者想亲手试试时，安装命令应该就在手边，手机上也能读清楚、复制下来。</p>
      <Figure src={image3} alt="README Atelier 从仓库到 README 的演示动图" caption="README Atelier · 从读懂仓库，到把故事讲清楚" width={940} height={540} kind="demo" />
      <p>我还是很享受做漂亮的封面。但现在，比起一打开就看到一张好看的图，我更在意的是：</p>
      <blockquote>读者有没有在那一页里发现一个值得继续看的细节</blockquote>
      <p>可能是花瓣上的一滴水，也可能是一张等着自己确认的卡片。<strong>README Atelier</strong> 已经在 GitHub 开源，仓库里有安装方式和调用示例。如果你也有一个一直想好好介绍的项目，不妨拿它试试。先想想，你最舍不得让第一次来的人错过什么。</p>
      <p>开源仓库：<a href="https://github.com/Annabelle0726/Readme-Atelier" target="_blank" rel="noopener noreferrer">GitHub · README Atelier</a></p>
      <p>如果这篇文章对你有帮助，欢迎点个赞、点亮“在看”<br />关注 <strong>独钓江雪9447</strong>，我们下次见</p>
      <Figure src={closingAnimation} alt="文章结尾的原文动图" width={640} height={207} kind="signature" />
      <ArticleFooter routeId="readme-atelier-notes" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
