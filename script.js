/* MJ's portfolio
   A small low-poly room (three.js) you can walk around in.
   The desk has my Figma + Canva work on the computer and my art on the pen tablet. */

/* ---------- 1. Your projects ----------
   mock:  phone, browser, slides, poster, brochure, infographic (drawn picture)
   thumb: path to a screenshot, e.g. 'images/works/cinechill.png'.
          If you add one, it shows inside the crystal instead of the drawing. */
const projects = [
  { title: 'Bible Study App', type: 'figma', kind: 'Mobile app', mock: 'phone', thumb: '',
    embed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FH6zoaBemqDUv5z3ZuDFk3A%2FBible-App--Copy-%3Ft%3DjWJaD0wMbaGJyNI6-1',
    url: 'https://www.figma.com/design/H6zoaBemqDUv5z3ZuDFk3A/Bible-App--Copy-?t=jWJaD0wMbaGJyNI6-1' },
  { title: 'CINECHILL', type: 'figma', kind: 'Movie ticket booking app', mock: 'phone', thumb: '',
    embed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FogaAPc76WbhZEbiU7C1AYk%2FMovie-Ticket-Booking-Application%3Fnode-id%3D0-1%26p%3Df',
    url: 'https://www.figma.com/design/ogaAPc76WbhZEbiU7C1AYk/Movie-Ticket-Booking-Application?node-id=0-1&p=f' },
  { title: 'SLU Document Management System', type: 'figma', kind: 'Web system', mock: 'browser', thumb: '',
    embed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FJl4KgKn2wF2b0hKv1C741G%2FWebtech%3Fnode-id%3D1-14%26t%3Dj0VO6nka4wXLfBV8-1',
    url: 'https://www.figma.com/design/Jl4KgKn2wF2b0hKv1C741G/Webtech?node-id=1-14&t=j0VO6nka4wXLfBV8-1' },
  { title: 'Gamified Learning Application', type: 'figma', kind: 'Learning app', mock: 'phone', thumb: '',
    embed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fp6Knreh2QNXJU419newlZ7%2FFinal-Project-Prototypes%3Fnode-id%3D0-1%26t%3DrOabs3kIKgdPbBab-1',
    url: 'https://www.figma.com/design/p6Knreh2QNXJU419newlZ7/Final-Project-Prototypes?node-id=0-1&t=rOabs3kIKgdPbBab-1' },
  { title: 'Agricultural Website', type: 'figma', kind: 'Website', mock: 'browser', thumb: '',
    embed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F44fIxEYOBAuk8h1HvbpemK%2F211Website--Copy-%3Fnode-id%3D0-1%26t%3DjWJaD0wMbaGJyNI6-1',
    url: 'https://www.figma.com/design/44fIxEYOBAuk8h1HvbpemK/211Website--Copy-?node-id=0-1&t=jWJaD0wMbaGJyNI6-1' },
  { title: 'Brochure Theme Park', type: 'canva', kind: 'Brochure', mock: 'brochure', thumb: '',
    embed: 'https://www.canva.com/design/DAHDX22a1mc/hvzuJRVQqkfoH_wLaHdedg/view?embed',
    url: 'https://www.canva.com/design/DAHDX22a1mc/hvzuJRVQqkfoH_wLaHdedg/view' },
  { title: 'MedMory Pitch Presentation', type: 'canva', kind: 'Pitch deck', mock: 'slides', thumb: '',
    embed: 'https://www.canva.com/design/DAGyZBO3uHw/9zVVA5EkOzv5kEm4VcNriQ/view?embed',
    url: 'https://www.canva.com/design/DAGyZBO3uHw/9zVVA5EkOzv5kEm4VcNriQ/view' },
  { title: 'Poster', type: 'canva', kind: 'Poster', mock: 'poster', thumb: '',
    embed: 'https://www.canva.com/design/DAGLel-KS7E/9ElC4tIzWZIwD4UjfPobXQ/view?embed',
    url: 'https://www.canva.com/design/DAGLel-KS7E/9ElC4tIzWZIwD4UjfPobXQ/view' },
  { title: 'GMO Infographic', type: 'canva', kind: 'Infographic', mock: 'infographic', thumb: '',
    embed: 'https://www.canva.com/design/DAFU4-6u3us/JHame6MnQcJdRIMPnizXjA/view?embed',
    url: 'https://www.canva.com/design/DAFU4-6u3us/JHame6MnQcJdRIMPnizXjA/view' },
  { title: 'Digital Art 1', type: 'art', kind: 'Digital painting', thumb: 'images/DigiArt/image.png',
    alt: 'Digital illustration of a blue-skinned elf warrior holding a golden trident' },
  { title: 'Digital Art 2', type: 'art', kind: 'Digital painting', thumb: 'images/DigiArt/image2.png',
    alt: 'Painted illustration of a winged woman in blue surrounded by white feathers' },
  { title: 'Digital Art 3', type: 'art', kind: 'Illustration', thumb: 'images/DigiArt/image3.png',
    alt: 'Cartoon illustration titled Crazy on the Regular, two friends posing back to back' },
  { title: 'Digital Art 4', type: 'art', kind: 'Digital painting', thumb: 'images/DigiArt/image4.png',
    alt: 'Painterly portrait of a girl in an astronaut helmet' }
];


// Short descriptions shown for the Canva records (edit these to tell each design's story)
const descriptions = {
  'Brochure Theme Park': 'A brochure design made in Canva.',
  'MedMory Pitch Presentation': 'A pitch presentation designed in Canva.',
  'Poster': 'A poster designed in Canva.',
  'GMO Infographic': 'An infographic designed in Canva.'
};

const typeName = { figma: 'Figma', canva: 'Canva', art: 'Digital Art' };
// Colors for the drawn previews: [light, main, dark]
const crystalColors = {
  figma: ['#eaf4ff', '#7cc4ff', '#18244f'],
  canva: ['#ffeef6', '#ff8dbf', '#4a1634'],
  art: ['#fff4d6', '#ffc83d', '#4a3410']
};
const LINKS = { github: 'https://github.com/devmuhriyel', linkedin: 'https://www.linkedin.com/in/devmuhriyel' };

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SVG_NS = 'http://www.w3.org/2000/svg';
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
function makeRandom(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let rand = makeRandom(7);
const between = (a, b) => a + rand() * (b - a);
const n = v => (+v).toFixed(1);
const $ = id => document.getElementById(id);
const byType = t => projects.map((p, i) => ({ p, i })).filter(x => x.p.type === t);
const goTo = id => window.openZone && window.openZone(id);

/* ---------- 2. Theme (dark by default) ---------- */
const themeBtn = $('themeBtn');
function setTheme(theme, save) {
  root.setAttribute('data-theme', theme);
  themeBtn.setAttribute('aria-label', theme === 'night' ? 'Switch to light mode' : 'Switch to dark mode');
  themeBtn.innerHTML = theme === 'night' ? '&#9790;' : '&#9728;';
  if (save) { try { localStorage.setItem('mj-theme', theme); } catch (e) {} }
}
const toggleTheme = () => setTheme(root.getAttribute('data-theme') === 'night' ? 'day' : 'night', true);
setTheme(root.getAttribute('data-theme') || 'night', false);
themeBtn.addEventListener('click', toggleTheme);

/* ---------- 3. Little helpers: toast, sound, effects ---------- */
const toast = $('toast');
let toastTimer;
function say(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

let audio;
function click(pitch = 1) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = 'square';
    o.frequency.value = 180 * pitch;
    g.gain.setValueAtTime(0.05, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.06);
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + 0.07);
  } catch (e) {}
}

const fx = $('fx');
function burst(x, y, kind) {
  const count = kind === 'heart' ? 10 : 16;
  for (let k = 0; k < count; k++) {
    const p = document.createElement('span');
    p.className = 'particle ' + kind;
    const a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 160;
    p.style.cssText = `left:${x}px;top:${y}px;--dx:${(Math.cos(a) * d).toFixed(0)}px;--dy:${(Math.sin(a) * d - 80).toFixed(0)}px;--rot:${(Math.random() * 720 - 360).toFixed(0)}deg`;
    fx.appendChild(p);
    setTimeout(() => p.remove(), 1300);
  }
}

/* ---------- 5. The coffee cup ---------- */
const SUN_SVG = '<svg viewBox="-20 -20 40 40">' + Array.from({ length: 12 }, (_, k) => `<ellipse cx="0" cy="-12" rx="3.6" ry="7" fill="#ffd34d" transform="rotate(${k * 30})"/>`).join('') + '<circle r="7" fill="#5a3a1c"/></svg>';


const CREAM = '#f7ead8', COFFEE = '#8a5634';
// latte art drawn flat, then squashed onto the coffee surface
const latteArts = [
  { name: 'a heart', svg: `<path d="M0 46 C -60 6, -58 -40, -24 -44 C -10 -46, -2 -36, 0 -26 C 2 -36, 10 -46, 24 -44 C 58 -40, 60 6, 0 46 Z" fill="${CREAM}"/>` },
  { name: 'a sleepy cat', svg: `<path d="M-46 -10 L-40 -52 L-14 -30 C -6 -32, 6 -32, 14 -30 L40 -52 L46 -10 C 50 22, 26 44, 0 44 C -26 44, -50 22, -46 -10 Z" fill="${CREAM}"/><path d="M-24 -2 q 7 6 14 0 M10 -2 q 7 6 14 0" stroke="${COFFEE}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M-4 14 h8 l-4 5z" fill="${COFFEE}"/>` },
  { name: 'a sunflower', svg: Array.from({ length: 12 }, (_, k) => `<ellipse cx="0" cy="-30" rx="9" ry="18" fill="${CREAM}" transform="rotate(${k * 30})"/>`).join('') + `<circle r="18" fill="${COFFEE}"/><circle r="11" fill="${CREAM}" opacity="0.35"/>` },
  { name: 'my initials', svg: `<text x="0" y="22" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="800" font-size="64" fill="${CREAM}">MJ</text>` },
  { name: 'a rosetta', svg: Array.from({ length: 6 }, (_, k) => `<ellipse cx="0" cy="${-34 + k * 13}" rx="${44 - k * 5}" ry="9" fill="${CREAM}"/>`).join('') + `<path d="M0 -50 V 52" stroke="${COFFEE}" stroke-width="3"/>` }
];

(function drawMug() {
  const svg = $('mugSvg');
  svg.innerHTML = `
  <defs>
    <linearGradient id="mugBody" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffd2e4"/><stop offset="0.45" stop-color="#ff9fc9"/><stop offset="1" stop-color="#f07aae"/></linearGradient>
    <radialGradient id="crema" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#c8925e"/><stop offset="0.7" stop-color="#9a6238"/><stop offset="1" stop-color="#6e4024"/></radialGradient>
    <clipPath id="bodyClip"><path d="M92 112 L308 112 C 304 222, 288 290, 238 312 L162 312 C 112 290, 96 222, 92 112 Z"/></clipPath>
    <clipPath id="coffeeClip"><ellipse cx="200" cy="114" rx="96" ry="21"/></clipPath>
  </defs>
  <ellipse cx="200" cy="348" rx="170" ry="22" fill="rgba(0,0,0,0.35)"/>
  <ellipse cx="200" cy="330" rx="178" ry="36" fill="#d9d0f5"/>
  <ellipse cx="200" cy="324" rx="178" ry="34" fill="#efe9ff"/>
  <ellipse cx="200" cy="322" rx="118" ry="20" fill="#ddd5f6"/>
  <path d="M296 150 C 392 136, 396 262, 292 256" fill="none" stroke="#f07aae" stroke-width="30" stroke-linecap="round"/>
  <path d="M296 150 C 392 136, 396 262, 292 256" fill="none" stroke="#ffb3d3" stroke-width="12" stroke-linecap="round" opacity="0.7"/>
  <path d="M92 112 L308 112 C 304 222, 288 290, 238 312 L162 312 C 112 290, 96 222, 92 112 Z" fill="url(#mugBody)"/>
  <g clip-path="url(#bodyClip)">
    <rect x="80" y="146" width="240" height="18" fill="#8cc8ff"/>
    <rect x="80" y="168" width="240" height="6" fill="#bfe1ff"/>
    <path d="M118 120 C 116 200, 128 262, 160 296" stroke="#fff" stroke-width="14" fill="none" opacity="0.35" stroke-linecap="round"/>
  </g>
  <path d="M136 228 q 9 -10 18 0 M232 228 q 9 -10 18 0" stroke="#5a1d3c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <ellipse cx="128" cy="246" rx="13" ry="8" fill="#ff6fa8" opacity="0.6"/>
  <ellipse cx="258" cy="246" rx="13" ry="8" fill="#ff6fa8" opacity="0.6"/>
  <path d="M184 246 q 8 9 16 0 q 8 9 16 0" stroke="#5a1d3c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <g transform="translate(272 280) scale(0.9)">${SUN_SVG.replace('<svg viewBox="-20 -20 40 40">', '').replace('</svg>', '')}</g>
  <path d="M104 112 L128 62 L160 110 Z" fill="#ff9fc9"/><path d="M116 106 L129 78 L146 106 Z" fill="#ffd2e4"/>
  <path d="M240 110 L272 62 L296 112 Z" fill="#f58bbb"/><path d="M254 106 L271 78 L284 106 Z" fill="#ffd2e4"/>
  <ellipse cx="200" cy="112" rx="110" ry="27" fill="#ffe3ef"/>
  <ellipse cx="200" cy="114" rx="96" ry="21" fill="url(#crema)"/>
  <g clip-path="url(#coffeeClip)"><g transform="translate(200 114) scale(1 0.24)"><g id="latteArt" class="latte"></g></g></g>
  <ellipse cx="200" cy="112" rx="110" ry="27" fill="none" stroke="#fff" stroke-width="2" opacity="0.6"/>`;
})();

