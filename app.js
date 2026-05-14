// ============================================================================
// Seattle Seasons — interactive field guide
// ============================================================================

// ---------- Season data --------------------------------------------------

const SEASONS = [
  {
    id: 'dark-wet',
    name: 'The Dark Wet',
    subtitle: 'The OG',
    body: "It's not wet. It's just Seattle.",
    footnote: '',
    expect: 'Rain, gray skies, and deep thoughts.',
    weekStart: 0, weekEnd: 7,
    a: 'oklch(28% 0.04 250)', b: 'oklch(42% 0.06 245)',
    ink: 'oklch(96% 0.014 85)',
    mood: 'dark', particles: 'rain-heavy', audio: 'rain-heavy',
    segColor: 'oklch(35% 0.05 250)'
  },
  {
    id: 'paralyzing-snow',
    name: 'Paralyzing Snow',
    subtitle: '(1/4 inch)',
    body: 'Tiny flakes. Major impact. City shuts down. Embrace it.',
    footnote: '',
    expect: 'Panic, abandoned hatchbacks, and joy.',
    weekStart: 7, weekEnd: 9,
    a: 'oklch(94% 0.015 230)', b: 'oklch(78% 0.04 235)',
    ink: 'oklch(24% 0.045 245)',
    mood: 'bright', particles: 'snow', audio: 'snow',
    segColor: 'oklch(86% 0.03 230)'
  },
  {
    id: 'brightening-wet',
    name: 'Brightening Wet',
    subtitle: 'Daylight increases',
    body: 'Still wet, but now with hope.',
    footnote: '',
    expect: 'Rain, but make it optimistic.',
    weekStart: 9, weekEnd: 13,
    a: 'oklch(82% 0.03 230)', b: 'oklch(64% 0.06 220)',
    ink: 'oklch(22% 0.04 240)',
    mood: 'neutral', particles: 'rain-light', audio: 'rain-light',
    segColor: 'oklch(74% 0.04 225)'
  },
  {
    id: 'suncadia-break',
    name: 'Suncadia Break',
    subtitle: 'Mythical · brief',
    body: 'Beautiful. Fleeting. Do everything. All at once.',
    footnote: '*Not a typo.',
    expect: 'Crowds, traffic, and regret for not leaving sooner.',
    weekStart: 13, weekEnd: 14,
    a: 'oklch(82% 0.10 80)', b: 'oklch(60% 0.10 65)',
    ink: 'oklch(26% 0.07 55)',
    mood: 'bright', particles: 'sun-rays', audio: 'sun-rays',
    segColor: 'oklch(74% 0.10 75)'
  },
  {
    id: 'molding-wet',
    name: 'Molding Wet',
    subtitle: 'Persistent · dank',
    body: "Everything's growing, including things you didn't ask for.",
    footnote: '',
    expect: 'Moss, mushrooms, and mystery smells.',
    weekStart: 14, weekEnd: 18,
    a: 'oklch(56% 0.05 145)', b: 'oklch(36% 0.06 150)',
    ink: 'oklch(94% 0.02 100)',
    mood: 'dark', particles: ['fog', 'mold-patch', 'mold-spore'], audio: 'fog',
    segColor: 'oklch(48% 0.06 148)'
  },
  {
    id: 'flowering-wet',
    name: 'Flowering Wet',
    subtitle: 'Nature shows off',
    body: 'You smiled. You planted things. Everything is in bloom.',
    footnote: '',
    expect: 'Blooms, allergies, the audacity of pollen.',
    weekStart: 18, weekEnd: 22,
    a: 'oklch(80% 0.07 355)', b: 'oklch(56% 0.09 355)',
    ink: 'oklch(22% 0.06 355)',
    mood: 'neutral', particles: ['petal', 'pollen'], audio: 'pollen',
    segColor: 'oklch(72% 0.08 355)'
  },
  {
    id: 'junuary',
    name: 'Junuary',
    subtitle: 'Sprinkled with disappointment',
    body: 'Cold. Gray. June, but cosplaying as January.',
    footnote: 'Are we serious?',
    expect: 'Confusion, layers, and a somber gloom.',
    weekStart: 22, weekEnd: 25,
    a: 'oklch(70% 0.012 248)', b: 'oklch(52% 0.018 245)',
    ink: 'oklch(24% 0.035 245)',
    mood: 'neutral', particles: 'fog', audio: 'silence',
    segColor: 'oklch(62% 0.012 246)'
  },
  {
    id: 'glorious-sun',
    name: 'Glorious Sun',
    subtitle: 'Pure · golden · suspicious',
    body: "Check the forecast. It won't last.",
    footnote: '',
    expect: 'Vitamin D, crowds, and mild sunburn.',
    weekStart: 25, weekEnd: 29,
    a: 'oklch(92% 0.10 88)', b: 'oklch(72% 0.14 78)',
    ink: 'oklch(26% 0.09 60)',
    mood: 'bright', particles: 'sun-rays', audio: 'sun-rays',
    segColor: 'oklch(84% 0.12 82)'
  },
  {
    id: 'oppressive-sun',
    name: 'Oppressive Sun',
    subtitle: 'Too bright. Too hot.',
    body: "We're not built for this.",
    footnote: '',
    expect: 'Complaints, AC envy, and melted patience.',
    weekStart: 29, weekEnd: 32,
    a: 'oklch(86% 0.11 82)', b: 'oklch(62% 0.13 58)',
    ink: 'oklch(26% 0.10 50)',
    mood: 'bright', particles: 'sun-rays', audio: 'sun-rays',
    segColor: 'oklch(76% 0.13 70)'
  },
  {
    id: 'smoke',
    name: 'Smoke',
    subtitle: 'Thanks, forest fires',
    body: 'Enjoy the orange skies.',
    footnote: '',
    expect: 'Air filters, cancellations, and indoor everything.',
    weekStart: 32, weekEnd: 36,
    a: 'oklch(58% 0.16 50)', b: 'oklch(42% 0.14 38)',
    ink: 'oklch(94% 0.02 60)',
    mood: 'dark', particles: 'smoke', audio: 'smoke',
    segColor: 'oklch(50% 0.16 45)'
  },
  {
    id: 'welcome-drizzle',
    name: 'Welcome Drizzle',
    subtitle: 'Gentle · polite · Canadian',
    body: 'A soft return to normal.',
    footnote: '',
    expect: 'Light rain, deep sighs, and high acceptance.',
    weekStart: 36, weekEnd: 39,
    a: 'oklch(72% 0.05 215)', b: 'oklch(52% 0.07 220)',
    ink: 'oklch(22% 0.04 240)',
    mood: 'neutral', particles: 'rain-light', audio: 'rain-light',
    segColor: 'oklch(62% 0.06 218)'
  },
  {
    id: 'spiders',
    name: 'Spiders',
    subtitle: "They're not guests",
    body: 'They live here now. Cobwebs in every doorway.',
    footnote: '',
    expect: 'Webs, jump scares, and dramatic exits.',
    weekStart: 39, weekEnd: 42,
    a: 'oklch(74% 0.08 80)', b: 'oklch(50% 0.07 62)',
    ink: 'oklch(22% 0.05 65)',
    mood: 'neutral', particles: ['webs', 'spider'], audio: 'webs',
    segColor: 'oklch(64% 0.09 72)'
  },
  {
    id: 'convergence-zones',
    name: 'Convergence Zones',
    subtitle: 'Where weather systems collide',
    body: 'Unpredictable. Inevitable. Sunny here. Storming a mile away.',
    footnote: '',
    expect: 'Chaos, micro-climates, and weird traffic.',
    weekStart: 42, weekEnd: 45,
    a: 'oklch(35% 0.06 245)', b: 'oklch(78% 0.10 85)',
    ink: 'oklch(96% 0.014 85)',
    mood: 'dark', particles: 'rain-heavy', audio: 'rain-heavy',
    segColor: 'oklch(55% 0.08 165)'
  },
  {
    id: 'dark-wet-2',
    name: 'The Dark Wet',
    subtitle: 'Returns',
    body: 'And so it begins again. You get it now.',
    footnote: '',
    expect: 'Peace, familiarity, and a warm hoodie.',
    weekStart: 45, weekEnd: 52,
    a: 'oklch(26% 0.04 250)', b: 'oklch(38% 0.06 245)',
    ink: 'oklch(96% 0.014 85)',
    mood: 'dark', particles: 'rain-heavy', audio: 'rain-heavy',
    segColor: 'oklch(30% 0.05 250)'
  }
];

