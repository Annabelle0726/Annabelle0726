import React from 'react';
import ArticleFigure from '../components/ArticleFigure';
import ArticleFooter from '../components/ArticleFooter';
import SectionHeader from '../components/SectionHeader';
import { collectionForArticle } from '../components/wechat-catalog';
import cover from '../assets/article-ai-efficiency-gains/0.png';
import productivity from '../assets/article-ai-efficiency-gains/1.png';
import costs from '../assets/article-ai-efficiency-gains/2.png';
import trust from '../assets/article-ai-efficiency-gains/3.png';
import valuation from '../assets/article-ai-efficiency-gains/4.png';
import balance from '../assets/article-ai-efficiency-gains/5.png';
import signature from '../assets/article-selloff/4.gif';
import './agency-bloom.css';

const routeId = 'ai-efficiency-gains';
const collection = collectionForArticle(routeId);
const title = collection.articles.find(([id]) => id === routeId)[1];

function ChapterHeading({ number, topic, children }) {
  return <>
    <h3><span>{number}</span>{children}</h3>
    <p className="article-topic" lang="en"><em>{topic}</em></p>
  </>;
}

export default function AiEfficiencyGainsArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN">
    <div className="article-page">
      <SectionHeader eyebrow={collection.en.toUpperCase() + ' / NOTES'} title={title} as="h1" />
      <div className="article-body">
        <ArticleFigure src={cover} width={1080} height={460} kind="cover" alt="书页、金币和放大镜，金币投下一叠更高的影子" />
        <p>没工作的时候想拼命找，真找到工作，又想问一句，怎么上班这么累？现在有些活儿，原来要做一个月，用 AI 可能两三天就干完了。听到这里，我的第一反应是，那岂不是可以早点下班？再一想，老板听到的可能是另一句：这个月还能再交几份？同一件事，员工想到的是工作量，公司想到的是利润，股市想到的是明年能多赚多少。三个问题都合理，但答案要到不同的地方找。我想弄清楚的是，做一件事的成本大幅下降后，谁能留下这笔收益？等这家公司出现在我的股票观察名单里，我又得多问一句：市场已经为这笔收益出了多高的价？</p>
        <ArticleFigure src={productivity} width={1080} height={459} alt="时钟旁的成捆纸张经过黑色方块，另一端放着几捆纸张和金币" />

        <ChapterHeading number="01" topic="What Did AI Actually Save?">一个月的活，两三天做完</ChapterHeading>
        <p>拿一家按项目收费的服务公司来说。过去一份报告占用一个人一个月，现在用 AI，两三天就能交，交付质量也过关。员工照领月薪，公司暂时也接不到更多项目，当期工资支出并没有随工时一起下降。公司得到的是一段可调配的时间。要等这段时间变成更多付费项目、更少的外包开支，或者让团队在业务增长时少招几个人，它才可能变成财务上的收益。模型、数据、复核和返工的钱也得一起算进去。</p>
        <ArticleFigure src={costs} width={1080} height={460} align="aside" alt="信封、钱包、账本和芯片由金线连在一起" />
        <p>这里还有个经常被漏掉的变量，就是需求。如果客户每个月只需要看一次这份报告，报告做快十倍，他也未必会买十份。反过来，如果以前排队等交付的客户很多，缩短周期就可能让公司用原有团队多做生意。<strong>我会先看 AI 加速的是哪一步，再看那一步原本是不是限制收入的瓶颈。</strong> 报告做得再快，卡在销售签单、客户审核或回款，公司也得在那里继续等。</p>

        <ChapterHeading number="02" topic="Who Captures the Gains?">效率提升以后，谁有条件把收益留下来？</ChapterHeading>
        <p>还是这家公司。假设过去一单收一百，直接交付成本是七十，账面上留下三十。用了 AI 以后，连模型费用和人工复核都算上，成本降到五十。要是报价还能维持在一百，这一单就多留下二十。要是同行也用了 AI，客户把报价压到八十，这一单还是只留下三十。客户少付了二十，公司留住的金额和以前一样。这里算的是一单的账，公司的总利润还要看订单量和其他开支。</p>
        <ArticleFigure src={trust} width={1080} height={459} align="aside" alt="书桌上有签封文件，一只手翻看摞起来的报告" />
        <p>这也是我觉得「信任」在生意里很具体的地方。同样能做出一份报告，有的公司只负责把文件交出去，有的公司能讲清楚数据的来历，出了偏差能追溯，客户真要据此做决定时也找得到人。客户愿意为这些东西继续付原价，效率带来的收益就更可能留在公司。如果大家做出来的东西很容易互相替换，客户就能拿几份报价来谈。员工能不能分到一部分，也要看他掌握的能力是否稀缺，公司有没有提成、奖金或其他分享收益的安排。模型供应商则可能通过收费分走一部分。</p>
        <blockquote><strong>决定成本能降多少，竞争和议价能力决定这笔收益最后怎么分。 这比问「哪家公司用了 AI」更接近我关心的财富分配问题。</strong></blockquote>

        <ChapterHeading number="03" topic="Pricing In the Future">股价反映预期，业绩验证预期</ChapterHeading>
        <p>一家公司的业务确实改善了，买它的股票能拿到多少回报，是另外一道题。股价会反映市场对未来现金流的判断，也会受利率和风险偏好影响。单看 AI 这条线，我想问的是，市场现在期待公司多赚多少、多久能赚到，以及这笔钱能不能持续留下来。财报出来以后，收入、毛利、投入和现金流，都会让市场重估原先的判断。</p>
        <ArticleFigure src={valuation} width={1080} height={460} align="aside" alt="放大镜、金色信封和带标签的水晶球摆在一起" />
        <p>比如市场原来预期一家公司明年能多赚一百，后来它真的多赚了六十。六十已经让经营比去年好，但如果股价之前反映的是一百，财报出来，市场仍可能下调预期。反过来，一家公司盈利还在下降，但降幅比大家原先担心的小，股价也可能先涨。<strong>看财报要比两次，一次和过去比，一次和市场此前的预期比。</strong> 前者告诉我经营有没有改善，后者才解释了为什么一份看起来不错的财报也可能让股价失望。</p>

        <ChapterHeading number="04" topic="What’s Already Priced In?">日子紧的时候，更要看清股价在期待什么</ChapterHeading>
        <p>有些人还在为工作和收入发愁，市场已经在为某些公司几年后的利润出价。这两件事可以同时发生。一个人现在手头紧不紧，要看工资、支出和工作的稳定性。股价反映的则是投资者对未来的估计。哪怕 AI 真的推高了一些企业的利润，工资、商品价格和股东回报也会按各自的节奏变化。搞清楚谁能分到收益，比看见上涨就以为这笔钱已经赚到手了更重要。</p>
        <ArticleFigure src={balance} width={1080} height={460} align="aside" alt="天平两端放着金币和透明圆片，旁边摊着一张纸" />
        <p>回到开头：<strong>一个月的活两三天做完，剩下的时间可能让我早点下班，也可能变成老板手里的下一张排期表</strong>。站到投资者的位置，我还是会追问：公司最后留下了多少钱？今天的股价，又已经为这笔还没赚到的钱付了多少？等财报出来，我想看的，就是现实和当初出价时的预期差了多远。但财报里不会写，一个人为什么一边拼命找工作，一边又盼着早点下班。那种矛盾也不难理解：我们需要一份收入，也希望生活不必全围着这份收入转。AI 能把一个月的活变成两三天，至于这算不算我们生活里的进步，我更想看的是：那些原本没多少选择的人，后来有没有多一点余地，决定自己的日子怎么过。</p>
        <p>愿我们练出把活干快的本事，也有底气把省下来的时间留一部分给自己，去过工作以外的生活。如果这篇文章对你有帮助，欢迎点个赞、点亮星标<br />关注 <strong>独钓江雪9447</strong>，我们下次见</p>
        <ArticleFigure src={signature} width={1080} height={360} kind="signature" alt="文章结尾的原文签名动图" />
        <ArticleFooter routeId={routeId} language={language} onNavigate={onNavigate} />
      </div>
    </div>
  </article>;
}