const latteEl = $('latteArt');
let latteIndex = 0;
latteEl.innerHTML = latteArts[0].svg;
const mug = $('mug'), mugHint = $('mugHint');
mug.addEventListener('click', () => {
  latteIndex = (latteIndex + 1) % latteArts.length;
  latteEl.classList.remove('stir'); void latteEl.getBoundingClientRect(); latteEl.classList.add('stir');
  click(0.7); setTimeout(() => click(1.1), 90);
  setTimeout(() => { latteEl.innerHTML = latteArts[latteIndex].svg; }, 450);
  mugHint.textContent = latteArts[latteIndex].name;
  const r = mug.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height * 0.2, latteIndex % 2 ? 'heart' : 'flower');
});

// Little picture for projects without a screenshot
function mockup(p, index) {
  rand = makeRandom(50 + index * 13);
  const c = crystalColors[p.type];
  const bg = [c[2], c[1]];
  let s = `<svg xmlns="${SVG_NS}" viewBox="0 0 300 380"><defs><linearGradient id="m${index}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs>`;
  s += `<rect width="300" height="380" fill="url(#m${index})"/>`;
  for (let i = 0; i < 26; i++) s += `<circle cx="${n(between(0, 300))}" cy="${n(between(0, 200))}" r="${n(between(0.6, 1.8))}" fill="#fff" opacity="${n(between(0.3, 0.9))}"/>`;
  const paper = '#fbf6ea', ink = c[2], acc = c[1];
  if (p.mock === 'phone') {
    s += `<g transform="rotate(-9 110 200)" opacity="0.55"><rect x="60" y="80" width="104" height="206" rx="16" fill="${paper}"/></g>`;
    s += `<rect x="112" y="64" width="116" height="232" rx="18" fill="${paper}"/><rect x="120" y="80" width="100" height="200" rx="8" fill="#fff"/>`;
    s += `<rect x="120" y="80" width="100" height="40" rx="8" fill="${acc}"/><rect x="130" y="130" width="80" height="34" rx="6" fill="${acc}" opacity="0.5"/>`;
    s += `<rect x="130" y="172" width="80" height="34" rx="6" fill="${acc}" opacity="0.35"/><rect x="130" y="214" width="56" height="8" rx="4" fill="${ink}" opacity="0.4"/>`;
    s += `<rect x="130" y="228" width="70" height="8" rx="4" fill="${ink}" opacity="0.25"/><circle cx="170" cy="266" r="8" fill="${ink}"/>`;
  } else if (p.mock === 'browser') {
    s += `<rect x="28" y="84" width="244" height="180" rx="10" fill="${paper}"/><rect x="28" y="84" width="244" height="22" rx="10" fill="${ink}"/>`;
    s += `<circle cx="42" cy="95" r="4" fill="#ff8a7a"/><circle cx="54" cy="95" r="4" fill="#ffd36e"/><circle cx="66" cy="95" r="4" fill="#8be08b"/>`;
    s += `<rect x="40" y="116" width="220" height="56" rx="6" fill="${acc}"/><rect x="52" y="132" width="100" height="10" rx="5" fill="#fff"/><rect x="52" y="148" width="64" height="8" rx="4" fill="#fff" opacity="0.7"/>`;
    for (let i = 0; i < 3; i++) s += `<rect x="${40 + i * 75}" y="184" width="68" height="66" rx="6" fill="${acc}" opacity="${0.3 + i * 0.15}"/>`;
  } else if (p.mock === 'slides') {
    s += `<rect x="58" y="78" width="200" height="124" rx="6" fill="${paper}" opacity="0.5" transform="rotate(-6 158 140)"/>`;
    s += `<rect x="46" y="110" width="210" height="130" rx="6" fill="${paper}"/><rect x="62" y="128" width="110" height="14" rx="7" fill="${ink}"/>`;
    s += `<rect x="62" y="150" width="80" height="8" rx="4" fill="${ink}" opacity="0.4"/><circle cx="210" cy="185" r="30" fill="${acc}"/>`;
    for (let i = 0; i < 3; i++) s += `<rect x="${70 + i * 20}" y="${222 - i * 14}" width="12" height="${8 + i * 14}" fill="${ink}" opacity="0.6"/>`;
  } else if (p.mock === 'poster') {
    s += `<rect x="86" y="50" width="128" height="250" rx="4" fill="${paper}"/><circle cx="150" cy="130" r="44" fill="${acc}"/>`;
    s += `<rect x="104" y="196" width="92" height="14" rx="3" fill="${ink}"/><rect x="104" y="218" width="70" height="8" rx="4" fill="${ink}" opacity="0.5"/><rect x="104" y="232" width="84" height="8" rx="4" fill="${ink}" opacity="0.35"/>`;
  } else if (p.mock === 'brochure') {
    s += `<path d="M40 90 L112 104 L112 290 L40 276 Z" fill="${paper}" opacity="0.85"/><path d="M112 104 L188 90 L188 276 L112 290 Z" fill="${paper}"/><path d="M188 90 L260 104 L260 290 L188 276 Z" fill="${paper}" opacity="0.85"/>`;
    s += `<circle cx="150" cy="150" r="26" fill="${acc}"/><rect x="128" y="196" width="44" height="8" rx="4" fill="${ink}" opacity="0.6"/><rect x="56" y="140" width="40" height="40" rx="4" fill="${acc}" opacity="0.5"/><rect x="204" y="140" width="40" height="60" rx="4" fill="${acc}" opacity="0.4"/>`;
  } else {
    s += `<rect x="90" y="44" width="120" height="270" rx="6" fill="${paper}"/><rect x="104" y="58" width="92" height="14" rx="3" fill="${ink}"/>`;
    for (let i = 0; i < 4; i++) s += `<rect x="${108 + i * 22}" y="${150 - i * 18}" width="14" height="${30 + i * 18}" fill="${acc}"/>`;
    for (let i = 0; i < 3; i++) s += `<circle cx="${116 + i * 34}" cy="210" r="11" fill="${acc}" opacity="0.6"/>`;
    s += `<rect x="104" y="240" width="92" height="8" rx="4" fill="${ink}" opacity="0.4"/><rect x="104" y="256" width="70" height="8" rx="4" fill="${ink}" opacity="0.3"/>`;
  }
  return s + '</svg>';
}
const pictureFor = (p, i) => p.thumb || 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(mockup(p, i));

/* ---------- 6. Figma canvas with draggable frames ---------- */
const framesArea = $('framesArea');
// starting spots: [left %, top px, width px]
const framePlaces = [[3, 30, 220], [26, 150, 200], [50, 20, 260], [76, 120, 210], [40, 330, 250]];
const frameEls = byType('figma').map(({ p, i }, k) => {
  const f = document.createElement('div');
  const [x, y, w] = framePlaces[k % framePlaces.length];
  f.className = 'frame-card';
  f.tabIndex = 0;
  f.setAttribute('role', 'button');
  f.setAttribute('aria-label', `${p.title}, ${p.kind}. Open preview`);

  f.title = p.title;
  f.innerHTML = `<span class="frame-label mono"><span class="hash">#</span> ${p.title}</span>
    <span class="frame-body"><img src="${pictureFor(p, i)}" alt="" draggable="false"></span>
    <span class="handle h1"></span><span class="handle h2"></span><span class="handle h3"></span><span class="handle h4"></span>
    <span class="frame-size mono">${p.kind}</span>`;
  framesArea.appendChild(f);

  let start = null, moved = false, ox = 0, oy = 0;
  f.addEventListener('pointerdown', e => {
    if (window.innerWidth < 760) return;
    start = { x: e.clientX, y: e.clientY };
    moved = false;
    ox = f.offsetLeft; oy = f.offsetTop;
    f.setPointerCapture(e.pointerId);
    f.classList.add('dragging');
    f.style.zIndex = String(++topZ);
  });
  f.addEventListener('pointermove', e => {
    if (!start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
    const area = framesArea.getBoundingClientRect();
    f.style.left = clamp(ox + dx, -40, area.width - f.offsetWidth + 40) + 'px';
    f.style.top = clamp(oy + dy, -10, area.height - 60) + 'px';
  });
  f.addEventListener('pointerup', () => {
    if (!start) return;
    start = null;
    f.classList.remove('dragging');
    if (!moved) openPreview(p, i, f);
  });
  f.addEventListener('click', () => { if (window.innerWidth < 760) openPreview(p, i, f); });
  f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPreview(p, i, f); } });
  return f;
});
let topZ = 10;
// lay the frames out so every one is fully visible: one row, or 3 + 2, whichever makes them bigger
function layoutFrames() {
  const W = framesArea.clientWidth, H = framesArea.clientHeight, n = frameEls.length;
  if (!W || !H || window.innerWidth < 760) return;
  const gx = 22, gy = 46, extra = 56; // gaps, and room for the label above + tag below each frame
  let best = null;
  for (let rows = 1; rows <= 3; rows++) {
    const cols = Math.ceil(n / rows);
    const w = Math.min((W - gx * (cols - 1)) / cols, (H - gy * (rows - 1) - extra * rows + 26 * rows) / rows, 260);
    if (!best || w > best.w) best = { rows, cols, w };
  }
  const { rows, cols, w } = best, rowH = w + extra;
  const top0 = Math.max(24, (H - (rows * rowH + gy * (rows - 1)) + 30) / 2);
  frameEls.forEach((f, k) => {
    const r = Math.floor(k / cols), inRow = r === rows - 1 ? n - cols * (rows - 1) : cols, c = k - r * cols;
    const left0 = (W - (inRow * w + gx * (inRow - 1))) / 2;
    f.style.width = w + 'px';
    f.style.left = (left0 + c * (w + gx)) + 'px';
    f.style.top = (top0 + r * (rowH + gy)) + 'px';
  });
}
new ResizeObserver(layoutFrames).observe(framesArea);

/* ---------- 7. Canva designs: an app on the computer ---------- */
const canvaWorks = byType('canva');
const canvaGrid = $('canvaGrid');
canvaWorks.forEach(({ p, i }) => {
  const card = document.createElement('button');
  card.type = 'button'; card.className = 'cv-card';
  card.innerHTML = `<span class="cv-thumb"><img src="${pictureFor(p, i)}" alt=""></span><span class="cv-name">${p.title}</span><span class="cv-kind mono">${p.kind}</span>`;
  card.addEventListener('click', () => { click(1.4); openPreview(p, i, card, descriptions[p.title] || `A ${p.kind.toLowerCase()} designed in Canva.`); });
  canvaGrid.appendChild(card);
});
// switch apps on the computer: figma or canva
function setApp(name) {
  document.querySelectorAll('.app-tabs button').forEach(b => { b.classList.toggle('on', b.dataset.app === name); b.setAttribute('aria-selected', String(b.dataset.app === name)); });
  $('app-figma').hidden = name !== 'figma';
  $('app-canva').hidden = name !== 'canva';
}
document.querySelectorAll('.app-tabs button').forEach(b => b.addEventListener('click', () => { setApp(b.dataset.app); click(1.2); }));

/* ---------- 8. Digital art on a pen tablet ---------- */
const artWorks = byType('art');
const artImg = $('artImg'), artNext = $('artNext'), artCanvas = $('artCanvas'), stylus = $('stylus'), layersBox = $('layers');
let artIndex = -1, painting = false;
const layerBtns = artWorks.map(({ p }, k) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'layer';
  b.setAttribute('role', 'tab');
  b.innerHTML = `<span class="eye">&#9673;</span><img src="${p.thumb}" alt="" draggable="false"><span class="layer-name mono">${p.title}</span>`;
  b.addEventListener('click', () => paintArt(k));
  layersBox.appendChild(b);
  return b;
});

function paintArt(k, instant) {
  if (k === artIndex || painting) return;
  const { p } = artWorks[k];
  layerBtns.forEach((b, n) => { b.classList.toggle('active', n === k); b.setAttribute('aria-selected', n === k ? 'true' : 'false'); });
  $('artTitle').textContent = `${p.title}.png`;
  $('appZoom').textContent = `${[100, 84, 92, 110][k % 4]}%`;
  artCanvas.setAttribute('aria-label', `View ${p.title} full size`);
  artIndex = k;
  if (instant || reduceMotion) { artImg.src = p.thumb; artImg.alt = p.alt || p.title; return; }
  painting = true;
  artNext.src = p.thumb;
  artNext.classList.remove('reveal-paint'); void artNext.offsetWidth; artNext.classList.add('reveal-paint');
  stylus.classList.remove('draw'); void stylus.offsetWidth; stylus.classList.add('draw');
  [0, 200, 420, 640, 860].forEach(t => setTimeout(() => click(2 + Math.random()), t));
  setTimeout(() => {
    artImg.src = p.thumb; artImg.alt = p.alt || p.title;
    artNext.classList.remove('reveal-paint');
    painting = false;
  }, 1250);
}
artCanvas.addEventListener('click', () => { if (artIndex >= 0) openPreview(artWorks[artIndex].p, undefined, artCanvas); });
paintArt(0, true);