const seasonByWeek = (w) => {
  const week = ((w % 52) + 52) % 52;
  for (const s of SEASONS) if (week >= s.weekStart && week < s.weekEnd) return s;
  return SEASONS[0];
};

const seasonById = (id) => SEASONS.find(s => s.id === id);

function currentWeekOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = (now - start) / 86400000;
  return Math.floor(diff / 7) % 52;
}

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- DOM refs ------------------------------------------------------

const $ = (id) => document.getElementById(id);
const body = document.body;
const canvas = $('scene');
const ctx = canvas.getContext('2d');
const handle = $('scrubber-handle');
const track = $('scrubber-track');
const ticks = $('scrubber-ticks');
const segments = $('scrubber-segments');
const flag = $('scrubber-flag');
const elTitle = $('season-title');
const elSubtitle = $('season-subtitle');
const elBody = $('season-body');
const elFootnote = $('season-footnote');
const elStampText = $('stamp-text');
const elContent = $('content');
const elRightNowSeason = $('right-now-season');
const elRightNowWeek = $('right-now-week');
const audioBtn = $('audio-toggle');
const advisoryBtn = $('advisory-btn');
const shareBtn = $('share-btn');
const todayMarker = $('scrubber-today');

// ---------- Render scrubber decorations -----------------------------------

function buildScrubber() {
  const tickFrag = document.createDocumentFragment();
  for (let i = 0; i < 52; i++) {
    const t = document.createElement('span');
    if (i % 4 === 0) t.classList.add('major');
    tickFrag.appendChild(t);
  }
  ticks.appendChild(tickFrag);

  const segFrag = document.createDocumentFragment();
  for (const s of SEASONS) {
    const seg = document.createElement('div');
    seg.className = 'scrubber__seg';
    seg.dataset.id = s.id;
    seg.style.left = `${(s.weekStart / 52) * 100}%`;
    seg.style.width = `${((s.weekEnd - s.weekStart) / 52) * 100}%`;
    seg.style.setProperty('--seg-color', s.segColor);
    segFrag.appendChild(seg);
  }
  segments.appendChild(segFrag);
}
buildScrubber();

