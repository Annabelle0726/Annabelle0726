import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ArticleFooter from '../components/ArticleFooter';
import './agency-bloom.css';
import image0 from '../assets/article-taste-studio/0.gif';
import image1 from '../assets/article-taste-studio/1.webp';
import image2 from '../assets/article-taste-studio/2.webp';
import image3 from '../assets/article-taste-studio/3.gif';
import image4 from '../assets/article-taste-studio/4.webp';
import image5 from '../assets/article-taste-studio/5.webp';
import image6 from '../assets/article-taste-studio/6.gif';
import image7 from '../assets/article-taste-studio/7.gif';

const Figure = ({ src, alt, width = 1080, height = 720 }) => <figure className="article-figure"><img src={src} alt={alt} width={width} height={height} loading="lazy" /></figure>;
const Heading = ({ number, children }) => <h3><span>{number}</span>{children}</h3>;

export default function TasteStudioArticle({ language = 'zh', onNavigate }) {
  return <article className="agency-article" lang="zh-CN"><div className="article-page">
    <SectionHeader eyebrow="TASTE STUDIO / DESIGN NOTES" title="审美会变，但我们始终向往美" as="h1" />
    <div className="article-body">
      <Figure src={image0} width={1079} height={471} alt="审美会变，但我们始终向往美的开篇动图" />
      <Heading number="01">那种说不清的「差一点」</Heading>
      <p>有时候，我会在一张图片前停留很久。也许是因为光落在桌面上的角度，也许是一抹恰到好处的颜色，或者某个几乎不被注意的细节。它们未必有什么惊人的技法，却让人隐约觉得：就是这里，让整个画面有了温度。</p>
      <p>后来，我开始用 AI 做页面。它能在很短的时间里，把一句想法变成一张完整的设计图：标题、图片、按钮、颜色，似乎都已经安排妥当。可看着那些画面，我常常仍有一种难以描述的失落。它们并不难看，却好像少了一点什么。有时候，我终于在一张草图里找到了想要的感觉，可几轮修改之后，最初打动我的那处细节却悄悄消失了。</p>
      <Figure src={image1} height={608} alt="关于 AI 页面与最初设计感受的配图" />
      <p>页面越来越完整，我心里的那个画面却越来越远。</p>
      <Heading number="02">每个人眼中的美</Heading>
      <p>我开始想，我们说一件东西「好看」的时候，究竟在说什么？同样是一张手作书的照片，有人喜欢朱红色的封面，有人喜欢纸页的纹理，而我的目光可能停在书脊上那条细细的金线上。如果只把这种喜欢理解为「我偏爱红色」，下一次得到一张更红、更浓烈的图，也未必能让我找回同样的感受。打动我的，也许是那条金线与封面之间的关系，是它恰好留出的克制和余韵。</p>
      <Figure src={image2} alt="关于颜色、纹理与审美细节的配图" />
      <p>不同时代、不同的人，眼中的美各不相同。我们喜欢的颜色会变，习惯的表达会变，生活的环境也会慢慢改变我们的目光。但人总会被某些东西触动：一片光影，一处留白，一种难以言说的秩序，或者一个让自己感到被理解的瞬间。我想，技术不断向前的时候，这些细微而独特的感受，也值得被认真对待。</p>
      <Heading number="03">Taste Studio 如何工作？</Heading>
      <p>带着这样的想法，我做了 Taste Studio。它是一个设计 Skill，可以理解为一套交给 AI 的工作方法：帮助我们探索不同的设计方向，让那些原本只能用「有质感」「再特别一点」来形容的念头，变成可以看见、可以比较的画面。</p>
      <p>设计开始前，Taste Studio 会先了解页面是为谁而做，以及访客希望完成什么。接着，它围绕同一个页面探索三到四种不同的设计草图，让你比较构图、氛围和视觉重点。你可以先指出喜欢或想调整的细节，再和 AI 一起选定方向、打磨配色、字体、按钮与留白。最后，如果交付的是网页，它会检查实际页面是否清晰好用，也看看最初打动你的那个细节是否还在。</p>
      <Figure src={image3} width={640} height={400} alt="Taste Studio 探索设计方向的操作动图" />
      <p>比如，一家花店想做一个首页。它可以先让人看到花瓣的纹理，让访客被一朵花的细节吸引；也可以把当天的花束和取花信息放在显眼的位置，方便下班路上的人迅速做出选择；还可以从街角的店面开始，让人先感受到这家花店的气息。它们面对的是同一个页面，却把目光引向了不同的地方，也试着回答不同的问题：人们来到这里，最想先看到什么？</p>
      <Figure src={image4} alt="花店首页不同设计方向的对比" />
      <p>当这些画面摆在一起，选择就不再只是抽象的一句「我喜欢这个风格」。你可以说，第一张图的氛围让我想停下来，第二张图的信息又让我觉得很清楚；也可以只是指出一处细节，说不清原因，但希望它留下来。</p>
      <p>你不需要先拥有一套准确的设计语言，才能表达自己的审美。</p>
      <Heading number="04">让喜欢的细节留在页面里</Heading>
      <p>我也很在意，设计最终能不能回到真实的使用中。一个页面不仅要有自己的气质，也要让人看得懂、用得顺：访客能不能找到需要的信息，手机上的画面是否依然清晰，点击之后有没有得到回应。与此同时，我想始终留着一个问题：</p>
      <p>最初打动你的那一处，最后还在吗？</p>
      <p>如果喜欢的是花瓣边缘的一颗水珠，它在手机上有没有被裁掉？如果喜欢的是一种安静的感觉，增加内容之后，它是否依然存在？</p>
      <Figure src={image5} alt="将喜欢的设计细节保留到实际页面" />
      <p>关于审美偏好，我也希望保留一些耐心。一次喜欢，总有它发生的场景。手作品牌里不规则的纹理，或许让你感受到制作的痕迹；但面对一个需要快速查找信息的页面，你可能更希望它清楚、整齐。因此，Taste Studio 会把你的原话、所指的细节和当时的项目场景放在一起记录，以后遇到相近的任务，再和你确认这份偏好是否仍然适用。人的感受和需求会变化，设计也应该留有重新判断的空间；这套方法能在多大程度上帮助 AI 接近人的真实感受，仍需要在实际使用中不断验证。</p>
      <Heading number="05">一起探索更多可能</Heading>
      <p>现在，我把这套方法和一个中文演示网站整理在了一起。网站里可以看到从简报、草图、选择细节到尝试页面的过程，也能浏览作品集、产品介绍页、创作者主页和活动报名页等不同场景。演示网站可以直接浏览；如果想用 Skill 生成新的设计草图，需要在支持本地 Skill 和图像生成的 AI 工作环境中使用。演示网站本身不连接生图服务。</p>
      <Figure src={image6} width={640} height={427} alt="Taste Studio 中文演示网站动图" />
      <p>如果你也曾经看着 AI 生成的页面，觉得「好像还不对」，却一时找不到更准确的话，希望 Taste Studio 能陪你多看一会儿。也许，我们不必急着给自己的喜欢下定义。先指出那个让你愿意停留的地方，接下来的方向，就可以从那里慢慢生长。</p>
      <p><a href="https://annabelle0726.github.io/taste-studio/" target="_blank" rel="noopener noreferrer">体验 Taste Studio</a> · <a href="https://github.com/Annabelle0726/taste-studio" target="_blank" rel="noopener noreferrer">查看项目与 Skill</a></p>
      <Figure src={image7} width={640} height={207} alt="文章结尾动图" />
      <p>如果这篇分享带给你一些启发，欢迎点赞，也欢迎关注「独钓江雪9447」</p>
      <ArticleFooter routeId="taste-studio-notes" language={language} onNavigate={onNavigate} />
    </div>
  </div></article>;
}
