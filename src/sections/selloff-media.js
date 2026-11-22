import cover from '../assets/article-selloff/0.png';
import market from '../assets/article-selloff/1.png';
import practice from '../assets/article-selloff/2.png';
import learning from '../assets/article-selloff/3.png';
import signature from '../assets/article-selloff/4.gif';

// Positions follow the source article: https://mp.weixin.qq.com/s/rRsfjI6gLm-g9v0RNNLDhg
export const selloffMedia = {
  cover: { src: cover, width: 1080, height: 460, alt: '特朗普与满屏绿色行情的梗图' },
  beforeParagraphs: {
    '0:0': { src: market, width: 1080, height: 608, alt: '绿色行情屏幕前的投资者与工厂中的经营者' },
    '2:1': { src: practice, width: 1080, height: 608, alt: '观察视频留存与评论反馈，先调整内容开头' },
  },
  afterBody: { src: learning, width: 1080, height: 608, alt: '投资自己、积累经验与能力的文章配图' },
  closing: { src: signature, width: 1080, height: 360, alt: 'Annabelle 文章结尾签名动图' },
};
