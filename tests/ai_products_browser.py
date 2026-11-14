from pathlib import Path
import json
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parents[1]
out = root / 'output' / 'ai-products'
out.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width':1440,'height':1024}, device_scale_factor=1)
    errors=[]
    page.on('pageerror', lambda err: errors.append(str(err)))
    page.goto('http://127.0.0.1:4185/#ai-products')
    page.locator('#ai-products h1').wait_for()
    page.wait_for_timeout(700)
    assert page.locator('.ai-waymark').get_attribute('data-confirmed') == 'false'
    page.locator('.wm-confirm').click()
    assert page.locator('.ai-waymark').get_attribute('data-confirmed') == 'true'
    assert '已更新' in page.locator('.wm-assistant [role=status]').inner_text()
    page.locator('.wm-confirm').click()
    assert page.locator('.ai-waymark').get_attribute('data-confirmed') == 'false'
    page.get_by_role('button',name='查看完整草图 ↗',exact=True).focus()
    page.keyboard.press('Enter')
    assert page.locator('.ai-concept-dialog').is_visible()
    page.keyboard.press('Escape')
    assert not page.locator('.ai-concept-dialog').is_visible()
    assert page.get_by_role('button',name='查看完整草图 ↗',exact=True).evaluate('(el)=>el === document.activeElement')
    links=page.locator('.ai-project-link')
    assert links.nth(0).get_attribute('href') == '#waymark-notes'
    assert links.nth(1).get_attribute('href') == '#taste-studio-notes'
    links.nth(0).click()
    page.locator('#ai-products').wait_for(state='detached')
    assert page.locator('h1').inner_text() == '求职已经够累了，别再让信息散落各处'
    page.go_back()
    page.locator('#ai-products h1').wait_for()
    results=[]
    for lang in ['zh','en']:
        page.locator('.shell-controls .sidebar-language button').nth(1 if lang == 'en' else 0).click()
        page.wait_for_function("(lang)=>document.querySelector('#ai-products').lang === (lang === 'en' ? 'en' : 'zh-CN')",arg=lang)
        for width in [1440,1280,1100,1024,768,390,320]:
            page.set_viewport_size({'width':width,'height':900})
            page.goto('http://127.0.0.1:4185/#ai-products')
            page.locator('#ai-products h1').wait_for()
            page.evaluate("document.fonts.ready")
            page.wait_for_timeout(700)
            page.locator('.ai-concept-art').scroll_into_view_if_needed()
            page.wait_for_function("Array.from(document.querySelectorAll('#ai-products img')).filter(i=>!i.closest('dialog')).every(i=>i.complete && i.naturalWidth>0)")
            page.evaluate('scrollTo(0,0)')
            assert page.locator('#ai-products').get_attribute('lang') == ('en' if lang == 'en' else 'zh-CN')
            assert not page.evaluate("document.documentElement.scrollWidth > innerWidth"), (lang,width,'overflow')
            assert page.locator('.ai-concept-art').evaluate("(el)=>getComputedStyle(el).objectFit") == 'contain'
            sizes=page.locator('.ai-preview').evaluate_all("(els)=>els.map(el=>({height:el.getBoundingClientRect().height, width:el.getBoundingClientRect().width}))")
            if width >= 1100:
                assert sizes[0]['height'] < 490, (lang,width,sizes)
                assert page.locator('.wm-board').is_visible()
                assert page.locator('.wm-board .wm-column').count() == 3
            if width < 768:
                assert page.locator('.wm-mobile-jobs').is_visible()
                assert not page.locator('.wm-board').is_visible()
                bounds=page.evaluate("() => ({heading:document.querySelector('.ai-products .section-header').getBoundingClientRect().top,controls:document.querySelector('.shell-controls').getBoundingClientRect().bottom})")
                assert bounds['heading'] >= bounds['controls']+8, bounds
            assistant=page.locator('.wm-assistant').bounding_box()
            parent=page.locator('.ai-waymark').bounding_box()
            assert assistant['x'] >= parent['x'] and assistant['x']+assistant['width'] <= parent['x']+parent['width'], (lang,width,'assistant bounds')
            results.append({'lang':lang,'width':width,'preview_dimensions':sizes,'overflow':False})
            if width in [1440,390,320]:
                page.screenshot(path=str(out/f'refined-{lang}-{width}.png'),full_page=True)
    page.set_viewport_size({'width':390,'height':844})
    page.get_by_role('button',name='Open navigation',exact=True).click()
    page.locator('#header a[href="#services"]').click()
    page.locator('#services').wait_for()
    assert page.locator('.mobile-nav-toggle').get_attribute('aria-expanded') == 'false'
    page.get_by_role('button',name='Open navigation',exact=True).click()
    page.locator('#header a[href="#ai-products"]').click()
    page.locator('#ai-products').wait_for()
    assert page.locator('.mobile-nav-toggle').get_attribute('aria-expanded') == 'false'
    page.emulate_media(reduced_motion='reduce')
    page.locator('.wm-confirm').click()
    assert page.locator('.ai-waymark').get_attribute('data-confirmed') == 'true'
    assert not errors, errors
    print(json.dumps({'responsive':results,'interactions':'passed','page_errors':errors},indent=2))
    browser.close()
