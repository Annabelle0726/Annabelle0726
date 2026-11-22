// Oldest first, following the publication dates in the owner's WeChat collections.
export const wechatCollections = [
  { id: 'wechat-things-i-love', title: '做点喜欢的事', en: 'Things I love doing', description: '一些想说的话，关于被看见、继续尝试，以及我们想过的生活。记录想法变成作品的过程，以及一路上的犹豫、开心和新发现。', articles: [
    ['agency-bloom', 'Agency Bloom｜我们不断向前，究竟想抵达怎样的生活？'],
    ['agency-bloom-applause', '暂时没有掌声也想继续做下去'],
    ['agency-bloom-ideas', '给那些还没敢开始的想法，一次认真的尝试'],
    ['design-care', '好看，想让你多看一眼；用心，想让你心动'],
    ['personal-brand', 'AI 时代的个人品牌：你靠什么被记住？'],
    ['being-seen', '想被看见，也想看见你'],
  ] },
  { id: 'wechat-product-life', title: '产品背后的生活', en: 'Life behind products', description: '把产品放回真实生活，聊聊它解决了什么问题，又忽略了哪些人的处境。人们为何选择，从一部短剧、一次消费或一个产品出发，理解人们选择背后的理由。', articles: [
    ['agency-bloom-value', '当技术让一切变得越来越容易，真正值得思考的是我们还能创造什么独特的价值'],
    ['understanding-needs', '从短剧爆火，看懂人们真正需要什么'],
    ['waymark-notes', '求职已经够累了，别再让信息散落各处'],
    ['meaning-of-expression', '人会被遗忘，表达还有意义吗？'],
    ['taste-studio-notes', '审美会变，但我们始终向往美'],
    ['page-soul', '页面有了灵魂，是一种什么感觉？'],
    ['readme-atelier-notes', '好项目，值得一份好读的 README'],
    ['spec-to-tested-code-notes', 'AI 说「做完了」，我想再问一句'],
    ['beyond-the-selloff', '满屏都是绿，然后呢？'],
    ['experience-compounds', '工作不是打怪升级，为什么有人越做越厉害？'],
  ] },
  { id: 'wechat-seeing-each-other', title: '看见彼此', en: 'Seeing each other', description: '在这里，记录人与人之间的理解与距离，关注彼此的不同，也看见每个人独有的光。', articles: [
    ['respecting-lives', '尊重每一种生活，也看见每一个人'],
    ['ai-love-letters', 'AI 会写情话，那谁负责心动？'],
  ] },

];

export const collectionForArticle = id => wechatCollections.find(collection => collection.articles.some(([route]) => route === id));
