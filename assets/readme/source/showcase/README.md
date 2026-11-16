# README 网站导览配图

2026-11-15 更新。阅读顺序为全栈项目、UI/UX、AI 产品、数据与 AI，随后介绍首页、About、公众号、灵感收藏与 Contact。

## 素材来源

- `cover-art.png`：本轮使用内置图像生成工具制作的概念插画，不是真实产品截图。提示词见 `cover-prompt.txt`。
- `fullstack-*.png`：本地运行的 `#portfolio` 页面中 Agency Bloom 开场、Belay 练习台和 Somnia 书架模块。
- `ux-*.png`：`#XD` 页面中的口味日历、阅读产品与旅行明信片模块。
- `ai-*.png`：`#ai-products` 中的 Waymark、Taste Studio 和 README Atelier 模块。Waymark 是页面内的示例岗位概念演示；其余图片沿用页面中明确标记的设计草图和概念案例。
- `data-*.png`：`#services` 中的原始分析图表预览和选址框架。
- `page-*.png`：`#about`、`#agency-bloom` 和 `#contact` 的页面局部。

截图来自实际运行网站，桌面视口为 1440×1000，并启用减少动效。它们是静态页面截取，不是操作录屏，也不证明所有展示界面均由作者独立完成；具体参与范围以 README 表格与案例正文为准。

## 编辑与导出

`layout.html` 保留文字与排版。浏览器打开后使用 `?scene=cover`、`fullstack`、`ux`、`ai`、`data` 或 `pages` 选择画面。画布宽 800 CSS 像素，封面高 230，图片组高 196。等待图片加载完成后，按 2 倍像素密度截取 `#scene`，以 WebP 质量 86 导出。

最终文件位于上两级的 `showcase-*.webp`，尺寸为 1600×460 或 1600×392。README 限制展示宽度为 800，窄屏由渲染器等比缩放。所有项目名称、说明和链接均在 Markdown 中另有文字版本。

更新页面后应重新截图；修改封面文字、图片顺序或画框时应更新 `layout.html`，再导出对应文件。旧图片保留在仓库中供历史引用，本次 README 使用新文件。

2026-11-16：项目画框改为铺满取景。data-art.png 为新生成的三联概念插画，分别表达金融异常信号、公共数据流向和可持续数据中心选址；并非真实图表或分析结果。最终缩略图保留 800×196 的展示尺寸。

最新调整：停用 data-art.png 概念插画。数据卡片恢复原始 athub-4.png、viz-3.png 图表与页面选址框架，采用淡色底板和轻阴影。Belay 使用已有 success.webp 真实界面，文章使用原始开篇 0.webp；About 使用肖像与文字组合。上述源图通过 layout.html 中的仓库相对路径引用。