/* ---------- 9. Mail at the door ---------- */
// Put the email you want people to write to here. Leave it empty to hide the "write back" letter.
const CONTACT_EMAIL = '';
const letters = document.querySelectorAll('.letter');
letters.forEach(l => l.querySelector('.env').addEventListener('click', () => {
  const open = !l.classList.contains('open');
  letters.forEach(o => o.classList.remove('open'));
  l.classList.toggle('open', open);
  $('mailbox').classList.toggle('reading', open);
  click(open ? 1.5 : 1);
}));
document.querySelectorAll('.letter-close').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); letters.forEach(o => o.classList.remove('open')); $('mailbox').classList.remove('reading'); }));
if (!CONTACT_EMAIL) $('writeBack').remove();
else $('replyForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('replyName').value.trim(), msg = $('replyMsg').value.trim();
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Hello from your portfolio' + (name ? ' (' + name + ')' : ''))}&body=${encodeURIComponent(msg)}`;
});

/* ---------- 10. Scroll reveals ---------- */
document.querySelectorAll('.zone-head, .canvas, .vinyl-wrap, .tablet-wrap, .terminal').forEach((e, k) => e.classList.add('reveal', 'in'));
document.querySelectorAll('.art').forEach((e, k) => e.style.setProperty('--d', (k * 0.12) + 's'));
const seen = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); seen.unobserve(en.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(e => seen.observe(e));

/* ---------- 11. Grain, cursor glow and pad tilt ---------- */
(function makeGrain() {
  const c = document.createElement('canvas');
  c.width = c.height = 200;
  const g = c.getContext('2d');
  const img = g.createImageData(200, 200);
  for (let k = 0; k < img.data.length; k += 4) {
    const v = Math.random() * 255;
    img.data[k] = img.data[k + 1] = img.data[k + 2] = v;
    img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  $('grain').style.backgroundImage = `url(${c.toDataURL()})`;
})();

const mugStage = $('mug'), steam = $('steam'), glow = $('cursorGlow'), topbar = $('topbar');
const mouse = { x: 0, y: 0, sx: 0, sy: 0, px: -999, py: -999, last: -1e9 };
window.addEventListener('pointermove', e => {
  mouse.x = e.clientX / window.innerWidth - 0.5;
  mouse.y = e.clientY / window.innerHeight - 0.5;
  mouse.px = e.clientX; mouse.py = e.clientY;
  mouse.last = performance.now();
});
function frame(time) {
  if (time - mouse.last > 3000) { mouse.x = Math.sin(time / 2600) * 0.3; mouse.y = Math.cos(time / 3200) * 0.2; }
  mouse.sx = lerp(mouse.sx, mouse.x, 0.07);
  mouse.sy = lerp(mouse.sy, mouse.y, 0.07);
  if (!reduceMotion && !$('ov-mug').hidden) {
    mugStage.style.transform = `rotateY(${n(mouse.sx * 18)}deg) rotateX(${n(-mouse.sy * 8)}deg)`;
    steam.style.transform = `translateX(${n(mouse.sx * 50)}px) skewX(${n(-mouse.sx * 12)}deg)`;
  }
  glow.style.transform = `translate(${mouse.px - 300}px, ${mouse.py - 300}px)`;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- 12. Preview pop-up ---------- */
$('year').textContent = new Date().getFullYear();
const preview = $('preview'), previewBody = $('previewBody');
// embed links: Figma's current embed address, Canva's ?embed view
function embedFor(p) {
  if (p.type === 'figma') { const u = p.url.replace('https://www.figma.com/', 'https://embed.figma.com/'); return u + (u.includes('?') ? '&' : '?') + 'embed-host=share'; }
  return p.embed;
}
const canEmbed = !/claude\.ai|claudeusercontent|anthropic/.test(location.hostname) && location.protocol !== 'file:';
function openPreview(p, i, fromEl, desc) {
  previewBody.classList.remove('loaded');
  $('previewDesc').hidden = !desc;
  $('previewDesc').textContent = desc || '';
  preview.dataset.type = p.type;
  $('previewTag').textContent = typeName[p.type];
  $('previewTitle').textContent = p.title;
  const open = $('previewOpen');
  open.hidden = p.type === 'art';
  if (p.type !== 'art') { open.href = p.url; open.textContent = `Open in ${typeName[p.type]} ↗`; }
  if (p.type === 'art') previewBody.innerHTML = `<img src="${p.thumb}" alt="${p.alt || p.title}">`;
  else {
    // claude.ai's preview blocks other websites inside the page, so there we show the picture + an open button.
    // On your real site (GitHub Pages), the live Figma/Canva file loads right away.
    if (!canEmbed) {
      previewBody.innerHTML = `<img src="${pictureFor(p, i)}" alt="" class="full-img">`;
      preview.showModal();
      return;
    }
    // load the real design right away; the drawing shows while it loads
    previewBody.innerHTML = `<img src="${pictureFor(p, i)}" alt="" class="dim-img">
      <div class="live-loading mono"><span class="spin"></span>loading the ${typeName[p.type]} file…</div>
      <iframe src="${embedFor(p)}" title="${p.title} live preview" allowfullscreen loading="eager"></iframe>`;
    const frame = previewBody.querySelector('iframe'), note = previewBody.querySelector('.live-loading');
    frame.addEventListener('load', () => { previewBody.classList.add('loaded'); });
    clearTimeout(openPreview.slow);
    openPreview.slow = setTimeout(() => {
      if (!previewBody.classList.contains('loaded') && note.isConnected) note.innerHTML = `Taking a while… <a href="${p.url}" target="_blank" rel="noopener noreferrer">open it in ${typeName[p.type]} ↗</a>`;
    }, 9000);
  }
  preview.showModal();
  if (fromEl && !reduceMotion) {
    const a = fromEl.getBoundingClientRect(), b = preview.getBoundingClientRect();
    preview.animate([
      { transform: `translate(${a.left + a.width / 2 - (b.left + b.width / 2)}px, ${a.top + a.height / 2 - (b.top + b.height / 2)}px) scale(${(a.width / b.width).toFixed(3)})`, opacity: 0.3 },
      { transform: 'none', opacity: 1 }
    ], { duration: 480, easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)' });
  }
}
$('previewClose').addEventListener('click', () => preview.close());
preview.addEventListener('click', e => { if (e.target === preview) preview.close(); });
preview.addEventListener('close', () => { previewBody.innerHTML = ''; });


/* =========================================================
   13. MJ's room, in low-poly 3D: walk with WASD, press E to use things
   ========================================================= */
// The room's floor plan uses a simple 1600 x 1000 map (0,0 = back-left corner).
// 100 map units = 1 meter in 3D. The back wall sits at map y = 300.
const W = 1600, H = 1000, WALL = 300;
const viewport = $('viewport'), promptEl = $('prompt'), promptText = $('promptText'), hotspotsEl = $('hotspots'), catBubble = $('catBubble');
const T = THREE;
const X = x => (x - 800) / 100, Z = y => (y - 650) / 100;   // map -> 3D
const BACK = Z(WALL), LEFT = -6, RIGHT = 6, FRONT = 1.5, WALL_H = 3.6;
// walkable floor in map units
const MINX = 245, MAXX = 1355, MAXY = 782;

/* ---- renderer, scene, camera ---- */
const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
const lowPower = matchMedia('(pointer: coarse)').matches;
let pixelRatio = Math.min(window.devicePixelRatio, lowPower ? 1.25 : 1.5);
renderer.setPixelRatio(pixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFShadowMap;
renderer.outputEncoding = T.sRGBEncoding;
viewport.appendChild(renderer.domElement);
const scene = new T.Scene();
scene.fog = new T.Fog(0x0b0a17, 30, 70);
const camera = new T.PerspectiveCamera(32, 1, 0.1, 200);

/* ---- low-poly helpers ---- */
// every material has a night color and a day color
const themed = [];
function M(night, day = night, extra = {}) {
  const m = new T.MeshLambertMaterial({ color: night, flatShading: true, ...extra });
  m.userData = { night: new T.Color(night), day: new T.Color(day) };
  themed.push(m);
  return m;
}
const glowMats = [];
function G(color, strength = 1) { // glowing material (lamp, screen, lights)
  const m = new T.MeshLambertMaterial({ color, emissive: color, emissiveIntensity: strength, flatShading: true });
  m.userData = { base: strength };
  glowMats.push(m);
  return m;
}
// nudge corners a little so shapes look hand-cut (same corner = same nudge, so no cracks)
function rough(geo, amt = 0.04, seed = 1) {
  const p = geo.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
    const h = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719 + seed) * 43758.5453;
    const r = h - Math.floor(h);
    const h2 = Math.sin(x * 93.989 + y * 18.233 + z * 67.71 + seed) * 23421.631;
    const r2 = h2 - Math.floor(h2);
    p.setXYZ(k, x + (r - 0.5) * amt, y + (r2 - 0.5) * amt, z + (r - r2) * amt);
  }
  geo.computeVertexNormals();
  return geo;
}
function mesh(geo, mat, x = 0, y = 0, z = 0, parent = scene) {
  const m = new T.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
const box = (w, h, d, mat, x, y, z, parent, r = 0) => mesh(r ? rough(new T.BoxGeometry(w, h, d, 1, 1, 1), r) : new T.BoxGeometry(w, h, d), mat, x, y, z, parent);
const cyl = (rt, rb, h, seg, mat, x, y, z, parent) => mesh(new T.CylinderGeometry(rt, rb, h, seg), mat, x, y, z, parent);
const ico = (r, mat, x, y, z, parent, detail = 0, amt = 0) => mesh(amt ? rough(new T.IcosahedronGeometry(r, detail), amt) : new T.IcosahedronGeometry(r, detail), mat, x, y, z, parent);
const cone = (r, h, seg, mat, x, y, z, parent) => mesh(new T.ConeGeometry(r, h, seg), mat, x, y, z, parent);
const group = (x = 0, y = 0, z = 0, parent = scene) => { const g = new T.Group(); g.position.set(x, y, z); parent.add(g); return g; };
let seedN = 3;
const rnd = () => { seedN = (seedN * 16807) % 2147483647; return (seedN - 1) / 2147483646; };

// colors
const C = {
  wall: M(0x2a2560, 0xe6dcff), wallTrim: M(0x3d3580, 0xc8b8f2), wood: M(0x5a4a8a, 0xb88a5e), woodD: M(0x3c3166, 0x8c6440),
  plankA: M(0x3b3468, 0xd8b88c), plankB: M(0x352e5f, 0xcdac80), grass: M(0x2f6b45, 0x7fd157), grassD: M(0x24563a, 0x63b347),
  dirt: M(0x5a3d33, 0xb5784a), dirtD: M(0x40291f, 0x8f5a35), rock: M(0x5d6077, 0xb9b6b0), rockD: M(0x45475c, 0x99958f), snow: M(0xc9d4ff, 0xffffff),
  pink: M(0xff7eb6), pinkD: M(0xd1588f), pinkL: M(0xffc3dc), blue: M(0x7cc4ff), blueD: M(0x2f5fa8), blueM: M(0x3f7ad0), white: M(0xeeeaff, 0xffffff),
  cream: M(0xf3e6d6), yellow: M(0xffd34d), leaf: M(0x3f9a52, 0x58b85a), leafL: M(0x5fc46c, 0x86d65e), trunk: M(0x6b4a33, 0x8a5a36),
  ink: M(0x1a1838), dark: M(0x24204a), skin: M(0xf6d3c0), hair: M(0x2a1f3d), jeans: M(0x2f3f7a), cat: M(0x1f1c2b, 0x262230), catD: M(0x0f0e16, 0x141219),
  brown: M(0x6b3f1d), cork: M(0xb98a5a), glass: new T.MeshStandardMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.12, roughness: 0.1 }),
  foliageY: M(0xd8c45a, 0xf0e27a), foliageO: M(0xc98a44, 0xe8a85a)
};

/* ---- the island the room sits on ---- */
const outsideStart = scene.children.length;
{
  const top = rough(new T.CylinderGeometry(14, 14, 0.4, 16, 1), 0.1, 5);
  const g = mesh(top, C.grass, 0, -0.2, 0.6); g.scale.set(1, 1, 0.64);
  const body = rough(new T.CylinderGeometry(13.9, 9.5, 2.6, 16, 2), 0.5, 9);
  const b = mesh(body, C.dirt, 0, -1.7, 0.6); b.scale.set(1, 1, 0.64);
  const tip = rough(new T.ConeGeometry(9.4, 3.2, 12, 1), 0.6, 4);
  const t2 = mesh(tip, C.dirtD, 0, -4.6, 0.6); t2.scale.set(1, 1, 0.64); t2.rotation.x = Math.PI;
}
// mountains on the back of the island, like a little valley
[[-10.2, -5.0, 2.8, 4.6], [-4.0, -6.6, 3.4, 6.2], [3.2, -6.7, 3.0, 5.2], [9.6, -4.9, 2.6, 4.2]].forEach(([x, z, r, h], k) => {
  const m = mesh(rough(new T.ConeGeometry(r, h, 6, 2), 0.5, k), k % 2 ? C.rock : C.rockD, x, h / 2 - 0.1, z);
  const cap = mesh(rough(new T.ConeGeometry(r * 0.34, h * 0.34, 6, 1), 0.15, k + 3), C.snow, x, h - 0.1 - h * 0.17 + 0.03, z);
  cap.rotation.y = m.rotation.y = k;
});
// trees, pines, rocks, ferns, flowers outside
function tree(x, z, s = 1, k = 0) {
  const g = group(x, 0, z); g.scale.setScalar(s);
  const tr = cyl(0.12, 0.2, 1.8, 5, C.trunk, 0, 0.9, 0, g); tr.rotation.z = 0.05;
  const br = cyl(0.06, 0.09, 0.9, 4, C.trunk, 0.35, 1.5, 0, g); br.rotation.z = -0.8;
  [[0, 2.2, 0, 0.75], [0.6, 1.9, 0.1, 0.55], [-0.45, 1.85, -0.1, 0.5]].forEach(([a, b, c, r], j) => ico(r, [C.foliageY, C.foliageO, C.leafL][(j + k) % 3], a, b, c, g, 0, 0.12));
  return g;
}
function pine(x, z, s = 1) {
  const g = group(x, 0, z); g.scale.setScalar(s);
  cyl(0.08, 0.12, 0.6, 5, C.trunk, 0, 0.3, 0, g);
  [[0.75, 1.0, 0.9], [0.6, 0.9, 1.45], [0.42, 0.8, 1.95]].forEach(([r, h, y]) => cone(r, h, 6, C.leaf, 0, y, 0, g));
}
function rock(x, z, s = 1, k = 0) { const r = mesh(rough(new T.DodecahedronGeometry(0.4 * s, 0), 0.15 * s, k), k % 2 ? C.rock : C.rockD, x, 0.18 * s, z); r.rotation.set(k, k * 2, 0); r.scale.y = 0.65; }
function fernAt(x, z, s = 1, parent = scene) {
  const g = group(x, 0, z, parent); g.scale.setScalar(s);
  for (let k = 0; k < 9; k++) {
    const f = mesh(new T.ConeGeometry(0.09, 0.9, 3), k % 2 ? C.leaf : C.leafL, 0, 0.35, 0, g);
    f.geometry.translate(0, 0.45, 0); f.position.y = 0;
    f.rotation.set(0.95 + (k % 3) * 0.12, (k / 9) * Math.PI * 2, 0, 'YXZ');
  }
  return g;
}
function sunflowerAt(x, z, s = 1, parent = scene) {
  const g = group(x, 0, z, parent); g.scale.setScalar(s);
  cyl(0.035, 0.045, 1.3, 5, C.leaf, 0, 0.65, 0, g);
  const l1 = mesh(new T.ConeGeometry(0.12, 0.4, 3), C.leafL, 0.14, 0.55, 0, g); l1.rotation.z = -1.1;
  const l2 = mesh(new T.ConeGeometry(0.12, 0.4, 3), C.leaf, -0.14, 0.8, 0, g); l2.rotation.z = 1.1;
  const head = group(0, 1.35, 0.04, g); head.rotation.x = 0.35;
  for (let k = 0; k < 12; k++) { const p = mesh(new T.ConeGeometry(0.07, 0.24, 3), C.yellow, 0, 0, 0, head); p.geometry.translate(0, 0.2, 0); p.rotation.z = (k / 12) * Math.PI * 2; p.scale.z = 0.4; }
  const c = cyl(0.12, 0.12, 0.06, 8, C.brown, 0, 0, 0.02, head); c.rotation.x = Math.PI / 2;
  return g;
}
tree(-11.2, -2.6, 1.25, 0); tree(10.8, -3.2, 1.1, 1); tree(-9.6, 4.4, 0.9, 2);
pine(-12.4, 1.2, 1.2); pine(11.8, 0.4, 1.0); pine(12.6, 3.2, 0.8); pine(-10.8, -5.0, 1.0);
[[-9.2, 2.2, 1.2], [9.5, 5.6, 0.8], [11.4, -1.6, 0.9], [-12.2, 5.4, 0.7], [3.5, 7.8, 0.7], [-4.6, 8.0, 0.6]].forEach(([x, z, s], k) => rock(x, z, s, k));
[[-8.9, 6.6, 1.1], [9.1, 7.0, 1.0], [-12.6, -1.4, 1.2], [12.8, 6.4, 0.9], [0.5, 8.4, 0.9], [-6.3, 6.9, 0.8]].forEach(([x, z, s]) => fernAt(x, z, s));
[[8.6, 4.2], [9.2, 4.6], [8.7, 5.1], [-10.6, 6.2], [-11.1, 6.6]].forEach(([x, z], k) => sunflowerAt(x, z, 0.9 + (k % 2) * 0.15));
// a tiny campfire out front, like a little camp outside my room
const fire = group(5.6, 0, 7.4);
for (let k = 0; k < 7; k++) { const a = (k / 7) * Math.PI * 2; rock(5.6 + Math.cos(a) * 0.5, 7.4 + Math.sin(a) * 0.5, 0.45, k + 2); }
[0, 1.2, 2.4].forEach(a => { const l = cyl(0.07, 0.07, 0.8, 5, C.trunk, 0, 0.12, 0, fire); l.rotation.set(Math.PI / 2, a, 0.3); });
const flameMat = G(0xffa23d, 1.4), flameMat2 = G(0xffe07a, 1.6);
const flame = cone(0.22, 0.6, 5, flameMat, 0, 0.42, 0, fire), flame2 = cone(0.12, 0.38, 5, flameMat2, 0.02, 0.36, 0.02, fire);
flame.castShadow = flame2.castShadow = false;
const fireLight = new T.PointLight(0xff9a4d, 1.4, 7, 2); fireLight.position.set(5.6, 0.9, 7.4); scene.add(fireLight);
const log = cyl(0.22, 0.22, 1.6, 7, C.trunk, 7.4, 0.22, 6.6); log.rotation.set(0, 0.6, Math.PI / 2);

scene.children.slice(outsideStart).forEach((o, k) => {
  if (!o.isLight) o.position.y -= 0.22;
  if (k < 3) { o.scale.x *= 0.8; o.scale.z *= 0.8; o.position.z = -0.6; return; } // the island itself
  o.position.x *= 0.8; o.position.z = (o.position.z - 0.6) * 0.78 - 0.6;
});
/* ---- the room: floor, walls, window ---- */
box(12.3, 0.36, 5.3, C.woodD, 0, -0.32, -1.0);
for (let r = 0; r < 7; r++) {
  const z = BACK + 0.35 + r * 0.7;
  let x = LEFT, k = 0;
  const cuts = [2.2 + (r * 3.1) % 3, 4.2 + (r * 1.7) % 3, 16];
  cuts.forEach(len => { const w = Math.min(len, RIGHT - x); if (w <= 0) return; box(w - 0.02, 0.14, 0.68, (r + k) % 2 ? C.plankA : C.plankB, x + w / 2, -0.07, z); x += w; k++; });
}
box(12.2, 0.3, 0.2, C.woodD, 0, -0.1, FRONT + 0.1); // front lip
box(0.2, 0.3, 5.2, C.woodD, RIGHT + 0.05, -0.1, -1.0);
// back wall with a window hole
const WX1 = -0.62, WX2 = 1.62, WY1 = 1.0, WY2 = 3.0, WZ = BACK - 0.1;
box(WX1 - LEFT, WALL_H, 0.2, C.wall, (LEFT + WX1) / 2, WALL_H / 2, WZ);
box(RIGHT - WX2, WALL_H, 0.2, C.wall, (RIGHT + WX2) / 2, WALL_H / 2, WZ);
box(WX2 - WX1, WY1, 0.2, C.wall, (WX1 + WX2) / 2, WY1 / 2, WZ);
box(WX2 - WX1, WALL_H - WY2, 0.2, C.wall, (WX1 + WX2) / 2, (WALL_H + WY2) / 2, WZ);
box(0.2, WALL_H, 5.2, C.wall, LEFT - 0.1, WALL_H / 2, -1.0);
box(12.2, 0.18, 0.08, C.wallTrim, 0, 0.09, BACK + 0.02);
box(0.08, 0.18, 5, C.wallTrim, LEFT + 0.02, 0.09, -1.0);
box(12.4, 0.16, 0.36, C.wallTrim, 0, WALL_H + 0.08, WZ);
box(0.36, 0.16, 5.4, C.wallTrim, LEFT - 0.1, WALL_H + 0.08, -1.0);
// window frame, glass, sill, curtains
const winG = group();
[[WX1, (WY1 + WY2) / 2, 0.12, WY2 - WY1 + 0.12], [WX2, (WY1 + WY2) / 2, 0.12, WY2 - WY1 + 0.12], [(WX1 + WX2) / 2, (WY1 + WY2) / 2, 0.07, WY2 - WY1]].forEach(([x, y, w, h]) => box(w, h, 0.26, C.wood, x, y, WZ, winG));
[[WY1, 0.12], [WY2, 0.12], [(WY1 + WY2) / 2, 0.07]].forEach(([y, h]) => box(WX2 - WX1 + 0.12, h, 0.26, C.wood, (WX1 + WX2) / 2, y, WZ, winG));
box(WX2 - WX1 + 0.5, 0.1, 0.4, C.wood, (WX1 + WX2) / 2, WY1 - 0.03, WZ + 0.18, winG);
mesh(new T.PlaneGeometry(WX2 - WX1, WY2 - WY1), C.glass, (WX1 + WX2) / 2, (WY1 + WY2) / 2, WZ, winG).castShadow = false;
const curtainL = box(0.5, 2.5, 0.12, C.pink, WX1 - 0.15, 2.05, WZ + 0.22, winG, 0.08);
const curtainR = box(0.5, 2.5, 0.12, C.pink, WX2 + 0.15, 2.05, WZ + 0.22, winG, 0.08);
cyl(0.03, 0.03, WX2 - WX1 + 1.4, 5, C.woodD, (WX1 + WX2) / 2, 3.32, WZ + 0.24, winG).rotation.z = Math.PI / 2;
// little paintings above the bed, painted in the same low-poly style
function paintingTex(kind) {
  const c = document.createElement('canvas'); c.width = 192; c.height = 240;
  const g = c.getContext('2d');
  const tri = (pts, col) => { g.fillStyle = col; g.beginPath(); g.moveTo(pts[0], pts[1]); for (let k = 2; k < pts.length; k += 2) g.lineTo(pts[k], pts[k + 1]); g.closePath(); g.fill(); };
  if (kind === 0) { // night mountains + moon
    g.fillStyle = '#1b2a6b'; g.fillRect(0, 0, 192, 240); tri([0, 0, 192, 0, 0, 150], '#22337a'); tri([192, 0, 192, 160, 60, 0], '#2a3d8a');
    g.fillStyle = '#fff6d8'; g.beginPath(); g.arc(140, 60, 22, 0, 7); g.fill(); g.fillStyle = '#22337a'; g.beginPath(); g.arc(150, 54, 19, 0, 7); g.fill();
    [[30, 40], [70, 24], [100, 80], [24, 100], [170, 120]].forEach(([x, y]) => { g.fillStyle = '#fff'; g.fillRect(x, y, 3, 3); });
    tri([0, 240, 0, 150, 70, 90, 140, 240], '#5d6077'); tri([70, 90, 140, 240, 105, 240], '#45475c'); tri([60, 100, 70, 90, 82, 108], '#c9d4ff');
    tri([90, 240, 150, 110, 192, 170, 192, 240], '#4a4d66'); tri([150, 110, 192, 170, 192, 240], '#3a3d55'); tri([142, 124, 150, 110, 160, 126], '#c9d4ff');
    tri([0, 240, 0, 205, 96, 215, 192, 200, 192, 240], '#2f6b45'); tri([0, 205, 96, 215, 40, 240], '#24563a');
  } else if (kind === 1) { // sunflower
    g.fillStyle = '#7cc4ff'; g.fillRect(0, 0, 192, 240); tri([0, 0, 192, 0, 192, 120], '#9fd8ff'); tri([0, 240, 0, 120, 192, 240], '#5fa8e8');
    tri([92, 240, 98, 120, 104, 240], '#3f8f4a'); tri([98, 180, 40, 160, 70, 200], '#4fae5c'); tri([100, 170, 160, 150, 130, 195], '#3f9a52');
    for (let k = 0; k < 12; k++) { const a = (k / 12) * Math.PI * 2, b = a + 0.26, r1 = 26, r2 = 60; tri([96 + Math.cos(a) * r1, 100 + Math.sin(a) * r1, 96 + Math.cos(a + 0.13) * r2, 100 + Math.sin(a + 0.13) * r2, 96 + Math.cos(b) * r1, 100 + Math.sin(b) * r1], k % 2 ? '#ffd34d' : '#ffbf2e'); }
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2, b = a + 0.79; tri([96, 100, 96 + Math.cos(a) * 28, 100 + Math.sin(a) * 28, 96 + Math.cos(b) * 28, 100 + Math.sin(b) * 28], k % 2 ? '#6b3f1d' : '#4a2a12'); }
  } else { // cat face
    g.fillStyle = '#ff9fca'; g.fillRect(0, 0, 192, 240); tri([0, 0, 192, 0, 0, 240], '#ffb3d4');
    tri([40, 90, 52, 30, 86, 74], '#26232f'); tri([152, 90, 140, 30, 106, 74], '#1c1a24'); tri([50, 80, 56, 46, 74, 72], '#ff9fca'); tri([142, 80, 136, 46, 118, 72], '#ff9fca');
    tri([36, 90, 96, 66, 156, 90], '#33303e'); tri([36, 90, 156, 90, 96, 200], '#26232f'); tri([36, 90, 60, 170, 96, 200], '#1c1a24'); tri([156, 90, 132, 170, 96, 200], '#33303e');
    tri([62, 110, 84, 104, 80, 124], '#ffd34d'); tri([130, 110, 108, 104, 112, 124], '#ffd34d'); tri([88, 140, 104, 140, 96, 150], '#ff7eb6');
  }
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
}
const paintings = group();
[[-5.05, 2.5, 0.78, 1.0, -0.04, 0], [-4.15, 2.62, 0.94, 1.2, 0.03, 1], [-3.25, 2.48, 0.75, 0.95, -0.03, 2]].forEach(([x, y, w, h, r, k]) => {
  const f = box(w + 0.14, h + 0.14, 0.08, C.white, x, y, BACK + 0.04, paintings); f.rotation.z = r;
  const pic = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshStandardMaterial({ map: paintingTex(k), roughness: 0.9 }));
  pic.position.set(0, 0, 0.045); f.add(pic);
});
// pinboard
const pinboard = group(2.85, 2.72, BACK + 0.05); pinboard.scale.setScalar(0.8);
box(1.15, 1.5, 0.08, C.woodD, 0, 0, 0, pinboard); box(1.0, 1.35, 0.06, C.cork, 0, 0, 0.03, pinboard);
// my photo, pinned like a polaroid
const photoTex = new T.TextureLoader().load('images/me.jpg'); photoTex.encoding = T.sRGBEncoding;
const polaroid = box(0.5, 0.6, 0.02, C.white, -0.2, 0.12, 0.075, pinboard); polaroid.rotation.z = 0.06;
const photo = new T.Mesh(new T.PlaneGeometry(0.42, 0.42), new T.MeshLambertMaterial({ map: photoTex }));
photo.position.set(-0.2 - 0.004, 0.17, 0.088); photo.rotation.z = 0.06; pinboard.add(photo);
ico(0.045, C.pink, -0.2, 0.4, 0.1, pinboard, 0);
[[0.27, 0.36, 0, C.yellow, 0.08], [0.25, -0.12, 0, C.pinkL, -0.06], [-0.2, -0.45, 0, C.blue, 0.05]].forEach(([x, y, , m, r]) => { const n = box(0.3, 0.28, 0.02, m, x, y, 0.07, pinboard); n.rotation.z = r; ico(0.04, C.pinkD, x, y + 0.15, 0.1, pinboard); });
// shelf with books and a cat figurine over the desk
const shelf = group(5.0, 2.62, BACK + 0.2);
box(1.5, 0.08, 0.36, C.wood, 0, 0, 0, shelf);
[C.blue, C.pink, C.yellow, C.blueD].forEach((m, k) => box(0.14, 0.36 + (k % 3) * 0.06, 0.26, m, -0.6 + k * 0.16, 0.2 + (k % 3) * 0.03, 0, shelf));
const fig = group(0.45, 0.04, 0, shelf); ico(0.16, C.cat, 0, 0.16, 0, fig, 0); cone(0.06, 0.14, 4, C.cat, -0.09, 0.32, 0, fig); cone(0.06, 0.14, 4, C.cat, 0.09, 0.32, 0, fig);