// ---------- Audio engine (Web Audio synthesis) ----------------------------

class Ambience {
  constructor() {
    this.on = false;
    this.ctx = null;
    this.noise = null;
    this.filter = null;
    this.noiseGain = null;
    this.master = null;
    this.lfo = null;
    this.lfoGain = null;
    this.mode = 'silence';
  }
  _build() {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    this.ctx = ac;

    // 4 seconds of white noise, looped
    const buf = ac.createBuffer(1, ac.sampleRate * 4, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
    const src = ac.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    this.noise = src;

    this.filter = ac.createBiquadFilter();
    this.filter.type = 'bandpass';
    this.filter.frequency.value = 1500;
    this.filter.Q.value = 1;

    this.noiseGain = ac.createGain();
    this.noiseGain.gain.value = 0;

    this.master = ac.createGain();
    this.master.gain.value = 0;

    // LFO for wind-style cutoff modulation
    this.lfo = ac.createOscillator();
    this.lfo.frequency.value = 0.08;
    this.lfoGain = ac.createGain();
    this.lfoGain.gain.value = 0;
    this.lfo.connect(this.lfoGain).connect(this.filter.frequency);

    src.connect(this.filter).connect(this.noiseGain).connect(this.master).connect(ac.destination);

    src.start();
    this.lfo.start();
  }
  async toggle() {
    if (!this.ctx) this._build();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.on = !this.on;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.linearRampToValueAtTime(this.on ? 1 : 0, t + 0.5);
    if (this.on) this.setMode(this.mode);
    return this.on;
  }
  setMode(mode) {
    this.mode = mode;
    if (!this.ctx) return;
    const presets = {
      'rain-heavy': { type: 'bandpass', freq: 1800, q: 1.2, gain: 0.18, lfo: 0 },
      'rain-light': { type: 'lowpass',  freq: 1200, q: 0.8, gain: 0.10, lfo: 0 },
      'snow':       { type: 'highpass', freq: 6000, q: 0.4, gain: 0.04, lfo: 0 },
      'smoke':      { type: 'lowpass',  freq: 600,  q: 0.4, gain: 0.14, lfo: 320 },
      'sun-rays':   { type: 'lowpass',  freq: 240,  q: 0.5, gain: 0.06, lfo: 0 },
      'fog':        { type: 'lowpass',  freq: 420,  q: 0.4, gain: 0.07, lfo: 90 },
      'webs':       { type: 'highpass', freq: 4800, q: 0.4, gain: 0.03, lfo: 0 },
      'pollen':     { type: 'bandpass', freq: 1100, q: 0.6, gain: 0.05, lfo: 0 },
      'silence':    { type: 'lowpass',  freq: 200,  q: 0.4, gain: 0.0,  lfo: 0 }
    };
    const p = presets[mode] || presets.silence;
    const t = this.ctx.currentTime;
    this.filter.type = p.type;
    this.filter.frequency.cancelScheduledValues(t);
    this.filter.frequency.linearRampToValueAtTime(p.freq, t + 1.2);
    this.filter.Q.cancelScheduledValues(t);
    this.filter.Q.linearRampToValueAtTime(p.q, t + 1.2);
    this.lfoGain.gain.cancelScheduledValues(t);
    this.lfoGain.gain.linearRampToValueAtTime(p.lfo, t + 1.2);
    this.noiseGain.gain.cancelScheduledValues(t);
    this.noiseGain.gain.linearRampToValueAtTime(p.gain, t + 1.2);
  }
}
const audio = new Ambience();

// ---------- Particle engine -----------------------------------------------

let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = Math.floor(W * DPR);
  canvas.height = Math.floor(H * DPR);
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
window.addEventListener('resize', resize, { passive: true });
resize();

class Particles {
  constructor() {
    this.modes = {};
    this.target = { 'silence': 1 };
    this.current = { 'silence': 1 };
    // Seed pools per mode (capped, reused)
    this.pools = {
      'rain-heavy': makePool(180, mkRain),
      'rain-light': makePool(70, mkRain),
      'snow': makePool(110, mkSnow),
      'smoke': makePool(36, mkSmoke),
      'sun-rays': makePool(7, mkSunRay),
      'fog': makePool(8, mkFog),
      'webs': makePool(5, mkWeb),
      'pollen': makePool(80, mkPollen),
      'mold-patch': makePool(4, mkMoldPatch),
      'mold-spore': makePool(70, mkMoldSpore),
      'petal': makePool(12, mkPetal),
      'spider': makePool(2, mkSpider),
      'silence': []
    };
  }
  setMode(modes) {
    if (typeof modes === 'string') modes = [modes];
    this.target = {};
    for (const m of modes) this.target[m] = 1;
    // Other modes will fade to 0
  }
  step(dt) {
    // Crossfade weights
    const allKeys = new Set([...Object.keys(this.current), ...Object.keys(this.target)]);
    for (const k of allKeys) {
      const t = this.target[k] || 0;
      const c = this.current[k] || 0;
      const delta = (t - c) * Math.min(1, dt / 800);
      const next = c + delta;
      if (next < 0.001 && t === 0) delete this.current[k];
      else this.current[k] = next;
    }

    if (prefersReducedMotion) return;

    for (const [mode, weight] of Object.entries(this.current)) {
      if (weight <= 0.001) continue;
      const pool = this.pools[mode];
      for (const p of pool) p.step(dt, weight);
    }
  }
  render() {
    ctx.clearRect(0, 0, W, H);
    // Render back-to-front: ambient fills, scenery, then drifters
    const order = ['fog', 'sun-rays', 'mold-patch', 'smoke', 'webs', 'spider',
                   'mold-spore', 'pollen', 'petal', 'snow', 'rain-light', 'rain-heavy'];
    for (const mode of order) {
      const w = this.current[mode] || 0;
      if (w <= 0.001) continue;
      const pool = this.pools[mode];
      ctx.save();
      ctx.globalAlpha = w;
      for (const p of pool) p.render(ctx, w);
      ctx.restore();
    }
  }
}

function makePool(n, ctor) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(ctor(i, n));
  return out;
}

