import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-spec-to-tested-code/0.webp';
import image1 from '../assets/article-spec-to-tested-code/1.webp';
import image2 from '../assets/article-spec-to-tested-code/2.gif';
import image3 from '../assets/article-spec-to-tested-code/3.webp';
import image4 from '../assets/article-spec-to-tested-code/4.webp';
import image5 from '../assets/article-spec-to-tested-code/5.gif';

const Figure = ({ src, alt, width = 1080, height = 599 }) => <figure className="article-figure"><img src={src} alt={alt} width={width} height={height} loading="lazy" /></figure>;
const Heading = ({ number, children }) => <><h3><span>{number}</span>{children}</h3><p className="article-topic">SPEC TO TESTED CODE</p></>;

export default function SpecToTestedCodeArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="SPEC TO TESTED CODE / PROJECT NOTES" title="AI 说「做完了」，我想再问一句" as="h1" />
    <div className="article-body">
      <Figure src={image0} alt="AI 说「做完了」，我想再问一句：Spec to Tested Code 文章封面" />
      <Heading number="01">点下按钮之后</Heading>
      <p>做产品时，我很喜欢看一个原本只有几句话的想法，慢慢变成一个可以点、可以试的页面。用 AI 写代码，这一刻来得很快。可我往往还想多试一步：点了「取消订单」，页面说取消成功，那我关掉页面再打开，订单还是「已取消」吗？换个人登录，他能不能取消我的订单？我做了一个叫 <strong>Spec to Tested Code</strong> 的 Skill，就是想把这些容易到验收时才想起来的问题，提前带进开发过程。这样，当 AI 说「做完了」，我们知道该去哪里找依据。</p>
      <Heading number="02">先讲规则，再想象有人在用</Heading>
      <p>「可以取消订单」听起来已经够明确，真要写代码，里面却藏着好几个决定。假设我们已经确认：只有下单的人可以取消尚未发货的订单，取消成功后状态变为「已取消」。至于是否自动退款、什么时候回补库存，就先留作待确认的问题。项目里有账本和库存模块，也不等于这次一定要用到它们。先把已确认的规则写清楚，这就是 SDD（规格驱动开发）。接着，让两个人走一遍：小林取消自己的未发货订单，状态变为「已取消」；小周试着取消小林的订单，操作被拒绝，订单保持原状。用具体的人、动作和结果来讲清一条约定，就是 BDD（行为驱动开发）。写到这里，即使不读代码，别人也能跟我一起判断功能有没有做对。</p>
      <Figure src={image1} alt="先写清已确认规则，再用具体人物、动作和结果描述验收场景" />
      <Heading number="03">让测试真的抓住一次错误</Heading>
      <p>有了具体场景，就可以进入 TDD（测试驱动开发）：先写一个能检出错误的测试，实际运行，看它是不是因预期的断言失败；再补上最小实现，跑到通过；如果接着重构，就再跑一遍受影响的测试。</p>
      <blockquote><strong>依赖没装、数据库连不上，都不能算观察到了业务错误</strong></blockquote>
      <p>测试第一次就通过，也不用刻意制造失败，先弄清是已有实现满足规则，还是断言没有测到关键结果。</p>
      <p>仓库里的订单取消示例只用 Python 标准库：四项测试在不完整的实现上实际失败，补齐判断和状态更新后，四项通过。下载源码后，在仓库根目录运行 <code>python -B examples/order-cancellation/demo.py</code>，就能用同一套测试重放前后两个状态。演示验证的是内存中的权限判断和状态变化；如果产品要求刷新或重新登录后仍能看到「已取消」，还需要验证真实接口和持久化。这份演示也不涉及退款、库存回补、并发或线上权限。</p>
      <Figure src={image2} width={640} height={407} alt="订单取消示例：同一套测试在补齐实现前失败、补齐后通过的演示动图" />
      <Heading number="04">这套规则，Skill 自己遵守吗？</Heading>
      <p>除了示例代码，我也想看看这个 Skill 会不会按自己写下的规则做事。这一轮做了四组独立验证：只要求梳理规格时，它给出了规则、场景和待决问题，没有改文件；在缺少数据库的测试环境里，它报告了单元测试通过、集成场景未运行，没有笼统地说「全部通过」；规则确认后要求实现时，它完成了取消逻辑，没有顺手加入退款或库存回补；只要求评审时，它指出了问题，没有擅自修复。我把核对的文件变化、哈希和实际测试输出放进了验证记录。每组只跑了一次，也没有做跨模型比较。这些结果至少给了我一个可以复查、也可以接着复测的起点。</p>
      <Figure src={image3} alt="Spec to Tested Code 的四组独立验证与可复查的验证记录" />
      <Heading number="05">从一个小需求开始</Heading>
      <Figure src={image4} alt="从一个小需求开始使用 Spec to Tested Code" />
      <p>Skill 已经发布在 GitHub。可以运行 <code>npx skills add Annabelle0726/spec-to-tested-code --skill spec-to-tested-code -g</code>，按提示选择 Codex 等支持 Agent Skills 的工具，装好后重新加载技能；<code>-g</code> 是用户级安装，只想装到当前项目就去掉它。第一次用，可以直接说：「用 $spec-to-tested-code 帮我梳理『取消未发货订单』的已确认规则、验收场景和待决问题，先不改代码」</p>
      <p>规则已定就直接进入实现；碰到 bug 就先复现，再补能抓住它的回归测试；改一句文案，也不用硬套整套流程。下次 AI 跟我说「做完了」，我还是想问一句：「你怎么知道？」</p>
      <blockquote><strong>我希望它能告诉我哪条测试验证了哪条规则，也能直说哪里还没验证</strong></blockquote>
      <p>这样，即使我把功能交给一个没参与开发的人，他也知道该从哪里开始试。</p>
      <p>项目地址：<a href="https://github.com/Annabelle0726/spec-to-tested-code" target="_blank" rel="noopener noreferrer">github.com/Annabelle0726/spec-to-tested-code</a></p>
      <p>如果这篇文章对你有帮助，欢迎点个赞、点亮“在看”。<br />关注 <strong>独钓江雪9447</strong>，我们下次见</p>
      <Figure src={image5} height={360} alt="文章结尾的原文动图" />
      <ArticleFooter routeId="spec-to-tested-code-notes" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