// round clock on the left wall
const clock = group(LEFT + 0.05, 2.55, -2.2); clock.rotation.y = Math.PI / 2;
cyl(0.42, 0.42, 0.08, 10, C.pink, 0, 0, 0, clock).rotation.x = Math.PI / 2;
cyl(0.34, 0.34, 0.09, 10, C.white, 0, 0, 0.01, clock).rotation.x = Math.PI / 2;
const hourHand = box(0.04, 0.2, 0.02, C.ink, 0, 0.08, 0.07, clock), minHand = box(0.03, 0.28, 0.02, C.ink, 0, 0.12, 0.08, clock);
hourHand.geometry.translate(0, 0.02, 0); minHand.geometry.translate(0, 0.02, 0);
hourHand.position.y = minHand.position.y = 0;
// string lights along both walls
const bulbs = [];
const bulbMats = [G(0xffd38a, 1.2), G(0xff7eb6, 1.2), G(0x7cc4ff, 1.2)];
for (let k = 0; k < 17; k++) { const t = k / 16, x = LEFT + 0.4 + t * 11.2, y = 3.3 - Math.sin(t * Math.PI * 4) ** 2 * 0.25; bulbs.push(ico(0.06, bulbMats[k % 3], x, y, BACK + 0.14, scene, 0)); }
for (let k = 0; k < 7; k++) { const t = k / 6, z = BACK + 0.4 + t * 4.4, y = 3.3 - Math.sin(t * Math.PI * 2) ** 2 * 0.25; bulbs.push(ico(0.06, bulbMats[(k + 1) % 3], LEFT + 0.14, y, z, scene, 0)); }
bulbs.forEach(b => b.castShadow = false);
// door
const door = group(LEFT + 0.04, 0, 0.55); door.rotation.y = Math.PI / 2;
box(1.24, 2.6, 0.1, C.woodD, 0, 1.3, 0, door); box(1.04, 2.46, 0.1, C.wood, 0, 1.23, 0.05, door);
box(0.8, 0.7, 0.04, C.woodD, 0, 1.9, 0.11, door); box(0.8, 0.9, 0.04, C.woodD, 0, 0.7, 0.11, door);
ico(0.07, C.yellow, 0.4, 1.2, 0.14, door, 0);
box(0.56, 0.12, 0.05, C.yellow, 0, 1.42, 0.13, door); box(0.48, 0.03, 0.06, C.ink, 0, 1.42, 0.14, door);
const envA = box(0.34, 0.22, 0.02, C.pinkL, -0.06, 1.52, 0.17, door); envA.rotation.z = 0.12;
const envB = box(0.3, 0.2, 0.02, M(0xd6ecff), 0.1, 1.5, 0.16, door); envB.rotation.z = -0.15;
const signC = document.createElement('canvas'); signC.width = 256; signC.height = 96;
{ const g = signC.getContext('2d'); g.fillStyle = '#0b0a17'; g.fillRect(0, 0, 256, 96); g.strokeStyle = '#ff7eb6'; g.lineWidth = 6; g.strokeRect(6, 6, 244, 84); g.fillStyle = '#ffb3d4'; g.font = '800 46px JetBrains Mono, monospace'; g.textAlign = 'center'; g.fillText('hello!', 128, 64); }
const signTex = new T.CanvasTexture(signC); signTex.encoding = T.sRGBEncoding;
const sign = new T.Mesh(new T.PlaneGeometry(0.72, 0.27), new T.MeshStandardMaterial({ map: signTex, emissive: 0xffffff, emissiveMap: signTex, emissiveIntensity: 0.8 }));
sign.position.set(0, 2.0, 0.14); door.add(sign);
// rugs
const rug = mesh(rough(new T.CylinderGeometry(1, 1, 0.03, 12), 0.02), M(0x5b3f86, 0xf2b7d3), 0.3, 0.015, 0.15); rug.scale.set(2.2, 1, 1.05); rug.castShadow = false;
const rug2 = mesh(new T.CylinderGeometry(1, 1, 0.03, 10), M(0x2f4f86, 0xa9d6ff), 4.6, 0.015, 0.35); rug2.scale.set(1.15, 1, 0.7); rug2.castShadow = false;

