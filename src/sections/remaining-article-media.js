import expression0 from '../assets/article-expression/0.gif';
import expression1 from '../assets/article-expression/1.png';
import expression2 from '../assets/article-expression/2.png';
import expression3 from '../assets/article-expression/3.png';
import expression4 from '../assets/article-expression/4.gif';
import expression5 from '../assets/article-expression/5.gif';
import expression6 from '../assets/article-expression/6.gif';
import loveletters0 from '../assets/article-love-letters/0.png';
import loveletters1 from '../assets/article-love-letters/1.png';
import loveletters2 from '../assets/article-love-letters/2.png';
import loveletters3 from '../assets/article-love-letters/3.png';
import loveletters4 from '../assets/article-love-letters/4.png';
import loveletters5 from '../assets/article-love-letters/5.gif';
import experience0 from '../assets/article-experience/0.png';
import experience1 from '../assets/article-experience/1.gif';
import experience2 from '../assets/article-experience/2.gif';
import experience3 from '../assets/article-experience/3.png';
import experience4 from '../assets/article-experience/4.gif';
import experience5 from '../assets/article-experience/5.png';
import experience6 from '../assets/article-experience/6.png';
import experience7 from '../assets/article-experience/7.gif';
const images = {
  'expression:0': { src: expression0, width: 560, height: 373, alt: '表达与被看见 · 原文配图 1' },
  'expression:1': { src: expression1, width: 1080, height: 720, alt: '表达与被看见 · 原文配图 2' },
  'expression:2': { src: expression2, width: 1080, height: 720, alt: '表达与被看见 · 原文配图 3' },
  'expression:3': { src: expression3, width: 1080, height: 720, alt: '表达与被看见 · 原文配图 4' },
  'expression:4': { src: expression4, width: 560, height: 373, alt: '表达与被看见 · 原文配图 5' },
  'expression:5': { src: expression5, width: 640, height: 272, alt: '表达与被看见 · 原文配图 6' },
  'expression:6': { src: expression6, width: 1080, height: 360, alt: '表达与被看见 · 原文配图 7' },
  'love-letters:0': { src: loveletters0, width: 1080, height: 720, alt: '人与人之间的心动与交流 · 原文配图 1' },
  'love-letters:1': { src: loveletters1, width: 1080, height: 720, alt: '人与人之间的心动与交流 · 原文配图 2' },
  'love-letters:2': { src: loveletters2, width: 1080, height: 720, alt: '人与人之间的心动与交流 · 原文配图 3' },
  'love-letters:3': { src: loveletters3, width: 1080, height: 720, alt: '人与人之间的心动与交流 · 原文配图 4' },
  'love-letters:4': { src: loveletters4, width: 1080, height: 720, alt: '人与人之间的心动与交流 · 原文配图 5' },
  'love-letters:5': { src: loveletters5, width: 640, height: 207, alt: '人与人之间的心动与交流 · 原文配图 6' },
  'experience:0': { src: experience0, width: 1080, height: 608, alt: '工作中的经验与成长 · 原文配图 1' },
  'experience:1': { src: experience1, width: 587, height: 439, alt: '工作中的经验与成长 · 原文配图 2' },
  'experience:2': { src: experience2, width: 640, height: 317, alt: '工作中的经验与成长 · 原文配图 3' },
  'experience:3': { src: experience3, width: 1080, height: 810, alt: '工作中的经验与成长 · 原文配图 4' },
  'experience:4': { src: experience4, width: 587, height: 439, alt: '工作中的经验与成长 · 原文配图 5' },
  'experience:5': { src: experience5, width: 1080, height: 810, alt: '工作中的经验与成长 · 原文配图 6' },
  'experience:6': { src: experience6, width: 1080, height: 810, alt: '工作中的经验与成长 · 原文配图 7' },
  'experience:7': { src: experience7, width: 1080, height: 360, alt: '工作中的经验与成长 · 原文配图 8' },
};
export const remainingArticleMedia = {
  'meaning-of-expression': {
    cover: images['expression:0'], beforeIntro: { 2: images['expression:1'] },
    beforeSections: { 0: images['expression:2'], 1: images['expression:3'] },
    beforeParagraphs: { '1:2': images['expression:4'], '2:1': images['expression:5'] },
    closing: images['expression:6'],
  },
  'ai-love-letters': {
    cover: images['love-letters:0'],
    beforeParagraphs: { '0:1': images['love-letters:1'], '1:1': images['love-letters:2'], '2:2': images['love-letters:3'], '3:1': images['love-letters:4'] },
    closing: images['love-letters:5'],
  },
  'experience-compounds': {
    cover: images['experience:0'], beforeIntro: { 1: images['experience:1'] },
    beforeParagraphs: { '0:1': images['experience:2'], '1:1': images['experience:3'], '2:1': images['experience:4'], '3:2': images['experience:5'], '3:4': images['experience:6'] },
    closing: images['experience:7'],
  },
};
