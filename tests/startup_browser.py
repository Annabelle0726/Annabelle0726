import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
out=Path(__file__).resolve().parents[1]/'output'/'loading-a'
out.mkdir(parents=True,exist_ok=True)
async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch()
  for width in [1440,390,320]:
   context=await browser.new_context(viewport={'width':width,'height':900})
   page=await context.new_page()
   release=asyncio.Event()
   async def hold(route):
    await release.wait()
    await route.continue_()
   await page.route('**/*.js',hold)
   await page.goto('http://127.0.0.1:4185/',wait_until='commit')
   await page.locator('#portfolio-startup h1').wait_for()
   assert await page.locator('#portfolio-startup').evaluate('(e)=>getComputedStyle(e).backgroundColor')=='rgb(252, 250, 243)'
   assert await page.locator('#portfolio-startup svg').count()==2
   assert not await page.evaluate('document.documentElement.scrollWidth>innerWidth')
   await page.screenshot(path=str(out/f'loading-{width}.png'))
   await page.emulate_media(reduced_motion='reduce')
   assert await page.locator('.startup-track').evaluate("(e)=>getComputedStyle(e,'::after').animationName")=='none'
   release.set()
   await page.locator('#hero.hero-opened').wait_for(timeout=15000)
   assert await page.locator('#portfolio-startup').count()==0
   await context.close()
  context=await browser.new_context()
  page=await context.new_page()
  await page.route('**/*.js',lambda route:route.abort())
  await page.goto('http://127.0.0.1:4185/')
  await page.locator('#startup-error').wait_for()
  assert await page.locator('#startup-status').is_hidden()
  assert await page.get_by_role('button',name='重新加载 / Reload').is_visible()
  await page.unroute('**/*.js')
  await page.get_by_role('button',name='重新加载 / Reload').click()
  await page.locator('#hero.hero-opened').wait_for(timeout=15000)
  await context.close()
  context=await browser.new_context(java_script_enabled=False)
  page=await context.new_page()
  await page.goto('http://127.0.0.1:4185/')
  assert await page.locator('noscript p').is_visible()
  assert await page.locator('#startup-status').is_hidden()
  await context.close()
  await browser.close()
  print('PASS: blocked-bundle loading at 1440/390/320, inline identity, no yellow flash or overflow, reduced motion, automatic handoff, failed-script retry and no-JS fallback.')
asyncio.run(main())
