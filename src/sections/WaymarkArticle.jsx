import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-waymark/0.webp';
import image1 from '../assets/article-waymark/1.gif';
import image2 from '../assets/article-waymark/2.webp';
import image3 from '../assets/article-waymark/3.webp';
import image4 from '../assets/article-waymark/4.webp';
import closingAnimation from '../assets/article-being-seen/4.gif';

const Figure = ({ src, alt, height = 671 }) => <figure className="article-figure"><img src={src} alt={alt} width={1080} height={height} loading="lazy" /></figure>;
const Heading = ({ number, children }) => <h3><span>{number}</span>{children}</h3>;

export default function WaymarkArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="WAYMARK / PROJECT NOTES" title="求职已经够累了，别再让信息散落各处" as="h1" />
    <div className="article-body">
      <Figure src={image0} height={810} alt="Waymark 求职管理工具的文章封面" />
      <p>最近，我做了一个叫 Waymark 的求职管理工具，想把岗位信息、投递进度、面试准备和个人资料整理到一起。做它的起点其实很简单：先解决自己求职时遇到的问题，再看看它能不能帮助有相似困扰的人。</p>
      <p>找工作时，我们会在不同平台浏览岗位、投递简历，也可能通过微信、邮件或短信收到回复。每个平台都留下了一部分信息，但要把它们拼成完整的求职进度，往往还得靠自己。等到收到面试邀请，想重新确认岗位要求、回顾之前的沟通，或者想知道自己还需要准备什么，就可能要翻一遍聊天记录、截图和收藏夹。这些事情单独看都不复杂，积累起来却很消耗精力。</p>
      <p>我希望 Waymark 能帮忙收拢这些信息。</p>
      <p>它不替求职者决定要去哪里，而是让每一次投递都有迹可循，也让打开页面时的下一步更清楚一点。</p>
      <Heading number="01">把分散的岗位信息放在一起</Heading>
      <p>在 Waymark 里，可以通过截图、文字、链接或手动填写的方式收录岗位，将招聘来源、岗位原文和后续进度放在一起。同一家公司投递了不同职位，也可以分别记录。之后收到回复，还能继续记录沟通内容和进度变化，不必每次都从头翻找。</p>
      <Figure src={image1} height={549} alt="Waymark 收录岗位与管理进度的操作动图" />
      <p>截图可以在本机识别，再由自己对照原图检查。对于薪资、是否支持远程等信息，如果原文没有明确说明，就保留“待确认”。</p>
      <p>我觉得，区分招聘方已经说清楚的和还需要询问的，比得到一份看起来完整、实际上靠猜测补齐的记录更重要。</p>
      <Heading number="02">让面试准备既能积累，也能针对岗位调整</Heading>
      <p>面试准备不是每次都要从零开始。自我介绍、常见问题和项目经历，可以在“通用面试准备”里持续整理；某个岗位特别关注的能力、可能被问到的问题和面试复盘，则可以放在对应岗位下面。这样，已经认真准备过的内容可以继续积累，同时也能根据每个机会调整重点。</p>
      <Figure src={image2} alt="Waymark 通用与岗位面试准备界面" />
      <p>准备的内容多了，编辑空间也很重要。Waymark 里的笔记可以分节，复习题可以按主题整理、分别填写答案，编辑区域也支持放大。简历、证书和其他附件则放在“我的资料”中，希望真正准备面试时，岗位要求、自己的表达和需要用到的材料都能更容易找到。</p>
      <Figure src={image3} alt="Waymark 笔记编辑与资料管理界面" />
      <Heading number="03">自动化能帮忙，但也需要说清楚边界</Heading>
      <p>一开始，我也想过：能不能让一个助理自动收集所有平台的消息，实时更新投递状态？但继续往下考虑就会发现，平台之间的权限并不互通，知道用户的手机号，也不意味着能读取他的私人招聘记录。</p>
      <p>比起承诺“全部自动完成”，我更希望把目前能做到的和做不到的说明白。</p>
      <p>因此，当前的 Waymark 从用户主动保存和导入的信息开始。助理可以根据导入的消息提出更新建议，由用户确认后，再把原文和来源记入岗位历史；它不会因为填写了某个平台的名字，就自动获得那个平台的访问权限。公开信息搜索和 AI 解读是可选功能，收录岗位、整理笔记、识别截图和管理资料等核心功能不需要配置 AI 密钥。</p>
      <Figure src={image4} alt="Waymark 助理与可选联网功能界面" />
      <Heading number="04">先从自己的需求开始</Heading>
      <p>Waymark 目前是运行在自己电脑上的网页工具，通过 Docker 启动，求职记录和资料保存在本机。它还需要安装和配置，并不是打开公共网址就能直接使用的在线服务；如果选择启用联网功能，也需要自行配置相应的 API。我把代码放到了 GitHub，希望先从自己的实际使用出发，慢慢检验这些设计到底有没有用。</p>
      <p>做这个项目的过程，也让我对“理解用户需求”有了更具体的感受。很多需求并不是一句抽象的“提高效率”，而是藏在反复翻找一条招聘消息、重新整理一次面试笔记，或者不确定下一步该做什么的时刻。只有走近这些实际处境，才知道哪些功能值得做，哪些看起来很酷的想法可以先放一放。</p>
      <p>Waymark 想先解决的，就是求职过程里的这一小部分。如果你也在找工作，最让你觉得混乱，或者最不想重复做的事情是什么？</p>
      <p>项目地址：<a href="https://github.com/Annabelle0726/Waymark" target="_blank" rel="noopener noreferrer">GitHub · Waymark</a></p>
      <p>如果这篇分享对你有帮助，欢迎点赞，也欢迎关注「独钓江雪9447」，一起交流更多想法。</p>
      <Figure src={closingAnimation} height={360} alt="文章结尾的原文动图" />
      <ArticleFooter routeId="waymark-notes" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
