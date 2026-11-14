import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-page-soul/0.webp';
import image1 from '../assets/article-page-soul/1.webp';
import image2 from '../assets/article-page-soul/2.webp';
import image3 from '../assets/article-page-soul/3.gif';
import image4 from '../assets/article-page-soul/4.webp';
import image5 from '../assets/article-page-soul/5.webp';
import image6 from '../assets/article-page-soul/6.webp';
import image7 from '../assets/article-page-soul/7.webp';
import closingAnimation from '../assets/article-taste-studio/7.gif';

const Figure = ({ src, alt, width = 1080, height = 720 }) => <figure className="article-figure"><img src={src} alt={alt} width={width} height={height} loading="lazy" /></figure>;
const Heading = ({ number, children }) => <h3><span>{number}</span>{children}</h3>;

export default function PageSoulArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="TASTE STUDIO / DESIGN NOTES" title="页面有了灵魂，是一种什么感觉？" as="h1" />
    <div className="article-body">
      <Figure src={image0} alt="页面有了灵魂，是一种什么感觉的开篇配图" />
      <p>有时候，一张页面交到我手里，颜色没有出错，排版也算整齐，可我读完一遍，还是记不住它。标题上有一行漂亮却没什么用的英文，卡片里还有卡片，连我没提供过的满意度都替我写好了。后来我发现，我真正想改的不是某个色号，而是这张页面还没有想清楚：它希望谁停下来，又希望对方先看见什么？</p>
      <Heading number="01">先想清楚，这一页要帮人做什么</Heading>
      <Figure src={image1} alt="设计前先理解页面目标与使用者的配图" />
      <p>做设计之前，我会先问三个问题：谁会打开这一页？他们为什么来？离开之前，应该能做成什么？比如一家独立花店的网站，第一次来的顾客也许不是为了欣赏花艺，而是想在下班路上带一束花回家。那今天有哪些花、最晚几点能取，就不能藏在漂亮照片下面。想试一个新的 AI 模型，我也会用这样一条短需求给它做首屏，再看它把什么放在最前面、标题有没有说人话。比起读榜单，我更想知道它能不能理解我在做的这件事。</p>
      <Figure src={image2} alt="围绕花店首页需求组织内容的配图" />
      <Heading number="02">同一页，应该有几种真正不同的答案</Heading>
      <p>与其在第一稿上反复说「再高级一点」，我更愿意把几个想法放到一起看。还是花店首页：一张从花瓣上的水珠开始，让人先感受到这一束花；一张先摆出今天可取的花束和价格，方便已经有打算的人；还有一张从街角的店面切入，让人想象自己下班后推门进去。花束、价格和自取入口都一样，变的是页面先说什么，接下来让人做什么。</p>
      <blockquote>如果把颜色拿掉，三张图还是同一个页面，那就值得重新想一稿。</blockquote>
      <p>草图能帮人选方向；如果分歧在于钱怎么选、滚动之后看到什么，就用可点的网页原型来比较。</p>
      <Figure src={image3} width={640} height={427} alt="对比不同页面设计方向的演示动图" />
      <Heading number="03">选中了，先说清楚到底喜欢哪里</Heading>
      <p>我可能说「我喜欢第一张」，真正舍不得的却只是那颗水珠。AI 如果把这句话听成「多用花朵特写」，下一轮给我一张更大的花，那个小细节反而没了。所以选定方向之后，我会把两件事写下来：</p>
      <blockquote>我想留下的是什么，接下来哪些规则能把它留住</blockquote>
      <p>字体层级、颜色、按钮样式和间距需要一致；同样值得写进设计规范的，是「手机端不能裁掉花瓣边缘」这种具体要求。这样做到第二页，或者换一位开发者来做，大家还知道该保护什么。</p>
      <Figure src={image4} alt="把喜欢的细节写入设计规范的配图" />
      <Heading number="04">打磨时做减法，也亲手走一遍</Heading>
      <Figure src={image5} alt="设计打磨与实际体验检查的配图" />
      <p>我会先在电脑和手机上看：第一眼落在哪里？最重要的动作找得到吗？如果一个区块本来就一看便知是目录，「目录」两个字可以删掉；但一封信的图标若让人猜不出是「投稿」，这两个字就要补回来。配图也是一样：知道标题会压在左上角，就在出图前给那里留出一块能读字的空间。动效可以让用户看清选中哪束花、取花时间怎么更新；如果静态画面已经讲得明白，就不用让整页都动起来。</p>
      <p>有条件的话，可以请没参与制作的人或另一个 AI 先看截图，让对方说清楚「哪里有问题、影响了什么、怎么改」。截图能看出按钮是不是被盖住，却看不出按下去会不会成功。最后还是要在实际页面点一次、滚一次，看看手机上能不能顺利走完这条路。通常改一两个真正影响使用的问题，比反复追一个设计分数更有用。</p>
      <Figure src={image6} alt="通过截图评审和实际操作验证页面的配图" />
      <Heading number="05">Taste Studio 可以帮你做什么？</Heading>
      <p>这也是我做 Taste Studio 的缘由。我把它做成一套可以交给 Codex 执行的设计流程。你给它一个页面和一个目标，它会先把同一屏做成三到四张可以并排比较的草图，然后停下来，先问你喜欢哪里、最想改哪里。它会等你说完，才讲自己的判断。你可以只说「我总想回去看 B，但说不清为什么」，这个反应就已经足够让下一轮往前走。</p>
      <p>选定之后，它会围绕你在意的细节继续改。需要落地时，可以把选中的方向写成设计规范，再拿实际页面检查两件事：</p>
      <blockquote>用户能不能做成那件事？最初打动你的地方，最后还在不在？</blockquote>
      <p>你在这次项目里喜欢的东西，也不会被直接当成下一个项目的默认风格。喜欢花店照片里一点不规则的水痕，和希望预约表读起来整齐，可以同时成立。技术让我们更快看见各种可能。我希望 Taste Studio 给人留下一点慢下来的时间：多看一眼，说出自己究竟喜欢哪里，然后把那个地方留到最后。</p>
      <Figure src={image7} alt="Taste Studio 设计流程的配图" />
      <p><a href="https://annabelle0726.github.io/taste-studio/" target="_blank" rel="noopener noreferrer">体验 Taste Studio</a> · <a href="https://github.com/Annabelle0726/taste-studio" target="_blank" rel="noopener noreferrer">查看项目</a></p>
      <Figure src={closingAnimation} width={640} height={207} alt="文章结尾的原文动图" />
      <p>如果这篇分享带给你一些启发，欢迎点赞，也欢迎关注「独钓江雪9447」，一起分享更多想法</p>
      <ArticleFooter routeId="page-soul" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