/* ---- furniture ---- */
const objs = {};
// bed
objs.bed = group(-4.14, 0, -2.08); objs.bed.scale.setScalar(0.9);
box(3.8, 0.42, 3.15, C.woodD, 0, 0.21, 0, objs.bed);
box(3.62, 0.24, 2.98, C.white, 0, 0.54, 0, objs.bed, 0.03);
box(3.68, 0.14, 2.1, C.blueD, 0, 0.7, 0.45, objs.bed, 0.05);
box(3.7, 0.1, 0.36, C.blueM, 0, 0.74, -0.52, objs.bed, 0.03);
box(1.3, 0.22, 0.6, C.pinkL, -0.85, 0.74, -1.08, objs.bed, 0.08);
box(1.3, 0.22, 0.6, M(0xd6ecff), 0.85, 0.74, -1.08, objs.bed, 0.08);
box(3.9, 1.55, 0.22, C.wood, 0, 0.78, -1.48, objs.bed, 0.03);
[-1.4, -0.7, 0, 0.7, 1.4].forEach(x => ico(0.08, C.yellow, x, 1.3, -1.36, objs.bed, 0));
[[-1.2, 0.9], [0.4, 1.2], [1.3, 0.5], [-0.3, 0.2]].forEach(([x, z]) => ico(0.05, C.yellow, x, 0.79, z, objs.bed, 0));
// nightstand + lamp
objs.nightstand = group(-1.92, 0, -3.14);
box(1.0, 0.74, 0.68, C.wood, 0, 0.37, 0, objs.nightstand);
box(0.84, 0.24, 0.04, C.woodD, 0, 0.52, 0.35, objs.nightstand); box(0.84, 0.24, 0.04, C.woodD, 0, 0.22, 0.35, objs.nightstand);
ico(0.04, C.yellow, 0, 0.52, 0.38, objs.nightstand, 0); ico(0.04, C.yellow, 0, 0.22, 0.38, objs.nightstand, 0);
cyl(0.14, 0.18, 0.08, 6, C.white, -0.15, 0.78, 0, objs.nightstand); cyl(0.03, 0.03, 0.4, 5, C.white, -0.15, 0.98, 0, objs.nightstand);
const shadeMat = G(0xffd38a, 0.9);
const shade = cone(0.3, 0.32, 7, shadeMat, -0.15, 1.24, 0, objs.nightstand); shade.castShadow = false;
box(0.24, 0.14, 0.18, C.pinkL, 0.25, 0.81, 0.05, objs.nightstand);
const lampLight = new T.PointLight(0xffc77a, 1.3, 6, 2); lampLight.position.set(-2.08, 1.3, -2.9); scene.add(lampLight);
// sunflower in a pot
objs.sunflower = group(-1.0, 0, -3.1);
cyl(0.24, 0.17, 0.4, 6, C.pink, 0, 0.2, 0, objs.sunflower); cyl(0.26, 0.26, 0.07, 6, C.pinkD, 0, 0.4, 0, objs.sunflower);
cyl(0.21, 0.21, 0.03, 6, C.dirtD, 0, 0.41, 0, objs.sunflower); // soil
const flowerInner = sunflowerAt(0, 0, 0.95, objs.sunflower); flowerInner.position.y = 0.38;
// desk
objs.desk = group(4.1, 0, -2.95);
box(3.4, 0.1, 1.1, C.wood, 0, 0.86, 0, objs.desk);
[[-1.58, -0.45], [-1.58, 0.45], [1.58, -0.45], [1.58, 0.45]].forEach(([x, z]) => box(0.1, 0.82, 0.1, C.woodD, x, 0.41, z, objs.desk));
box(1.0, 0.6, 1.0, C.woodD, 1.0, 0.5, 0, objs.desk); box(0.82, 0.2, 0.03, C.wood, 1.0, 0.62, 0.5, objs.desk); box(0.82, 0.2, 0.03, C.wood, 1.0, 0.36, 0.5, objs.desk);
// monitor with a little Figma screen
function screenTex(kind) {
  const c = document.createElement('canvas'); c.width = 320; c.height = 190;
  const g = c.getContext('2d');
  if (kind === 'figma') {
    g.fillStyle = '#16142e'; g.fillRect(0, 0, 320, 190); g.fillStyle = '#24204a'; g.fillRect(0, 0, 320, 16);
    [[14, 30, 70, 64, '#ffffff'], [96, 30, 92, 96, '#ffd1e6'], [204, 30, 100, 56, '#d6ecff'], [14, 106, 70, 70, '#ffd34d'], [204, 98, 100, 78, '#ffffff']].forEach(([x, y, w, h, col]) => { g.fillStyle = col; g.fillRect(x, y, w, h); g.fillStyle = '#7cc4ff'; g.fillRect(x + 6, y + 6, w - 12, 10); });
    g.fillStyle = '#ff7eb6'; g.beginPath(); g.moveTo(150, 140); g.lineTo(150, 168); g.lineTo(158, 160); g.lineTo(168, 170); g.lineTo(172, 166); g.lineTo(163, 156); g.lineTo(174, 156); g.closePath(); g.fill();
  } else {
    g.fillStyle = '#ff9fca'; g.fillRect(0, 0, 320, 190); g.strokeStyle = '#fff'; g.lineWidth = 8; g.lineCap = 'round';
    g.beginPath(); g.moveTo(60, 140); g.quadraticCurveTo(130, 30, 200, 100); g.quadraticCurveTo(240, 140, 270, 60); g.stroke();
  }
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
}
const mon = group(-0.2, 0.91, -0.3, objs.desk);
box(0.5, 0.06, 0.3, C.dark, 0, 0.03, 0, mon); box(0.12, 0.4, 0.08, C.dark, 0, 0.24, -0.05, mon);
box(1.9, 1.12, 0.09, C.ink, 0, 0.92, 0, mon);
const screen = new T.Mesh(new T.PlaneGeometry(1.76, 0.98), new T.MeshStandardMaterial({ map: screenTex('figma'), emissive: 0xffffff, emissiveMap: screenTex('figma'), emissiveIntensity: 0.75 }));
screen.position.set(0, 0.92, 0.05); mon.add(screen);
const monitorLight = new T.PointLight(0x7cc4ff, 0.9, 4.5, 2); monitorLight.position.set(3.9, 1.6, -2.4); scene.add(monitorLight);
box(1.1, 0.05, 0.34, C.white, -0.2, 0.935, 0.2, objs.desk, 0.01);
ico(0.07, C.white, 0.5, 0.94, 0.22, objs.desk, 0).scale.set(1, 0.5, 1.4);
// pen tablet + stylus
const tab = group(1.08, 0.92, 0.1, objs.desk); tab.rotation.y = -0.12;
box(0.78, 0.04, 0.52, C.ink, 0, 0, 0, tab);
const tabScreen = new T.Mesh(new T.PlaneGeometry(0.62, 0.38), new T.MeshStandardMaterial({ map: screenTex('art'), emissive: 0xffffff, emissiveMap: screenTex('art'), emissiveIntensity: 0.55 }));
tabScreen.rotation.x = -Math.PI / 2; tabScreen.position.y = 0.025; tab.add(tabScreen);
const pen = cyl(0.02, 0.012, 0.5, 6, C.white, 0.42, 0.05, 0.05, tab); pen.rotation.set(Math.PI / 2, 0, 0.6);
// little desk plant + mug
cyl(0.16, 0.12, 0.24, 6, C.pink, -1.4, 1.03, -0.15, objs.desk); fernAt(-1.4, -0.15, 0.38, objs.desk).position.y = 1.12;
const deskMug = cyl(0.09, 0.08, 0.2, 7, C.blue, -0.95, 1.01, 0.25, objs.desk);
// chair (faces the desk, so you see its back)
objs.chair = group(4.1, 0, -1.95);
for (let k = 0; k < 5; k++) { const a = (k / 5) * Math.PI * 2; const leg = box(0.4, 0.05, 0.07, C.dark, Math.cos(a) * 0.2, 0.08, Math.sin(a) * 0.2, objs.chair); leg.rotation.y = -a; ico(0.05, C.dark, Math.cos(a) * 0.4, 0.05, Math.sin(a) * 0.4, objs.chair, 0); }
cyl(0.04, 0.04, 0.42, 5, C.dark, 0, 0.3, 0, objs.chair);
box(0.8, 0.12, 0.75, C.pinkD, 0, 0.56, 0, objs.chair, 0.03);
box(0.76, 0.82, 0.14, C.pink, 0, 1.05, 0.34, objs.chair, 0.04);
box(0.5, 0.52, 0.04, C.pinkL, 0, 1.03, 0.42, objs.chair, 0.02);
cone(0.12, 0.24, 4, C.pink, -0.26, 1.56, 0.34, objs.chair); cone(0.12, 0.24, 4, C.pink, 0.26, 1.56, 0.34, objs.chair);
// coffee table + mug with steam
objs.table = group(0.3, 0, 0.15);
const tTop = cyl(1, 1, 0.09, 10, C.wood, 0, 0.45, 0, objs.table); tTop.scale.set(1.02, 1, 0.55);
[[-0.6, -0.25], [0.6, -0.25], [-0.6, 0.25], [0.6, 0.25]].forEach(([x, z]) => cyl(0.05, 0.04, 0.42, 5, C.woodD, x, 0.21, z, objs.table));
const roomMug = group(0.25, 0.5, 0.0, objs.table);
cyl(0.12, 0.1, 0.22, 8, C.pink, 0, 0.11, 0, roomMug); cyl(0.105, 0.105, 0.01, 8, M(0x8a5634), 0, 0.215, 0, roomMug);
const handle = mesh(new T.TorusGeometry(0.07, 0.022, 4, 8), C.pink, 0.14, 0.11, 0, roomMug); handle.rotation.y = 0;
const steamPuffs = [0, 1, 2].map(k => { const p = ico(0.04, new T.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, flatShading: true }), 0, 0.3, 0, roomMug); p.castShadow = false; return p; });
const book = box(0.42, 0.06, 0.3, M(0xd6ecff), -0.45, 0.52, 0.05, objs.table); book.rotation.y = 0.3;
box(0.3, 0.008, 0.04, C.blueD, -0.45, 0.556, 0.0, objs.table).rotation.y = 0.3;
objs.beanbag =objs.beanbag = group(4.6, 0, 0.35);
const bean = ico(0.72, C.blueD, 0, 0.36, 0, objs.beanbag, 1, 0.12); bean.scale.set(1, 0.6, 0.85);
const bean2 = ico(0.42, C.blueM, -0.05, 0.62, -0.1, objs.beanbag, 1, 0.08); bean2.scale.set(1.1, 0.4, 0.8);
objs.catbed = group(-2.3, 0, 1.0);
const cbed = mesh(new T.TorusGeometry(0.38, 0.13, 5, 9), C.pinkD, 0, 0.12, 0, objs.catbed); cbed.rotation.x = Math.PI / 2; cbed.scale.set(1, 0.7, 1);
cyl(0.36, 0.36, 0.06, 9, C.pinkL, 0, 0.05, 0, objs.catbed);
cyl(0.14, 0.11, 0.08, 7, C.blue, 0.62, 0.04, 0.05, objs.catbed);
objs.window = winG; objs.posters = paintings; objs.pinboard = pinboard; objs.door = door;

