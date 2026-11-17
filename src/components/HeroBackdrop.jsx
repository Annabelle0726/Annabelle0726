import React, { useId } from 'react';

// Fine, fading silk filaments live at the margins, leaving the reading area quiet.
export default function HeroBackdrop() {
  const id = useId();
  return <div className="hero-backdrop" aria-hidden="true">
    <svg className="hero-backdrop-upper" viewBox="0 0 560 350" fill="none" focusable="false">
      <defs>
        <linearGradient id={`${id}-upper`} x1="65" y1="20" x2="450" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-champagne-gold)" stopOpacity="0" />
          <stop offset=".4" stopColor="var(--color-champagne-gold)" stopOpacity="0.23" />
          <stop offset="1" stopColor="var(--color-champagne-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M45-20C428-20 474 110 310 176C218 213 111 185 127 130C145 65 393 109 540 291" stroke={`url(#${id}-upper)`} strokeWidth=".65" />
      <path d="M18-8C362-31 481 94 324 184C245 229 158 200 142 154" stroke={`url(#${id}-upper)`} strokeWidth=".45" opacity=".65" />
      <path d="M-25 24C317-56 466 70 339 166C251 232 157 214 138 166" stroke={`url(#${id}-upper)`} strokeWidth=".4" opacity=".55" />
    </svg>
    <svg className="hero-backdrop-middle" viewBox="0 0 780 700" fill="none" focusable="false">
      <defs>
        <linearGradient id={`${id}-middle`} x1="50" y1="500" x2="670" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-lake)" stopOpacity="0" />
          <stop offset=".28" stopColor="var(--color-lagoon)" stopOpacity="0.115" />
          <stop offset=".67" stopColor="var(--color-azure)" stopOpacity="0.07" />
          <stop offset="1" stopColor="var(--color-azure)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-middle-gold`} x1="80" y1="160" x2="550" y2="550" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-champagne-gold)" stopOpacity="0" />
          <stop offset=".4" stopColor="var(--color-champagne-gold)" stopOpacity="0.154" />
          <stop offset="1" stopColor="var(--color-champagne-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id}-middle)`} strokeWidth=".65">
        <path d="M-80 510C153 576 114 179 362 167C522 159 543 302 733 218" />
        <path d="M-65 540C188 587 141 209 359 185C487 171 545 333 766 241" opacity=".55" />
        <path d="M-72 525C170 581 126 194 361 176C506 164 544 318 749 230" opacity=".75" />
        <path d="M-49 557C207 598 160 228 363 204C483 190 562 348 781 258" opacity=".45" />
        <path d="M41-70C-5 63 81 154 211 117S389 17 494 103" opacity=".6" />
      </g>
      <path d="M-41 327C106 317 161 80 334 122C495 161 362 474 600 554" stroke={`url(#${id}-middle-gold)`} strokeWidth=".55" />
    </svg>
    <svg className="hero-backdrop-lower" viewBox="0 0 780 340" fill="none" focusable="false">
      <defs>
        <linearGradient id={`${id}-blue`} x1="45" y1="300" x2="710" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-lake)" stopOpacity="0" />
          <stop offset=".28" stopColor="var(--color-lagoon)" stopOpacity="0.192" />
          <stop offset=".64" stopColor="var(--color-azure)" stopOpacity="0.096" />
          <stop offset="1" stopColor="var(--color-lake)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="70" y1="290" x2="655" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-champagne-gold)" stopOpacity="0" />
          <stop offset=".38" stopColor="var(--color-champagne-gold)" stopOpacity="0.307" />
          <stop offset="1" stopColor="var(--color-champagne-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id}-blue)`} strokeWidth=".55">
        <path d="M-65 305C79 137 203 102 347 183S581 219 770 44" />
        <path d="M-48 320C101 150 214 126 364 193S588 230 778 65" opacity=".65" />
        <path d="M-3 352C150 169 245 260 410 220S619 92 791 107" opacity=".45" />
        <path d="M-21 336C128 151 223 241 389 207S605 68 775 85" opacity=".7" />
      </g>
      <path d="M-45 285C111 145 240 273 418 193S603 83 751 112" stroke={`url(#${id}-gold)`} strokeWidth=".65" />
    </svg>
  </div>;
}
