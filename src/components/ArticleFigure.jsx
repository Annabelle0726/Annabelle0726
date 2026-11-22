import React, { useId, useLayoutEffect, useRef, useState } from 'react';
import './article-figure.css';

function ImageDialog({ image, onClose, trigger }) {
  const dialog = useRef(null);
  const titleId = useId();
  useLayoutEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
    };
  }, []);

  return <dialog ref={dialog} className="article-image-dialog" aria-labelledby={titleId}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = event.currentTarget.querySelectorAll('button, a[href]');
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="article-image-viewer">
      <header>
        <h2 id={titleId}>{image.alt}</h2>
        <button type="button" onClick={onClose} aria-label="关闭大图" autoFocus>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
        </button>
      </header>
      <img {...image} />
      <a href={image.src} target="_blank" rel="noopener noreferrer">打开原图 ↗</a>
    </div>
  </dialog>;
}

// Size by purpose and aspect ratio, without cropping or stretching the source.
export default function ArticleFigure({ image, src, alt, width, height, caption, kind = 'illustration', align = 'center' }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const data = image || (src ? { src, alt, width, height } : null);
  if (!data) return null;
  const ratio = data.width / data.height;
  const limits = { cover: [520, 260], illustration: [520, 300], portrait: [300, 360], demo: [620, 360], signature: [220, 76] };
  const [maxWidth, maxHeight] = limits[kind];
  const figureWidth = Math.min(data.width, maxWidth, maxHeight * ratio);
  const compactHeight = kind === 'signature' ? 76 : kind === 'portrait' ? 300 : 220;
  const mobileWidth = Math.min(figureWidth, compactHeight * ratio);
  return <figure className={`article-figure article-figure--${kind}${align === 'aside' ? ' article-figure--aside' : ''}`}
    style={{ '--figure-width': `${figureWidth}px`, '--figure-mobile-width': `${mobileWidth}px` }}>
    {kind === 'signature' ? <img {...data} loading="lazy" /> : <button ref={trigger} className="article-image-trigger" type="button" aria-label={`放大查看：${data.alt}`} aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
      <img {...data} loading={kind === 'cover' ? 'eager' : 'lazy'} />
      <span className="article-image-expand" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4M4 4l6 6m10-6-6 6M4 20l6-6m10 6-6-6" /></svg></span>
    </button>}
    {caption && <figcaption className="article-cover-caption">{caption}</figcaption>}
    {open && <ImageDialog image={data} onClose={() => setOpen(false)} trigger={trigger} />}
  </figure>;
}