// x, y = where you stand to use it (map units). box = what you bump into (map units).
const things = [
  { id: 'bed', box: [215, 300, 557, 586] },
  { id: 'nightstand', box: [558, 300, 658, 372], at: [608, 420], a3: [-1.92, 1.7, -3.1], label: 'switch the lamp', act: () => toggleLamp() },
  { id: 'sunflower', box: [676, 325, 724, 368], at: [700, 420], a3: [-1.0, 2.15, -3.05], label: 'water the sunflower', act: () => waterFlower() },
  { id: 'window', at: [850, 360], a3: [0.5, 3.4, BACK], label: () => root.getAttribute('data-theme') === 'night' ? 'open the curtains (day)' : 'close the curtains (night)', act: () => { toggleTheme(); click(1.3); } },
  { id: 'pinboard', at: [1075, 470], a3: [2.85, 3.35, BACK], label: 'read the pinboard', act: () => openOverlay('ov-about') },
  { id: 'posters', a3: [-4.15, 3.4, BACK], label: 'look at my art', act: () => openDesk(1) },
  { id: 'desk', box: [1040, 262, 1380, 412], at: [1210, 505], a3: [3.9, 2.7, -3.1], label: 'sit at the desk', act: () => openDesk(0) },
  { id: 'chair', box: [1172, 410, 1248, 482] },
  { id: 'door', at: [270, 705], a3: [LEFT, 2.9, 0.55], label: 'check the mail', act: () => openOverlay('ov-mail') },
  { id: 'table', box: [728, 612, 932, 718] },
  { id: 'beanbag', box: [1194, 650, 1326, 720], at: [1150, 760], a3: [4.6, 1.3, 0.35], label: 'flop on the beanbag', act: () => { say('comfy'); click(0.7); } },
  { id: 'catbed', box: [526, 735, 634, 765] }
];
things.forEach(t => { const o = objs[t.id]; if (o) o.traverse(m => { m.userData.thing = t; }); });

// buttons for keyboard users (Tab to them, Enter to use)
things.filter(t => t.act).forEach(t => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'hotspot';
  const lab = () => typeof t.label === 'function' ? t.label() : t.label;
  b.textContent = lab();
  b.addEventListener('focus', () => { b.textContent = lab(); });
  b.addEventListener('click', () => t.act());
  hotspotsEl.appendChild(b);
});

/* ---- me: a little low-poly girl in a cat-ear hoodie ---- */
const me3 = group();
const meBody = group(0, 0, 0, me3);
const legL = group(-0.1, 0.38, 0, meBody), legR = group(0.1, 0.38, 0, meBody);
[legL, legR].forEach(l => { box(0.15, 0.34, 0.16, C.jeans, 0, -0.17, 0, l); box(0.17, 0.08, 0.24, C.white, 0, -0.34, 0.03, l); });
cyl(0.2, 0.29, 0.46, 6, C.pink, 0, 0.6, 0, meBody);
box(0.22, 0.12, 0.04, C.pinkD, 0, 0.52, 0.23, meBody);
const armL = group(-0.29, 0.8, 0, meBody), armR = group(0.29, 0.8, 0, meBody);
[armL, armR].forEach((a, k) => { const s = box(0.12, 0.36, 0.13, C.pinkD, 0, -0.16, 0, a); s.rotation.z = k ? -0.12 : 0.12; ico(0.065, C.skin, k ? 0.03 : -0.03, -0.36, 0, a, 0); });
const headG = group(0, 1.08, 0, meBody);
ico(0.37, C.pink, 0, 0.0, -0.07, headG, 1);
ico(0.29, C.skin, 0, -0.02, 0.07, headG, 1);
const hairCap = mesh(new T.SphereGeometry(0.305, 8, 5, 0, Math.PI * 2, 0, 1.1), C.hair, 0, 0.01, 0.05, headG); hairCap.rotation.x = -0.7;
cone(0.11, 0.22, 4, C.pink, -0.22, 0.33, -0.05, headG).rotation.z = 0.35;
cone(0.11, 0.22, 4, C.pink, 0.22, 0.33, -0.05, headG).rotation.z = -0.35;
const eyeL = box(0.075, 0.11, 0.03, C.hair, -0.1, -0.05, 0.35, headG), eyeR = box(0.075, 0.11, 0.03, C.hair, 0.1, -0.05, 0.35, headG);
box(0.07, 0.035, 0.02, C.pinkL, -0.18, -0.12, 0.31, headG); box(0.07, 0.035, 0.02, C.pinkL, 0.18, -0.12, 0.31, headG);
me3.traverse(m => { if (m.isMesh) m.castShadow = true; });

/* ---- the cat ---- */
const cat3 = group();
const catSleep = group(0, 0, 0, cat3), catAwake = group(0, 0, 0, cat3);
{ const b = ico(0.26, C.cat, 0, 0.16, 0, catSleep, 1, 0.03); b.scale.set(1.25, 0.6, 1);
  ico(0.15, C.cat, 0.24, 0.17, 0.12, catSleep, 1); cone(0.05, 0.1, 4, C.cat, 0.18, 0.3, 0.12, catSleep); cone(0.05, 0.1, 4, C.cat, 0.3, 0.3, 0.12, catSleep);
  box(0.06, 0.012, 0.01, C.catD, 0.19, 0.18, 0.25, catSleep); box(0.06, 0.012, 0.01, C.catD, 0.29, 0.18, 0.25, catSleep);
  const tl = cyl(0.04, 0.04, 0.45, 5, C.cat, -0.12, 0.08, 0.22, catSleep); tl.rotation.set(Math.PI / 2, 0, 1.2); }
let catTail;
{ const b = ico(0.22, C.cat, 0, 0.24, -0.04, catAwake, 1, 0.03); b.scale.set(0.95, 1.1, 1.15);
  ico(0.17, C.cat, 0, 0.5, 0.08, catAwake, 1);
  cone(0.06, 0.13, 4, C.cat, -0.09, 0.66, 0.08, catAwake); cone(0.06, 0.13, 4, C.cat, 0.09, 0.66, 0.08, catAwake);
  box(0.05, 0.06, 0.02, C.yellow, -0.065, 0.52, 0.24, catAwake); box(0.05, 0.06, 0.02, C.yellow, 0.065, 0.52, 0.24, catAwake);
  box(0.035, 0.025, 0.02, C.pink, 0, 0.47, 0.25, catAwake);
  [[-0.08, 0.12], [0.08, 0.12]].forEach(([x, z]) => cyl(0.04, 0.04, 0.18, 5, C.cat, x, 0.08, z, catAwake));
  cone(0.03, 0.06, 4, C.pinkL, -0.09, 0.64, 0.12, catAwake); cone(0.03, 0.06, 4, C.pinkL, 0.09, 0.64, 0.12, catAwake);
  catTail = group(0, 0.12, -0.2, catAwake); const t = cyl(0.035, 0.03, 0.42, 5, C.cat, 0, 0.18, -0.06, catTail); t.rotation.x = -0.4; }
catAwake.visible = false;
cat3.scale.setScalar(1.15);
cat3.traverse(m => { m.userData.thing = 'cat'; });

/* ---- fireflies outside at night (just a few) ---- */
const flyMat = G(0xe6ff8a, 2);
const flies = Array.from({ length: 10 }, (_, k) => { const f = ico(0.05, flyMat, 0, 0, 0, scene, 0); f.castShadow = false; f.userData.p = [(k % 2 ? 1 : -1) * (9 + rnd() * 3.5), 0.6 + rnd() * 1.6, -3 + rnd() * 10, rnd() * 6]; return f; });

