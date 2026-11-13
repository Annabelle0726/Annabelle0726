import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-respecting-lives/0.webp';
import image1 from '../assets/article-respecting-lives/1.gif';
import image2 from '../assets/article-respecting-lives/2.webp';
import image3 from '../assets/article-respecting-lives/3.webp';
import image4 from '../assets/article-respecting-lives/4.webp';
import image5 from '../assets/article-respecting-lives/5.webp';
import closingAnimation from '../assets/article-being-seen/4.gif';

const Figure = ({ src, alt, width = 1080, height = 460, compact = false }) => <figure className={`article-figure${compact ? ' article-figure-portrait' : ''}`}><img src={src} alt={alt} width={width} height={height} loading="lazy" /></figure>;
const Heading = ({ number, children }) => <h3><span>{number}</span>{children}</h3>;

export default function RespectingLivesArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="LIFE & RESPECT" title="尊重每一种生活，也看见每一个人" as="h1" />
    <div className="article-body">
      <Figure src={image0} alt="尊重每一种生活，也看见每一个人的开篇配图" />
      <Heading number="01">一个人，远比一个标签丰富</Heading>
      <p>最近看了一段关于中老年人网络生活的视频。让我记住的，是一些很普通的愿望：有人想记录日常，有人想学会一个新特效，有人穿上喜欢的衣服，认真为自己拍一张照片。无论到了什么年纪，人都可能想表达，想尝试，想把心里喜欢的东西，变成生活里真实的一部分。</p>
      <Figure src={image1} width={510} height={510} compact alt="关于记录日常与表达愿望的原文动图" />
      <p>这也让我想到残障人士，以及许多经常先被某个身份定义的人。我们很容易说出他们属于哪个群体，却未必知道他们擅长什么、关心什么，最近在为什么事情投入时间。一个人可能需要出行上的帮助，同时也有自己的专业判断；可能不熟悉手机操作，却有丰富的生活经验。</p>
      <blockquote>需要帮助的地方，不能代替对这个人的全部认识</blockquote>
      <p>我想讨论的，不只是怎样避免伤害别人，而是怎样更认真地认识一个人。除了看见他的困难，我们能不能也看见他的能力、愿望和选择？除了问“他需要什么照顾”，能不能再问一句：“他想做什么？”</p>
      <Heading number="02">有些能力，只是还没有遇到合适的条件</Heading>
      <p>一篇关于社区助老课堂的报道里，李阿姨学会了在手机上预约医院，后来又把学到的方法用到了另一家医院。这是一个很小的变化，却让我觉得值得停下来看看。她学到的不只是某个按钮在哪里，还包括怎样理解操作流程，再把这种理解用到新的情境里。一次耐心的讲解，给她留下了下次自己尝试的可能。</p>
      <p>我们常把“不熟悉”误认为“学不会”，也容易把“需要帮助”看成一种固定的状态。但一个人的表现，与他能接触到怎样的工具、说明和学习机会有关。如果界面复杂、提示难懂、操作稍慢就会失效，那么困难并不全在使用者身上。有时，换一种清楚的解释，允许多试几次，能力便有了显现的空间。这也提醒我，帮助可以不只是替人完成一次任务。能否让对方逐渐理解、保留选择，并在愿意的时候自己操作，同样重要。当然，独立并不是每个人都必须达到的标准。有人希望自己学会，有人更愿意获得稳定的协助。尊重，是让这两种需要都能被认真对待，而不是替所有人规定同一种生活方式。</p>
      <Figure src={image2} height={461} alt="关于学习条件与耐心支持的配图" />
      <Heading number="03">从使用者到创造者，看见经验里的价值</Heading>
      <p>新华社《瞭望》的一篇报道记录了蔡勇斌的经历：为了阅读，他扫描书籍，借助读屏软件获取内容，也参与了无障碍软件设计。这里值得看见的，不只是他怎样克服阅读的困难，还有他如何把自己的使用经验带进技术与设计之中。</p>
      <p>同一个功能，对不同的人意味着什么，往往需要真正使用它的人才能讲清楚。一个按钮有没有被读屏软件正确识别，操作顺序是否容易理解，出错以后能不能找到返回的办法，这些细节可能决定一个人能否顺利完成任务。亲身经历不是自动正确的答案，却能带来重要的问题，让设计者意识到：原来自己认为理所当然的步骤，对别人并不成立。</p>
      <Figure src={image3} alt="关于读屏、无障碍与共同设计的配图" />
      <p>因此，谈论残障人士参与工作与创作，不应该只停留在“给一个机会”。更实际的问题是：我们是否认真了解他的技能，是否提供了可用的工具，是否愿意让他的判断影响结果？他不只是被帮助的人，也可以是发现问题、提出方案、与他人共同完成工作的人。当然，并不是每个人都需要成为设计者、工程师，或取得引人注目的成绩，才值得被尊重。蔡勇斌的经历让我们看见一种可能，而不是为其他人设定榜样或要求。</p>
      <blockquote>一个人的价值，不应随着产出高低而变化</blockquote>
      <Heading number="04">被看见，也包括自己的决定被当回事</Heading>
      <p>我们习惯用一些容易辨认的标准认识一个人：学历、职位、收入，或者一项突出的成绩。这些能说明一些事情，却不能涵盖全部。有人善于观察，能察觉别人忽略的不便；有人愿意耐心解释，让复杂的事情变得容易理解；有人对颜色、材料和细节有敏锐的感受，也有人能够把一段混乱的经历整理清楚，给后来的人一点参考。这些能力不一定已经变成职业，也不一定得到过正式认可。有时，一个人自己也还没有找到准确的词来描述它。比起急着判断他“能不能做成什么”，也许更有用的是听他讲讲：哪些事情让他愿意多花一点时间，别人通常因为什么来请教他，他曾经怎样解决过一个具体的问题。</p>
      <Figure src={image4} alt="关于看见不同能力与个人选择的配图" />
      <p>但认识一个人的能力，并不意味着替他决定能力应该用在哪里。他可能想学习新的技能，也可能更想把已有的事情做深；可能愿意分享自己的经历，也可能希望保留私人空间。一个愿望不必足够宏大，一次选择也不必符合旁人关于成功的想象，才算合理。</p>
      <blockquote>尊重不只是相信一个人能做事，也包括承认他有权决定，自己想做什么、不想做什么</blockquote>
      <Heading number="05">给每一种生活，留一点展开的空间</Heading>
      <p>中老年人与残障人士面对的问题并不相同，同一个群体内部，也有不同的身体状况、经验和需要。理解不能停在一个笼统的标签上，更不能用一句“只要努力”带过现实的限制。真正有意义的支持，是把问题看得具体一些：缺的是清楚的操作说明、无障碍的工作环境、愿意听取意见的合作伙伴，还是一段可以慢慢尝试、不必立即交出成绩的时间？</p>
      <p>参与的意义，也不一定是做出一番事业。能决定一项与自己有关的安排，能把经验讲给别人听，能完成一个一直想试的作品，都可能让人感受到自己的想法被认真对待。我们不必把每一次学习都变成励志故事，也不必把每一份普通的快乐都解释成坚强。很多时候，人只是想方便一点、自在一点，按照自己的心意过日子。</p>
      <Figure src={image5} height={461} alt="给每一种生活留出空间的配图" />
      <p>我想，人有时需要的，不是别人替自己描绘一个光明的未来，而是有人愿意认真对待眼前尚未成形的愿望。不急着劝他坚持，也不急着替他放弃；一起把处境看清楚，把可能的方向摆出来，再让他决定哪一步值得尝试。</p>
      <p>看见一个人，是看见他已经走过的生活，也为他尚未展开的部分留一点空间。他可以有能力，也可以有困难；可以想改变，也可以暂时休息。这些并不矛盾。我们不必等到一个人做出令人惊叹的成绩，才承认他的价值。尊重每一种生活，也许就从这里开始：不替别人写好答案，愿意听他亲口说说，他想怎样生活。</p>
      <p>参考报道：北京日报：社区助老课堂；新华社《瞭望》：蔡勇斌与无障碍技术。</p>
      <Figure src={closingAnimation} height={360} alt="文章结尾的原文动图" />
      <p>如果这篇文章让你有所共鸣，欢迎点赞，也欢迎关注「独钓江雪9447」</p>
      <ArticleFooter routeId="respecting-lives" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