// --- Particle factories ---
function mkRain(i, n) {
  return {
    x: Math.random() * 1.2 - 0.1,
    y: Math.random() * 1.2 - 0.1,
    z: 0.4 + Math.random() * 0.6,
    step(dt, weight) {
      const sp = 0.0011 * dt * (0.5 + this.z);
      this.y += sp;
      this.x += sp * 0.18; // slight wind
      if (this.y > 1.05) { this.y = -0.05; this.x = Math.random() * 1.2 - 0.1; }
    },
    render(ctx, w) {
      const x = this.x * W;
      const y = this.y * H;
      const len = 14 + this.z * 18;
      ctx.strokeStyle = `rgba(220,235,245,${0.18 + this.z * 0.28})`;
      ctx.lineWidth = 0.8 + this.z * 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - len * 0.18, y + len);
      ctx.stroke();
    }
  };
}

function mkSnow(i, n) {
  return {
    x: Math.random(),
    y: Math.random() * 1.2 - 0.2,
    z: 0.3 + Math.random() * 0.7,
    drift: Math.random() * Math.PI * 2,
    step(dt, w) {
      this.y += 0.00018 * dt * (0.4 + this.z);
      this.drift += 0.001 * dt;
      this.x += Math.sin(this.drift) * 0.0005 * dt * 0.5;
      if (this.y > 1.05) { this.y = -0.05; this.x = Math.random(); }
    },
    render(ctx, w) {
      const x = (this.x % 1.0) * W;
      const y = this.y * H;
      const r = 1.2 + this.z * 2.6;
      ctx.fillStyle = `rgba(252,255,255,${0.55 + this.z * 0.35})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

function mkSmoke(i, n) {
  return {
    x: Math.random(),
    y: 0.4 + Math.random() * 0.8,
    z: 0.3 + Math.random() * 0.7,
    r: 80 + Math.random() * 120,
    drift: Math.random() * Math.PI * 2,
    step(dt, w) {
      this.y -= 0.00006 * dt * this.z;
      this.drift += 0.0006 * dt;
      this.x += Math.sin(this.drift) * 0.00012 * dt;
      if (this.y < -0.2) { this.y = 1.05; this.x = Math.random(); }
    },
    render(ctx, w) {
      const x = this.x * W;
      const y = this.y * H;
      const r = this.r * (0.7 + this.z * 0.6);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `rgba(255,140,80,${0.12 + this.z * 0.10})`);
      grad.addColorStop(0.6, `rgba(180,80,40,${0.04})`);
      grad.addColorStop(1, 'rgba(80,40,20,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

function mkSunRay(i, n) {
  const angle = -0.4 + (i / n) * 0.8;
  return {
    angle,
    width: 0.06 + Math.random() * 0.08,
    intensity: 0.5 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    step(dt) { this.phase += 0.0005 * dt; },
    render(ctx, w) {
      const cx = W * (0.2 + this.angle * 0.4);
      const cy = -H * 0.2;
      const len = Math.hypot(W, H) * 1.2;
      const aw = this.width * W * (0.85 + 0.15 * Math.sin(this.phase));
      const grad = ctx.createLinearGradient(cx, cy, cx + this.angle * len, cy + len);
      grad.addColorStop(0, `rgba(255,240,200,${0.22 * this.intensity})`);
      grad.addColorStop(1, 'rgba(255,240,200,0)');
      ctx.fillStyle = grad;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(this.angle);
      ctx.fillRect(-aw * 0.5, 0, aw, len);
      ctx.restore();
    }
  };
}

function mkFog(i, n) {
  return {
    x: Math.random(),
    y: 0.3 + Math.random() * 0.6,
    r: 200 + Math.random() * 220,
    drift: Math.random() * Math.PI * 2,
    step(dt) { this.drift += 0.00025 * dt; this.x += Math.sin(this.drift) * 0.00008 * dt; },
    render(ctx, w) {
      const x = (this.x % 1.2) * W;
      const y = this.y * H;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, this.r);
      grad.addColorStop(0, `rgba(220,230,225,0.10)`);
      grad.addColorStop(1, 'rgba(220,230,225,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

function mkWeb(i, n) {
  // Cobwebs anchored to viewport corners/edges — where webs actually live
  const anchors = [
    { cx: 0.0,  cy: 0.0,  aStart: 0,                aEnd: Math.PI * 0.5,  size: 110 },
    { cx: 1.0,  cy: 0.0,  aStart: Math.PI * 0.5,    aEnd: Math.PI,        size: 130 },
    { cx: 0.0,  cy: 0.62, aStart: -Math.PI * 0.28,  aEnd: Math.PI * 0.28, size: 80  },
    { cx: 1.0,  cy: 0.55, aStart: Math.PI * 0.72,   aEnd: Math.PI * 1.28, size: 90  },
    { cx: 0.0,  cy: 1.0,  aStart: -Math.PI * 0.5,   aEnd: 0,              size: 100 }
  ];
  const p = anchors[i % anchors.length];
  return {
    cx: p.cx, cy: p.cy, aStart: p.aStart, aEnd: p.aEnd, size: p.size,
    drift: Math.random() * Math.PI * 2,
    step(dt) { this.drift += 0.0004 * dt; },
    render(ctx, w) {
      const x = this.cx * W;
      const y = this.cy * H;
      const breathe = 1 + Math.sin(this.drift) * 0.015;
      const size = this.size * breathe;
      const spread = this.aEnd - this.aStart;

      // Radial threads from anchor
      ctx.strokeStyle = 'rgba(255,255,245,0.28)';
      ctx.lineWidth = 0.55;
      const radials = 6;
      for (let k = 0; k <= radials; k++) {
        const a = this.aStart + spread * (k / radials);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(a) * size, y + Math.sin(a) * size);
        ctx.stroke();
      }
      // Concentric capture threads
      ctx.strokeStyle = 'rgba(255,255,245,0.18)';
      ctx.lineWidth = 0.5;
      for (let r = 1; r <= 4; r++) {
        const rad = (size / 4) * r;
        ctx.beginPath();
        ctx.arc(x, y, rad, this.aStart, this.aEnd);
        ctx.stroke();
      }
    }
  };
}

function mkPollen(i, n) {
  return {
    x: Math.random(),
    y: Math.random(),
    z: 0.3 + Math.random() * 0.7,
    drift: Math.random() * Math.PI * 2,
    step(dt) {
      this.drift += 0.001 * dt;
      this.y -= 0.00006 * dt * this.z;
      this.x += Math.sin(this.drift) * 0.0006 * dt * 0.4;
      if (this.y < -0.05) { this.y = 1.05; this.x = Math.random(); }
    },
    render(ctx, w) {
      const x = (this.x % 1.0) * W;
      const y = this.y * H;
      const r = 0.8 + this.z * 1.6;
      ctx.fillStyle = `rgba(255,225,160,${0.55 * this.z})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

function mkMoldPatch(i, n) {
  // Anchored to one of four corners. Slow organic pulse.
  const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const [cx, cy] = corners[i % 4];
  return {
    cx, cy,
    baseR: 110 + Math.random() * 90,
    phase: Math.random() * Math.PI * 2,
    seed: Math.random() * 1000,
    step(dt) { this.phase += 0.00025 * dt; },
    render(ctx, w) {
      const x = this.cx * W;
      const y = this.cy * H;
      const pulse = 0.85 + 0.15 * Math.sin(this.phase);
      // Layered radial blobs offset to look organic, not perfectly circular
      for (let k = 0; k < 3; k++) {
        const r = this.baseR * pulse * (0.7 + k * 0.42);
        const ox = Math.sin(this.seed + k * 1.3 + this.phase * 0.5) * 28;
        const oy = Math.cos(this.seed + k * 0.7 + this.phase * 0.3) * 28;
        const g = ctx.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
        g.addColorStop(0,   `rgba(35,55,28,${0.22 - k * 0.05})`);
        g.addColorStop(0.55, `rgba(60,82,42,${0.06})`);
        g.addColorStop(1,   'rgba(60,82,42,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      // Dark specks scattered through the patch
      ctx.fillStyle = 'rgba(25,38,20,0.5)';
      for (let s = 0; s < 11; s++) {
        const a = (s / 11) * Math.PI * 2 + this.seed;
        const dist = 24 + (this.baseR * 0.4) * Math.abs(Math.sin(this.seed * 0.3 + s));
        const px = x + Math.cos(a) * dist;
        const py = y + Math.sin(a) * dist;
        ctx.beginPath();
        ctx.arc(px, py, 0.9 + Math.abs(Math.sin(this.phase + s)) * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };
}

function mkMoldSpore(i, n) {
  return {
    x: Math.random(),
    y: Math.random(),
    z: 0.3 + Math.random() * 0.6,
    drift: Math.random() * Math.PI * 2,
    step(dt) {
      this.drift += 0.0008 * dt;
      this.x += Math.sin(this.drift) * 0.00035 * dt * 0.4;
      this.y += Math.cos(this.drift * 0.7) * 0.00025 * dt * 0.3;
      this.y -= 0.000025 * dt; // very slow rise
      if (this.y < -0.05) { this.y = 1.05; this.x = Math.random(); }
      if (this.x < -0.05) this.x = 1.05;
      if (this.x > 1.05) this.x = -0.05;
    },
    render(ctx, w) {
      const x = this.x * W;
      const y = this.y * H;
      const r = 0.7 + this.z * 1.4;
      ctx.fillStyle = `rgba(55,75,38,${0.42 * this.z})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

function mkPetal(i, n) {
  // Cherry-blossom petals — broad with a notched tip, soft pinks
  const palette = [
    { fill: 'rgba(255,214,224,0.85)', edge: 'rgba(220,140,165,0.35)' },
    { fill: 'rgba(252,228,232,0.88)', edge: 'rgba(210,150,175,0.30)' },
    { fill: 'rgba(248,194,210,0.82)', edge: 'rgba(200,120,150,0.35)' },
    { fill: 'rgba(255,232,236,0.86)', edge: 'rgba(220,160,180,0.28)' }
  ];
  return {
    x: Math.random(),
    y: Math.random() * 1.4 - 0.4,
    z: 0.55 + Math.random() * 0.45,
    drift: Math.random() * Math.PI * 2,
    rotBase: Math.random() * Math.PI * 2,
    wobbleAmt: 0.35 + Math.random() * 0.5,
    color: palette[i % palette.length],
    step(dt) {
      this.drift += 0.00055 * dt;
      // Slow, languid descent
      this.y += 0.00006 * dt * (0.5 + this.z * 0.6);
      // Gentle horizontal sway
      this.x += Math.sin(this.drift) * 0.0004 * dt;
      if (this.y > 1.15) { this.y = -0.2; this.x = Math.random(); }
    },
    render(ctx, w) {
      const x = (((this.x % 1.2) + 1.2) % 1.2) * W - W * 0.1;
      const y = this.y * H;
      const s = 7 + this.z * 9;
      // Wobble rotation — never spins, just rocks back and forth
      const rot = this.rotBase + Math.sin(this.drift * 1.3) * this.wobbleAmt;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);

      // Petal: broad shape with a notched tip (cherry blossom)
      ctx.fillStyle = this.color.fill;
      ctx.beginPath();
      ctx.moveTo(0, -s);                                             // stem base, pointed
      ctx.bezierCurveTo(s * 0.85, -s * 0.35,
                        s * 0.65,  s * 0.75,
                        s * 0.18,  s * 0.92);                        // right side flares out, down to tip
      ctx.quadraticCurveTo(0, s * 0.55, -s * 0.18, s * 0.92);        // notch / cleft at tip
      ctx.bezierCurveTo(-s * 0.65, s * 0.75,
                        -s * 0.85, -s * 0.35,
                        0, -s);                                      // back to stem
      ctx.fill();

      // Soft edge tint along the cleft side for depth
      ctx.strokeStyle = this.color.edge;
      ctx.lineWidth = 0.55;
      ctx.beginPath();
      ctx.moveTo(s * 0.18, s * 0.92);
      ctx.quadraticCurveTo(0, s * 0.55, -s * 0.18, s * 0.92);
      ctx.stroke();

      ctx.restore();
    }
  };
}

function mkSpider(i, n) {
  return {
    x: 0.12 + Math.random() * 0.76,
    targetY: 0.16 + Math.random() * 0.28,
    y: 0,
    state: 'waiting',
    timer: 1800 + i * 3200 + Math.random() * 2500,
    sway: Math.random() * Math.PI * 2,
    step(dt) {
      this.sway += 0.0012 * dt;
      this.timer -= dt;
      if (this.state === 'waiting') {
        if (this.timer <= 0) {
          this.x = 0.1 + Math.random() * 0.8;
          this.targetY = 0.18 + Math.random() * 0.32;
          this.state = 'descending';
        }
      } else if (this.state === 'descending') {
        this.y += 0.00012 * dt;
        if (this.y >= this.targetY) {
          this.y = this.targetY;
          this.state = 'pausing';
          this.timer = 1400 + Math.random() * 2800;
        }
      } else if (this.state === 'pausing') {
        if (this.timer <= 0) this.state = 'retreating';
      } else if (this.state === 'retreating') {
        this.y -= 0.00018 * dt;
        if (this.y <= 0) {
          this.y = 0;
          this.state = 'waiting';
          this.timer = 5000 + Math.random() * 8000;
        }
      }
    },
    render(ctx, w) {
      if (this.state === 'waiting') return;
      const sway = Math.sin(this.sway) * 5;
      const x = this.x * W + sway;
      const y = this.y * H;
      // Silk thread
      ctx.strokeStyle = 'rgba(255,255,250,0.42)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(this.x * W, 0);
      ctx.lineTo(x, y);
      ctx.stroke();
      // Body
      ctx.fillStyle = 'rgba(20,16,12,0.95)';
      ctx.beginPath();
      ctx.ellipse(x, y + 2.5, 4.2, 3.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y - 0.8, 2.6, 0, Math.PI * 2);
      ctx.fill();
      // Legs — 8, in two clusters per side
      ctx.strokeStyle = 'rgba(20,16,12,0.92)';
      ctx.lineWidth = 0.75;
      const legs = [
        [-1, -0.5, -8, -3],
        [-1, -0.2, -9, 1],
        [-1,  0.2, -8, 4],
        [-1,  0.5, -6, 6],
        [ 1, -0.5,  8, -3],
        [ 1, -0.2,  9, 1],
        [ 1,  0.2,  8, 4],
        [ 1,  0.5,  6, 6]
      ];
      for (const [sx, sy, ex, ey] of legs) {
        const midX = x + sx * 1.5 + (ex - sx * 1.5) * 0.5;
        const midY = y + sy * 1.5 + (ey - sy * 1.5) * 0.5 - 1.5; // bent knee
        ctx.beginPath();
        ctx.moveTo(x + sx * 1.5, y + sy * 1.5);
        ctx.quadraticCurveTo(midX, midY, x + ex, y + ey);
        ctx.stroke();
      }
    }
  };
}

const particles = new Particles();

// Animation loop
let lastT = performance.now();
function tick(t) {
  const dt = Math.min(50, t - lastT);
  lastT = t;
  particles.step(dt);
  particles.render();
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

// ---------- Scrubber controller -------------------------------------------

let position = 0;       // float in [0, 52)
let displayPos = 0;     // smoothed for handle motion
let activeId = null;
let interacted = false;
let lastInteractionAt = performance.now();

function setPosition(w, opts = {}) {
  position = ((w % 52) + 52) % 52;
  const s = seasonByWeek(position);
  updateHandle();
  if (s.id !== activeId) {
    activeId = s.id;
    applySeason(s, opts);
  }
  if (opts.fromUser) markInteracted();
}

function updateHandle() {
  const pct = (displayPos / 52) * 100;
  handle.style.left = pct + '%';
  const s = seasonByWeek(displayPos);
  handle.setAttribute('aria-valuenow', Math.round(displayPos).toString());
  handle.setAttribute('aria-valuetext', `${s.name}, week ${Math.round(displayPos) + 1}`);
  if (flag) flag.textContent = s.name;
  // Active segment
  for (const seg of segments.children) {
    seg.classList.toggle('active', seg.dataset.id === s.id);
  }
}

// Smooth handle motion (lerp)
function smoothLoop() {
  displayPos += (position - displayPos) * 0.18;
  // Wrap-around shortest path
  if (Math.abs(position - displayPos) > 26) {
    if (position > displayPos) displayPos += 52;
    else displayPos -= 52;
    displayPos = ((displayPos % 52) + 52) % 52;
  }
  updateHandle();
  requestAnimationFrame(smoothLoop);
}
smoothLoop();

function markInteracted() {
  if (!interacted) {
    interacted = true;
    body.dataset.interacted = 'true';
  }
  lastInteractionAt = performance.now();
}

// ---------- Season application -------------------------------------------

function applySeason(s, opts) {
  // Color drench
  document.documentElement.style.setProperty('--season-a', s.a);
  document.documentElement.style.setProperty('--season-b', s.b);
  document.documentElement.style.setProperty('--season-ink', s.ink);
  body.dataset.season = s.id;
  body.dataset.mood = s.mood;

  // Content swap
  elContent.classList.add('is-swapping');
  setTimeout(() => {
    elSubtitle.textContent = s.subtitle;
    elTitle.textContent = s.name;
    elBody.textContent = s.body;
    elFootnote.textContent = s.footnote;
    elStampText.textContent = s.expect;
    requestAnimationFrame(() => elContent.classList.remove('is-swapping'));
  }, 280);

  // Particles
  particles.setMode(s.particles);

  // Audio
  audio.setMode(s.audio);

  // URL hash (replace, not push, to avoid history spam)
  if (opts.fromUser && location.hash !== `#${s.id}`) {
    history.replaceState(null, '', `#${s.id}`);
  }
}

// ---------- Pointer / wheel / keyboard / touch interactions ---------------

function trackPxToWeek(px) {
  const rect = track.getBoundingClientRect();
  const ratio = (px - rect.left) / rect.width;
  return Math.max(0, Math.min(51.999, ratio * 52));
}

let dragging = false;
function onPointerDown(e) {
  if (e.button !== undefined && e.button !== 0) return;
  dragging = true;
  body.classList.add('is-dragging');
  handle.setPointerCapture?.(e.pointerId);
  setPosition(trackPxToWeek(e.clientX), { fromUser: true });
  e.preventDefault();
}
function onPointerMove(e) {
  if (!dragging) return;
  setPosition(trackPxToWeek(e.clientX), { fromUser: true });
}
function onPointerUp() {
  if (!dragging) return;
  dragging = false;
  body.classList.remove('is-dragging');
  // Light magnetic snap to nearest season center
  const s = seasonByWeek(position);
  const center = (s.weekStart + s.weekEnd) / 2;
  const distance = Math.abs(position - center);
  const spanHalf = (s.weekEnd - s.weekStart) / 2;
  // Only snap if user landed within the inner 30% of a season
  if (distance < spanHalf * 0.25) {
    animateTo(center, 400);
  }
}
track.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointercancel', onPointerUp);

// Wheel-as-scrub (anywhere on page)
let wheelAccum = 0;
let wheelTimer = null;
window.addEventListener('wheel', (e) => {
  // Allow horizontal trackpad scroll; fall through to deltaY otherwise.
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (d === 0) return;
  wheelAccum += d * 0.012;
  if (Math.abs(wheelAccum) >= 0.4) {
    setPosition(position + wheelAccum, { fromUser: true });
    wheelAccum = 0;
  }
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(() => { wheelAccum = 0; }, 200);
  e.preventDefault();
}, { passive: false });

// Touch swipe on the canvas (not just the scrubber)
let touchStartX = null;
let touchStartPos = null;
canvas.parentElement.addEventListener('touchstart', (e) => {
  if (e.touches.length !== 1) return;
  touchStartX = e.touches[0].clientX;
  touchStartPos = position;
}, { passive: true });
window.addEventListener('touchmove', (e) => {
  if (touchStartX == null) return;
  const dx = e.touches[0].clientX - touchStartX;
  const weeks = -(dx / window.innerWidth) * 26; // full swipe = ~half year
  setPosition(touchStartPos + weeks, { fromUser: true });
}, { passive: true });
window.addEventListener('touchend', () => {
  touchStartX = null;
  onPointerUp();
});

// Keyboard
handle.addEventListener('keydown', (e) => {
  let handled = true;
  const stepToNextSeason = (dir) => {
    const idx = SEASONS.findIndex(s => s.id === activeId);
    const nextIdx = (idx + dir + SEASONS.length) % SEASONS.length;
    const next = SEASONS[nextIdx];
    const center = (next.weekStart + next.weekEnd) / 2;
    animateTo(center, 500, true);
  };
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowUp':   stepToNextSeason(1); break;
    case 'ArrowLeft':
    case 'ArrowDown': stepToNextSeason(-1); break;
    case 'Home': animateTo(0, 600, true); break;
    case 'End':  animateTo(51, 600, true); break;
    case 'PageUp':   setPosition(position + 4, { fromUser: true }); break;
    case 'PageDown': setPosition(position - 4, { fromUser: true }); break;
    default: handled = false;
  }
  if (handled) e.preventDefault();
});

function jumpToNow() {
  const w = currentWeekOfYear();
  const s = seasonByWeek(w);
  const center = (s.weekStart + s.weekEnd) / 2;
  animateTo(center, 700, true);
}

// Global keyboard
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'm' || e.key === 'M') { audioBtn.click(); }
  if (e.key === 'r' || e.key === 'R') { jumpToNow(); }
});

function animateTo(target, dur = 500, fromUser = false) {
  const start = position;
  const startT = performance.now();
  // Shortest path on the circular year
  let delta = target - start;
  if (delta > 26) delta -= 52;
  if (delta < -26) delta += 52;
  const animFn = (now) => {
    const t = Math.min(1, (now - startT) / dur);
    const eased = 1 - Math.pow(1 - t, 4); // ease-out-quart
    setPosition(start + delta * eased, { fromUser });
    if (t < 1) requestAnimationFrame(animFn);
  };
  requestAnimationFrame(animFn);
}

// ---------- Idle drift ----------------------------------------------------

setInterval(() => {
  if (!interacted) return;
  const idleMs = performance.now() - lastInteractionAt;
  if (idleMs < 8000) return;
  // Drift one week forward every couple seconds
  setPosition(position + 0.06);
}, 100);

// ---------- "Right now" detection -----------------------------------------

function updateRightNowStamp() {
  const w = currentWeekOfYear();
  const s = seasonByWeek(w);
  elRightNowSeason.textContent = s.name;
  elRightNowWeek.textContent = `WK ${String(w + 1).padStart(2, '0')} / 52`;
  // The persistent today marker on the scrubber tracks the same week
  todayMarker.style.left = `${(w / 52) * 100}%`;
}
updateRightNowStamp();
setInterval(updateRightNowStamp, 1000 * 60 * 60);

// ---------- Buttons -------------------------------------------------------

audioBtn.addEventListener('click', async () => {
  const on = await audio.toggle();
  audioBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  audioBtn.dataset.tip = on ? 'Sound on' : 'Sound off';
});

advisoryBtn.addEventListener('click', jumpToNow);

shareBtn.addEventListener('click', async () => {
  const s = seasonByWeek(position);
  const url = `${location.origin}${location.pathname}#${s.id}`;
  try {
    if (navigator.share) {
      await navigator.share({ title: 'Seattle Seasons', text: `${s.name} — ${s.expect}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      flashTip(shareBtn, 'Link copied');
    }
  } catch { /* user cancelled */ }
});

function flashTip(btn, msg) {
  const original = btn.dataset.tip;
  btn.dataset.tip = msg;
  btn.classList.add('is-flashing');
  setTimeout(() => {
    btn.dataset.tip = original;
    btn.classList.remove('is-flashing');
  }, 1400);
}

// ---------- Boot ----------------------------------------------------------

function boot() {
  // Start at hash → or today
  let startWeek;
  const hash = location.hash.replace('#', '');
  const matched = hash && seasonById(hash);
  if (matched) {
    startWeek = (matched.weekStart + matched.weekEnd) / 2;
  } else {
    startWeek = currentWeekOfYear();
  }
  // Snap immediately (no animation) so first paint is the right scene
  displayPos = startWeek;
  setPosition(startWeek);
  // Reveal sequence
  requestAnimationFrame(() => {
    body.dataset.loaded = 'true';
  });
}

window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#', '');
  const s = seasonById(id);
  if (s) {
    const center = (s.weekStart + s.weekEnd) / 2;
    animateTo(center, 700);
  }
});

// Wait for fonts (best effort) before booting, so the masthead doesn't FOIT-flash
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(boot).catch(boot);
  // Hard fallback if fonts hang
  setTimeout(boot, 1500);
} else {
  boot();
}