/* ---- speed: join everything that never moves into one mesh per material ---- */
// fewer, bigger meshes = far fewer draw calls for the graphics card
[me3, cat3, flame, flame2, curtainL, curtainR, hourHand, minHand, flowerInner, ...steamPuffs, ...flies].forEach(o => { o.userData.dynamic = true; });
// invisible boxes keep things clickable after merging
const pickMat = new T.MeshBasicMaterial({ visible: false });
const proxies = [];
Object.values(objs).forEach(o => {
  const bb = new T.Box3().setFromObject(o), size = bb.getSize(new T.Vector3()), c = bb.getCenter(new T.Vector3());
  const p = new T.Mesh(new T.BoxGeometry(size.x + 0.1, size.y + 0.1, size.z + 0.1), pickMat);
  p.position.copy(c); p.userData.thing = o.userData.thing; scene.add(p); proxies.push(p);
});
(function mergeStatic() {
  scene.updateMatrixWorld(true);
  const buckets = new Map(), drop = [];
  scene.traverse(m => {
    if (!m.isMesh || m.children.length || m.material === pickMat || m.material.map || m.material.transparent) return;
    for (let o = m; o; o = o.parent) if (o.userData.dynamic) return;
    const key = m.material.uuid + (m.castShadow ? 's' : '');
    if (!buckets.has(key)) buckets.set(key, { mat: m.material, cast: m.castShadow, pos: [], nor: [] });
    const g = (m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()).applyMatrix4(m.matrixWorld);
    const b = buckets.get(key);
    b.pos.push(g.attributes.position.array); b.nor.push(g.attributes.normal.array);
    drop.push(m);
  });
  drop.forEach(m => m.parent.remove(m));
  const join = arrs => { const out = new Float32Array(arrs.reduce((n, a) => n + a.length, 0)); let o = 0; arrs.forEach(a => { out.set(a, o); o += a.length; }); return out; };
  buckets.forEach(b => {
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.BufferAttribute(join(b.pos), 3));
    g.setAttribute('normal', new T.BufferAttribute(join(b.nor), 3));
    const mm = new T.Mesh(g, b.mat); mm.castShadow = b.cast; mm.receiveShadow = true; mm.matrixAutoUpdate = false;
    scene.add(mm);
  });
})();

/* ---- light + day/night ---- */
const hemi = new T.HemisphereLight(0xffffff, 0x444444, 1); scene.add(hemi);
const sun = new T.DirectionalLight(0xffffff, 1);
sun.castShadow = true; sun.shadow.mapSize.set(lowPower ? 1024 : 1536, lowPower ? 1024 : 1536);
Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 12, bottom: -12, near: 1, far: 60 });
sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.02;
scene.add(sun); scene.add(sun.target); sun.target.position.set(0, 0, 0.5);
let lampOn = true;
/* ---- the sky: the sun sets, then the moon and stars come out (and back again in the morning) ---- */
// sky = 0 is full day, 1 is full night. It slides between them when the theme changes.
scene.add(camera); // the sun, moon and stars ride along with the camera so they always sit in the sky
const skyG = group(0, 0, 0, camera);
const sunMesh = new T.Mesh(new T.IcosahedronGeometry(2.3, 1), new T.MeshBasicMaterial({ color: 0xffd34d, fog: false }));
const sunHalo = new T.Mesh(new T.IcosahedronGeometry(3.4, 1), new T.MeshBasicMaterial({ color: 0xffe9a0, transparent: true, opacity: 0.3, fog: false, depthWrite: false }));
const moonMesh = new T.Mesh(new T.IcosahedronGeometry(1.9, 1), new T.MeshLambertMaterial({ color: 0xfff6d8, emissive: 0xfff0c8, emissiveIntensity: 0.85, flatShading: true, fog: false }));
const moonHalo = new T.Mesh(new T.IcosahedronGeometry(2.9, 1), new T.MeshBasicMaterial({ color: 0xbfd0ff, transparent: true, opacity: 0.18, fog: false, depthWrite: false }));
[sunMesh, sunHalo, moonMesh, moonHalo].forEach(m => skyG.add(m));
// little craters so the moon looks low-poly too
[[-0.55, 0.5, 0.36], [0.65, -0.25, 0.46], [0.08, -0.8, 0.28]].forEach(([x, y, r]) => { const c = new T.Mesh(new T.IcosahedronGeometry(r, 0), new T.MeshLambertMaterial({ color: 0xe8dcb8, emissive: 0xd8cca8, emissiveIntensity: 0.6, flatShading: true, fog: false })); c.position.set(x, y, 1.65); moonMesh.add(c); });
const starGeo = new T.BufferGeometry(), starPos = [];
for (let k = 0; k < 140; k++) starPos.push((rnd() - 0.5) * 220, 4 + rnd() * 30, -70 - rnd() * 10);
starGeo.setAttribute('position', new T.Float32BufferAttribute(starPos, 3));
const starMat = new T.PointsMaterial({ color: 0xffffff, size: 0.22, transparent: true, opacity: 0, fog: false, depthWrite: false });
const stars = new T.Points(starGeo, starMat); skyG.add(stars);
const skyBack = document.createElement('div'); skyBack.className = 'sky-day'; viewport.before(skyBack);

const sky = { now: root.getAttribute('data-theme') === 'day' ? 0 : 1, goal: 0, from: 0, t: 1 };
sky.goal = sky.now;
const smooth = x => x * x * (3 - 2 * x);
const c1 = new T.Color(), c2 = new T.Color();
function placeSky() {
  const p = sky.now;
  const sunUp = smooth(clamp(1 - p / 0.6, 0, 1)), moonUp = smooth(clamp((p - 0.4) / 0.6, 0, 1));
  const halfH = 60 * Math.tan((camera.fov / 2) * Math.PI / 180), halfW = halfH * camera.aspect;
  // up = high in the sky, down = sunk below the island (the island and mountains hide it)
  sunMesh.position.set(halfW * 0.8 - (1 - sunUp) * 1.5, lerp(-halfH * 1.1, halfH * 0.74, sunUp), -60);
  moonMesh.position.set(halfW * 0.8 - (1 - moonUp) * 1.5, lerp(-halfH * 1.1, halfH * 0.74, moonUp), -60);
  sunHalo.position.copy(sunMesh.position); moonHalo.position.copy(moonMesh.position);
  sunMesh.visible = sunHalo.visible = sunUp > 0.001; moonMesh.visible = moonHalo.visible = moonUp > 0.001;
  starMat.opacity = moonUp * 0.9;
  moonMesh.rotation.z = -0.4;
  skyBack.style.opacity = (1 - p).toFixed(3);
  applyTheme(1 - p);
}
// d = how much daylight (0 night, 1 day). Everything blends smoothly between the two looks.
function applyTheme(d = 1 - sky.now) {
  themed.forEach(m => m.color.copy(m.userData.night).lerp(m.userData.day, d));
  hemi.color.copy(c1.set(0x6a73c9)).lerp(c2.set(0xffffff), d); hemi.groundColor.copy(c1.set(0x241838)).lerp(c2.set(0x93c46e), d); hemi.intensity = lerp(0.62, 0.58, d);
  sun.color.copy(c1.set(0xa9b8ff)).lerp(c2.set(0xfff0d8), d); sun.intensity = lerp(0.42, 1.0, d); sun.position.set(lerp(-7, 9, d), lerp(14, 15, d), 9);
  scene.fog.color.copy(c1.set(0x0d0b22)).lerp(c2.set(0xcfe9ff), d);
  glowMats.forEach(m => { m.emissiveIntensity = m.userData.base * lerp(1, 0.45, d); });
  shadeMat.emissiveIntensity = lampOn ? lerp(0.9, 0.5, d) : 0.02;
  lampLight.intensity = lampOn ? lerp(1.3, 0.35, d) : 0;
  monitorLight.intensity = lerp(0.9, 0.3, d);
  flies.forEach(f => { f.visible = d < 0.5; });
  curtainL.scale.x = curtainR.scale.x = lerp(1, 0.55, d);
  curtainL.position.x = WX1 - lerp(0.15, 0.03, d); curtainR.position.x = WX2 + lerp(0.15, 0.03, d);
}
new MutationObserver(() => {
  sky.from = sky.now; sky.goal = root.getAttribute('data-theme') === 'day' ? 0 : 1; sky.t = reduceMotion ? 1 : 0;
}).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
placeSky();

/* ---- state ---- */
const me = { x: 830, y: 540, face: 'down', moving: false, rot: 0 };
const cat = { x: 440, y: 480, awake: false, onBed: true, pets: 0, rot: 0.6, walking: false, stay: false, napping: false };
const keys = new Set();
let target = null, targetThing = null, stuckFor = 0, overlayOpen = null;
const stick = { x: 0, y: 0 };

function blocked(x, y) {
  if (x < MINX || x > MAXX || y < WALL + 34 || y > MAXY) return true;
  for (const t of things) {
    if (!t.box) continue;
    const [x1, y1, x2, y2] = t.box;
    if (x + 16 > x1 && x - 16 < x2 && y + 6 > y1 && y - 6 < y2) return true;
  }
  return false;
}
function walkTo(x, y, thing) { target = { x, y }; targetThing = thing || null; stuckFor = 0; }
const catThing = { id: 'cat', label: 'pet the kitty', act: () => petCat() };
function nearest() {
  let best = null, bd = 120;
  things.forEach(t => {
    if (!t.at) return;
    const d = Math.hypot(t.at[0] - me.x, t.at[1] - me.y);
    if (d < bd) { bd = d; best = t; }
  });
  const dc = Math.hypot(cat.x - me.x, cat.y - me.y);
  if (dc < (cat.onBed ? 250 : 110) && (!best || dc < bd)) best = catThing;
  return best;
}
// screen position of a 3D point
const tmpV = new T.Vector3();
let vpRect = viewport.getBoundingClientRect();
function toScreen(x, y, z) { tmpV.set(x, y, z).project(camera); const r = vpRect; return [r.left + (tmpV.x + 1) / 2 * r.width, r.top + (1 - tmpV.y) / 2 * r.height]; }
function burstAt(obj, kind) { const p = new T.Vector3(); obj.getWorldPosition(p); const [sx, sy] = toScreen(p.x, p.y + 1, p.z); burst(sx, sy, kind); }

function petCat() {
  meow();
}
// a little synthesized meow (no sound files needed)
let meowCtx = null;
function meow() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  meowCtx = meowCtx || new AC();
  const c = meowCtx, t = c.currentTime + 0.02, len = 0.55 + Math.random() * 0.2, base = 520 + Math.random() * 120;
  const o = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(base * 0.85, t);
  o.frequency.linearRampToValueAtTime(base * 1.35, t + len * 0.35);
  o.frequency.exponentialRampToValueAtTime(base * 0.7, t + len);
  f.type = 'bandpass'; f.Q.value = 3;
  f.frequency.setValueAtTime(900, t); f.frequency.linearRampToValueAtTime(1700, t + len * 0.3); f.frequency.linearRampToValueAtTime(800, t + len);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.22, t + 0.06); g.gain.setValueAtTime(0.22, t + len * 0.6); g.gain.exponentialRampToValueAtTime(0.001, t + len);
  o.connect(f); f.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + len + 0.05);
}
function toggleLamp() { lampOn = !lampOn; applyTheme(); click(lampOn ? 1.4 : 0.8); }
let wiggleT = -1;
function waterFlower() { wiggleT = 0; burstAt(objs.sunflower, 'flower'); say('watered the sunflower'); click(1.2); }

/* ---- pop-ups (overlays) ---- */
let lastFocus = null;
function openOverlay(id) {
  if (overlayOpen === id) return;
  if (overlayOpen) closeOverlay(true);
  const ov = $(id);
  lastFocus = document.activeElement;
  ov.hidden = false;
  requestAnimationFrame(() => ov.classList.add('open'));
  overlayOpen = id;
  keys.clear(); target = null;
  document.body.classList.add('ov-on');
  click(1.1);
  const f = ov.querySelector('.ov-close');
  if (f) f.focus({ preventScroll: true });
}
function closeOverlay(quick) {
  if (!overlayOpen) return;
  const ov = $(overlayOpen);
  ov.classList.remove('open');
  if (quick) ov.hidden = true; else setTimeout(() => { if (!ov.classList.contains('open')) ov.hidden = true; }, 320);
  overlayOpen = null;
  document.body.classList.remove('ov-on');
  if (!quick && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeOverlay()));
document.querySelectorAll('.overlay').forEach(ov => ov.addEventListener('pointerdown', e => { if (e.target === ov) closeOverlay(); }));

// the desk: side view, slide between the computer and the pen tablet
const deskTrack = $('deskTrack'), deskDots = document.querySelectorAll('.desk-dots button');
let station = 0;
function setStation(k) {
  station = clamp(k, 0, 1);
  $('ov-desk').style.setProperty('--st', station);
  $('ov-desk').classList.toggle('st1', station === 1);
  deskDots.forEach((b, j) => b.classList.toggle('on', j === station));
  $('deskPrev').disabled = station === 0;
  $('deskNext').disabled = station === 1;
  if (station === 1 && artIndex < 0) setTimeout(() => paintArt(0), 500);
}
function openDesk(k) { openOverlay('ov-desk'); setStation(k); }
$('deskPrev').addEventListener('click', () => { setStation(station - 1); click(1); });
$('deskNext').addEventListener('click', () => { setStation(station + 1); click(1.2); });
deskDots.forEach(b => b.addEventListener('click', () => { setStation(+b.dataset.st); click(1.1); }));
// swipe on phones
let swipeX = null;
deskTrack.addEventListener('touchstart', e => { swipeX = e.target.closest('.frame, .tablet, button') ? null : e.touches[0].clientX; }, { passive: true });
deskTrack.addEventListener('touchend', e => { if (swipeX === null) return; const dx = e.changedTouches[0].clientX - swipeX; if (Math.abs(dx) > 60) setStation(station + (dx < 0 ? 1 : -1)); swipeX = null; });


window.openZone = id => {
  if (id === 'home') return closeOverlay();
  if (id === 'figma') { setApp('figma'); return openDesk(0); }
  if (id === 'art') return openDesk(1);
  if (id === 'canva') { setApp('canva'); return openDesk(0); }
  if (id === 'contact') return openOverlay('ov-mail');
};
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => goTo(b.dataset.open)));
$('brandHome').addEventListener('click', e => { e.preventDefault(); closeOverlay(); });

