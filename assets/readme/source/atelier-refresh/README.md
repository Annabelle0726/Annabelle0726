# 页面导览源文件

`projects.png`、`project-detail.png`、`design.png` 与对应的 `-mobile.png` 是本轮实际运行网站的截图。桌面视口 1280×900，手机视口 390×844；分别对应 `#portfolio`、`#web-agency-bloom` 与 `#XD`。页面中的项目、角色和个人资料沿用原站。

`tour.html` 以精确时间编排这些截图。导出是截图导览，不是连续操作录屏。它不会启动网站，也不重新抓取网页。网站变化后，应先更新对应的实际截图，再重新渲染。

使用 README Atelier 安装目录中的可选渲染脚本，在本仓库根目录执行。将 `/path/to/readme-atelier` 替换为实际安装路径：

```bash
npm install --prefix .work/render-runtime playwright
node .work/render-runtime/node_modules/playwright/cli.js install chromium
python -m pip install Pillow
node /path/to/readme-atelier/scripts/render_scene.mjs --input assets/readme/source/atelier-refresh/tour.html --out .work/tour-v2 --runtime .work/render-runtime --width 900 --height 850 --fps 10
python /path/to/readme-atelier/scripts/assemble_gif.py .work/tour-v2 .work/site-tour-v2.gif
node /path/to/readme-atelier/scripts/render_scene.mjs --input assets/readme/source/atelier-refresh/tour.html --out .work/tour-mobile-v2 --runtime .work/render-runtime --width 390 --height 1100 --fps 10
python /path/to/readme-atelier/scripts/assemble_gif.py .work/tour-mobile-v2 .work/site-tour-mobile-v2.gif
```

选择新输出目录，检查结果后再替换 README 使用的素材。第一帧 `frame-00000.png` 可作为静态预览。

本轮导出：桌面 900×794、12 秒、1,505,836 字节；手机 390×1007、12 秒、942,028 字节。每套原始序列 120 帧；GIF 合并重复静止帧后实际 15 帧，保留完整 12 秒时长。
