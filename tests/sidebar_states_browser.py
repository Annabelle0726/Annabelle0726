from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
out=root/'output'/'sidebar-states'
out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch()
 page=b.new_page(viewport={'width':1440,'height':1000})
 errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 def style(el):
  return el.evaluate("(e)=>{let s=getComputedStyle(e);return [s.backgroundColor,s.color,s.fontWeight,s.outlineStyle,s.outlineColor,s.outlineOffset]}")
 current=[]
 for route in ['portfolio','XD','ai-products','services','XD-cupcakes']:
  page.goto('http://127.0.0.1:4185/#'+route)
  link=page.locator('#header a[href="#'+route+'"]').last
  link.wait_for()
  page.wait_for_timeout(500)
  page.mouse.move(1200,900)
  current.append(style(link)[:3])
 assert all(s==current[0] for s in current),current
 # Test all second-level links and a nested leaf while inactive.
 selectors=['#portfolio','#XD','#ai-products','#services','#XD-reverie']
 hover=[];pressed=[];focus=[]
 for href in selectors:
  link=page.locator('#header a[href="'+href+'"]').last
  link.hover()
  page.wait_for_timeout(200)
  hover.append(style(link)[:2])
  page.mouse.down()
  page.wait_for_timeout(200)
  pressed.append(style(link)[:2])
  # Move away before releasing so the test does not navigate.
  page.mouse.move(1200,900)
  page.mouse.up()
  link.focus()
  page.keyboard.press('Tab')
  page.keyboard.press('Shift+Tab')
  focus.append(style(link)[3:])
 assert all(s==hover[0] for s in hover),hover
 assert all(s==pressed[0] for s in pressed),pressed
 assert all(s==focus[0] for s in focus),focus
 assert focus[0][0]=='solid',focus
 page.locator('#header a[href="#ai-products"]').click()
 page.wait_for_timeout(500)
 assert page.locator('#header a[href="#ai-products"]').get_attribute('aria-current')=='page'
 page.locator('#header').screenshot(path=str(out/'desktop-active.png'))
 # Disclosure operates independently and does not change route.
 toggle=page.locator('[aria-controls="sidebar-design-projects"]')
 before=page.url
 old=toggle.get_attribute('aria-expanded')
 toggle.click()
 assert toggle.get_attribute('aria-expanded')!=old
 assert page.url==before
 page.set_viewport_size({'width':390,'height':844})
 page.locator('.shell-controls .mobile-nav-toggle').click()
 page.locator('#header a[href="#ai-products"]').scroll_into_view_if_needed()
 page.wait_for_timeout(300)
 page.locator('#header').screenshot(path=str(out/'mobile-active.png'))
 page.locator('#header a[href="#services"]').click()
 assert page.locator('.mobile-nav-toggle').get_attribute('aria-expanded')=='false'
 page.emulate_media(reduced_motion='reduce')
 page.locator('.shell-controls .mobile-nav-toggle').click()
 assert page.locator('#header a[href="#services"]').evaluate('(e)=>getComputedStyle(e).transitionDuration')=='0s'
 assert not errors,errors
 print('PASS: matching current, hover, pressed and keyboard focus styles across five routes; disclosure, mobile navigation and reduced motion.')
 b.close()