/* ---- keyboard ---- */
const typing = () => { const a = document.activeElement; return a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA'); };
const KEYMAP = { w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right' };
window.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (document.querySelector('dialog[open]')) return;
  if (k === 'escape' && overlayOpen) { closeOverlay(); return; }
  if (typing()) return;
  if (overlayOpen === 'ov-desk') {
    if (KEYMAP[k] === 'left') { setStation(station - 1); click(1); e.preventDefault(); }
    if (KEYMAP[k] === 'right') { setStation(station + 1); click(1.2); e.preventDefault(); }
    return;
  }
  if (overlayOpen) return;
  if (KEYMAP[k]) { keys.add(KEYMAP[k]); target = null; e.preventDefault(); hideHint(); }
  if (k === 'e' || (k === ' ' && document.activeElement === document.body)) { const t = nearest(); if (t) { t.act(); e.preventDefault(); } }
});
window.addEventListener('keyup', e => { const k = KEYMAP[e.key.toLowerCase()]; if (k) keys.delete(k); });
window.addEventListener('blur', () => keys.clear());
let hintGone = false;
function hideHint() { if (hintGone) return; hintGone = true; setTimeout(() => $('controlsHint').classList.add('faded'), 2500); }

// click or tap: on a thing = walk there and use it, on the floor = walk there
const ray = new T.Raycaster(), ptr = new T.Vector2(), floorPlane = new T.Plane(new T.Vector3(0, 1, 0), 0), hitP = new T.Vector3();
const clickables = [...proxies, cat3];
function pick(e) {
  const r = viewport.getBoundingClientRect();
  ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const hit = ray.intersectObjects(clickables, true)[0];
  return hit ? hit.object.userData.thing : null;
}
viewport.addEventListener('pointerdown', e => {
  if (e.target.closest('.touch-pad, .touch-e') || overlayOpen) return;
  const t = pick(e);
  hideHint();
  if (t === 'cat') { walkTo(440, 630, catThing); return; }
  if (t && t.act) { if (t.at) walkTo(t.at[0], t.at[1], t); else t.act(); return; }
  if (ray.ray.intersectPlane(floorPlane, hitP)) walkTo(clamp(hitP.x * 100 + 800, MINX + 5, MAXX - 5), clamp(hitP.z * 100 + 650, WALL + 40, MAXY - 4));
});
viewport.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const t = pick(e);
  viewport.style.cursor = t && (t === 'cat' || t.act) ? 'pointer' : 'default';
});

// phone joystick + E button
const pad = $('touchPad'), stickEl = $('stick');
let padId = null;
pad.addEventListener('pointerdown', e => { padId = e.pointerId; pad.setPointerCapture(padId); movePad(e); target = null; hideHint(); });
pad.addEventListener('pointermove', e => { if (e.pointerId === padId) movePad(e); });
const endPad = () => { padId = null; stick.x = stick.y = 0; stickEl.style.transform = ''; };
pad.addEventListener('pointerup', endPad); pad.addEventListener('pointercancel', endPad);
function movePad(e) {
  const r = pad.getBoundingClientRect();
  let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
  const m = Math.hypot(dx, dy), max = r.width / 2 - 18;
  if (m > max) { dx = dx / m * max; dy = dy / m * max; }
  stick.x = dx / max; stick.y = dy / max;
  stickEl.style.transform = `translate(${dx}px, ${dy}px)`;
}
$('touchE').addEventListener('click', () => { const t = nearest(); if (t) t.act(); else say('walk closer to something'); });


/* ---- camera: show the whole island on wide screens, follow me on narrow ones ---- */
const camDir = new T.Vector3(0.3, 0.62, 0.72).normalize();
const camTarget = new T.Vector3(0, 0.6, 0.6), camPos = new T.Vector3();
let follow = false, camDist = 24;
function layout() {
  vpRect = viewport.getBoundingClientRect();
  const w = viewport.clientWidth, h = viewport.clientHeight;
  renderer.setSize(w, h, false);
  renderer.domElement.style.width = w + 'px'; renderer.domElement.style.height = h + 'px';
  camera.aspect = w / h; camera.updateProjectionMatrix();
  follow = camera.aspect < 1.05;
  camDist = follow ? 11.5 / Math.pow(camera.aspect, 0.6) : 16.8 * Math.max(1, Math.pow(1.7 / camera.aspect, 0.95));
}
window.addEventListener('resize', () => { layout(); placeSky(); });
layout();
placeSky();

/* ---- the loop ---- */
let lastT = performance.now(), walkPhase = 0, firstFrame = true;
const perf = { frames: 0, time: 0 };
const angLerp = (a, b, t) => { let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI; if (d < -Math.PI) d += Math.PI * 2; return a + d * t; };
function tick(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;
  let dx = 0, dy = 0;
  if (!overlayOpen) {
    if (keys.has('left')) dx -= 1; if (keys.has('right')) dx += 1;
    if (keys.has('up')) dy -= 1; if (keys.has('down')) dy += 1;
    if (stick.x || stick.y) { dx = stick.x; dy = stick.y; }
    if (target && !dx && !dy) {
      const tx = target.x - me.x, ty = target.y - me.y, d = Math.hypot(tx, ty);
      if (d < 8) { const t = targetThing; target = null; targetThing = null; if (t) { if (t !== catThing && t.a3) me.rot = Math.atan2(t.a3[0] - X(me.x), t.a3[2] - Z(me.y)); t.act(); } }
      else { dx = tx / d; dy = ty / d; }
    }
  }
  const m = Math.hypot(dx, dy);
  me.moving = m > 0.15;
  if (me.moving) {
    if (m > 1) { dx /= m; dy /= m; }
    const sp = 280 * dt, ox = me.x, oy = me.y;
    if (!blocked(me.x + dx * sp, me.y)) me.x += dx * sp;
    if (!blocked(me.x, me.y + dy * sp)) me.y += dy * sp;
    me.rot = angLerp(me.rot, Math.atan2(dx, dy), 0.25);
    walkPhase += dt * 11;
    if (target) {
      if (Math.hypot(me.x - ox, me.y - oy) < sp * 0.2) stuckFor += dt; else stuckFor = 0;
      if (stuckFor > 0.35) { const t = targetThing; const close = t && t.at && Math.hypot(t.at[0] - me.x, t.at[1] - me.y) < 260; target = null; targetThing = null; if (close) t.act(); }
    }
  } else walkPhase = lerp(walkPhase, Math.round(walkPhase / Math.PI) * Math.PI, 0.2);
  // the cat follows once she's awake
  if (cat.awake && !cat.onBed) {
    let bx = me.x - Math.sin(me.rot) * 70, by = me.y - Math.cos(me.rot) * 70;
    if (cat.stay) { bx = 538; by = 912; }
    const cx = bx - cat.x, cy = by - cat.y, cd = Math.hypot(cx, cy);
    cat.walking = cd > (cat.stay ? 6 : 30);
    if (cat.stay && !cat.walking && !cat.napping) { cat.napping = true; catAwake.visible = false; catSleep.visible = true; }
    if (cat.walking) {
      const s = Math.min(cd, (cd > 140 ? 330 : 240) * dt);
      cat.x = clamp(cat.x + cx / cd * s, 50, W - 50); cat.y = clamp(cat.y + cy / cd * s, WALL + 30, H - 16);
      cat.rot = angLerp(cat.rot, Math.atan2(cx, cy), 0.2);
    } else if (!cat.stay) cat.rot = angLerp(cat.rot, Math.atan2(me.x - cat.x, me.y - cat.y), 0.05);
  }
  render(now / 1000, dt);
  requestAnimationFrame(tick);
}
function render(t, dt) {
  // me
  const sw = Math.sin(walkPhase);
  me3.position.set(X(me.x), me.moving ? Math.abs(sw) * 0.05 : 0, Z(me.y));
  me3.rotation.y = me.rot;
  legL.rotation.x = sw * 0.6; legR.rotation.x = -sw * 0.6;
  armL.rotation.x = -sw * 0.5; armR.rotation.x = sw * 0.5;
  meBody.scale.y = 1 + (me.moving ? 0 : Math.sin(t * 2.4) * 0.012);
  headG.rotation.z = me.moving ? 0 : Math.sin(t * 1.3) * 0.04;
  const blink = (t % 4) > 3.86 ? 0.15 : 1;
  eyeL.scale.y = eyeR.scale.y = blink;
  // cat
  if (cat.onBed) { cat3.position.set(-3.6, 0.7, -1.7); cat3.rotation.y = 0.5; catSleep.scale.y = 1 + Math.sin(t * 2) * 0.04; }
  else {
    cat3.position.set(X(cat.x), cat.napping ? 0.09 : cat.walking ? Math.abs(Math.sin(t * 16)) * 0.04 : 0, Z(cat.y));
    if (cat.napping) catSleep.scale.y = 1 + Math.sin(t * 2) * 0.04;
    cat3.rotation.y = cat.rot;
    catTail.rotation.z = Math.sin(t * (cat.walking ? 9 : 3)) * 0.35;
  }
  // sky transition (about 3.5 seconds)
  if (sky.t < 1) { sky.t = Math.min(1, sky.t + dt / 3.5); sky.now = lerp(sky.from, sky.goal, sky.t); placeSky(); }
  sunHalo.scale.setScalar(1 + Math.sin(t * 1.5) * 0.04);
  // little life around the room
  steamPuffs.forEach((p, k) => { const s = ((t * 0.5 + k / 3) % 1); p.position.set(Math.sin(t * 2 + k) * 0.03, 0.25 + s * 0.4, 0); p.material.opacity = 0.5 * (1 - s); p.scale.setScalar(0.6 + s); });
  flame.scale.set(1, 1 + Math.sin(t * 13) * 0.12, 1); flame2.scale.set(1, 1 + Math.sin(t * 17 + 1) * 0.15, 1);
  fireLight.intensity = lerp(1.4, 0.4, 1 - sky.now) + Math.sin(t * 11) * 0.15;
  flies.forEach(f => { const [x, y, z, ph] = f.userData.p; f.position.set(x + Math.sin(t * 0.4 + ph) * 0.8, y + Math.sin(t * 0.9 + ph) * 0.3, z + Math.cos(t * 0.3 + ph) * 0.8); f.scale.setScalar(0.6 + (Math.sin(t * 3 + ph * 2) + 1) * 0.4); });
  bulbMats.forEach((b, k) => { b.emissiveIntensity = b.userData.base * lerp(1, 0.45, 1 - sky.now) * (0.75 + Math.sin(t * 2 + k * 2.1) * 0.25); });
  const d = new Date(); minHand.rotation.z = -(d.getMinutes() / 60) * Math.PI * 2; hourHand.rotation.z = -((d.getHours() % 12) / 12 + d.getMinutes() / 720) * Math.PI * 2;
  if (wiggleT >= 0) { wiggleT += dt; flowerInner.rotation.z = Math.sin(wiggleT * 14) * 0.15 * Math.max(0, 1 - wiggleT); if (wiggleT > 1) wiggleT = -1; }
  // camera
  if (follow) camTarget.lerp(tmpV.set(X(me.x) * 0.75, 0.6, Z(me.y) * 0.6 - 0.4), firstFrame ? 1 : 0.08);
  else camTarget.set(0, 0.5, -0.6);
  camPos.copy(camDir).multiplyScalar(camDist).add(camTarget);
  camera.position.copy(camPos); camera.lookAt(camTarget);
  if (!overlayOpen || firstFrame) renderer.render(scene, camera);
  if (firstFrame && window.roomReady) window.roomReady();
  firstFrame = false;
  // if this device is struggling, quietly draw at a lower resolution
  perf.frames++; perf.time += dt;
  if (perf.time > 2) {
    const fps = perf.frames / perf.time;
    if (fps < 40 && pixelRatio > 0.75 && !overlayOpen && document.visibilityState === 'visible') { pixelRatio = Math.max(0.75, pixelRatio - 0.25); renderer.setPixelRatio(pixelRatio); layout(); }
    perf.frames = 0; perf.time = 0;
  }
  // what's nearby
  const n = overlayOpen ? null : nearest();
  if (n) {
    const lab = typeof n.label === 'function' ? n.label() : n.label;
    if (promptText.textContent !== lab) promptText.textContent = lab;
    const [sx, sy] = n === catThing ? toScreen(cat3.position.x, cat3.position.y + 0.85, cat3.position.z) : toScreen(...n.a3);
    promptEl.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px) translate(-50%, -100%)`;
    promptEl.classList.add('show');
  } else promptEl.classList.remove('show');
  if (catBubble.classList.contains('show')) { const [bx, by] = toScreen(cat3.position.x, cat3.position.y + 0.95, cat3.position.z); catBubble.style.transform = `translate(${bx.toFixed(1)}px, ${by.toFixed(1)}px) translate(-50%, -100%)`; }
}
requestAnimationFrame(tick);

// clock on the computer screen (desk view)
const osClock = $('osClock');
const tickClock = () => { const d = new Date(); osClock.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); };
tickClock(); setInterval(tickClock, 20000);
// click the dimmed station on the side to slide over to it
document.querySelectorAll('.station').forEach((s, k) => s.addEventListener('click', e => {
  if (k !== station) { e.preventDefault(); e.stopPropagation(); setStation(k); click(1.1); }
}, true));
