/* =========================================================================
   SHIZU'S WORKSHOP — Outlast Trials Typewriter & Search Behavior
   ========================================================================= */

const CONFIG = {
  name: "Eduardo H. Chechin",
  tagline: "Computer Scientist & Part-time Inventor.",

  bio: "I like to be proud of the things I do. That's why I do them.",

  hobbies: [
    { label: "Handcrafts.", gif: "https://raw.githubusercontent.com/404edch/assets/main/WhatsApp%20Video%202026-08-30%20at%2019.13.44_1.gif" },
    { label: "Music! On spotify and instruments.", youtube: "V6V4vX_SE4I" },
    { label: "Pokemon Go!", gif: "https://placehold.co/64x64.gif?text=PkGo" },
    { label: "Ice-Skating.", gif: "https://placehold.co/64x64.gif?text=Skate" },
    { label: "PIU - Pump It Up.", gif: "https://placehold.co/64x64.gif?text=PIU" },
    { label: "Hosting - gamenights, volleyball, movies, cooking, etc...", gif: "https://placehold.co/64x64.gif?text=Host" }
  ],

  email: "edhchechin@gmail.com",

  contact: {
    title: "have a project in mind?",
    body: "Tell me what you're building, roughly what it needs, and any " +
      "dates I should know about. I read every ticket that comes " +
      "through :D."
  },

  socials: [
    { label: "GitHub", type: "github", url: "https://github.com/404edch" },
    { label: "LinkedIn", type: "linkedin", url: "https://www.linkedin.com/in/eduardochechin/" },
    { label: "Instagram", type: "instagram", url: "https://www.instagram.com/shzudev/" },
  ],

  projects: [
    {
      icon: "web",
      title: "Paper Trail",
      description: "A receipt-tracking web app that turns crumpled paper into tidy spending charts. Built with a focus on fast entry and a friendly onboarding flow.",
      link: "https://example.com/paper-trail"
    },
    {
      icon: "mobile",
      title: "Nightshade",
      description: "A moody little mobile game about tending a garden that only blooms after dark. Handled interaction design, animation, and the audio pass.",
      link: "https://example.com/nightshade"
    },
    {
      icon: "design",
      title: "Kiln",
      description: "Brand identity and packaging system for an independent ceramics studio — a warm, tactile mark meant to survive a lot of clay dust.",
      link: "https://example.com/kiln"
    },
    {
      icon: "code",
      title: "Loop Station",
      description: "An open-source CLI for scaffolding audio-reactive visuals. Focused on a friendly plugin API so contributors could add their own effects.",
      link: "https://example.com/loop-station"
    },
    {
      icon: "art",
      title: "Marigold",
      description: "A self-directed illustration series exploring color theory through a year of daily studies, later collected into a small printed zine.",
      link: "https://example.com/marigold"
    }
  ]
};

/* =========================================================================
   Procedural Web Audio Typewriter Sound Generator
   ========================================================================= */

let audioCtx = null;

function getAudioContext() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function playTypewriterSound(type = 'key') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'lever') {
      // High Cortisol Mechanical Casino Slot Arm Pull (Heavy sub-bass impact + 7 rapid intense ratchet teeth + metallic spring ring)

      // 1. Heavy Sub-Bass Impact (Visceral Punch)
      const subOsc = ctx.createOscillator();
      const subFilter = ctx.createBiquadFilter();
      const subGain = ctx.createGain();

      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(240, now);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.2);

      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(600, now);

      subGain.gain.setValueAtTime(0.35, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(ctx.destination);

      subOsc.start(now);
      subOsc.stop(now + 0.22);

      // 2. High-Cortisol Metallic Ratchet Teeth (7 rapid intense gear impacts)
      for (let i = 0; i < 7; i++) {
        const ratchetOsc = ctx.createOscillator();
        const ratchetGain = ctx.createGain();
        const t = now + 0.03 + i * 0.032;

        ratchetOsc.type = 'sawtooth';
        ratchetOsc.frequency.setValueAtTime(1400 - i * 150, t);
        ratchetOsc.frequency.exponentialRampToValueAtTime(220, t + 0.026);

        ratchetGain.gain.setValueAtTime(0.16, t);
        ratchetGain.gain.exponentialRampToValueAtTime(0.001, t + 0.026);

        ratchetOsc.connect(ratchetGain);
        ratchetGain.connect(ctx.destination);

        ratchetOsc.start(t);
        ratchetOsc.stop(t + 0.028);
      }

      // 3. Resonant Metallic Spring Ring (Tension Decay)
      const ringOsc = ctx.createOscillator();
      const ringGain = ctx.createGain();
      const ringFilter = ctx.createBiquadFilter();

      ringOsc.type = 'sine';
      ringOsc.frequency.setValueAtTime(880, now + 0.05);
      ringOsc.frequency.exponentialRampToValueAtTime(320, now + 0.25);

      ringFilter.type = 'bandpass';
      ringFilter.frequency.setValueAtTime(750, now + 0.05);

      ringGain.gain.setValueAtTime(0.09, now + 0.05);
      ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

      ringOsc.connect(ringFilter);
      ringFilter.connect(ringGain);
      ringGain.connect(ctx.destination);

      ringOsc.start(now + 0.05);
      ringOsc.stop(now + 0.26);
    } else if (type === 'print') {
      // Elegant vintage paper feed glide & analog mechanical roller
      const duration = 0.18;

      // 1. Soft paper friction glide (filtered noise)
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = (Math.random() * 2 - 1);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(1200, now);
      bandpass.Q.setValueAtTime(1.5, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + duration);

      // 2. Soft mechanical roller click
      const rollerOsc = ctx.createOscillator();
      const rollerGain = ctx.createGain();
      rollerOsc.type = 'triangle';
      rollerOsc.frequency.setValueAtTime(160, now);
      rollerOsc.frequency.exponentialRampToValueAtTime(50, now + 0.07);

      rollerGain.gain.setValueAtTime(0.09, now);
      rollerGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      rollerOsc.connect(rollerGain);
      rollerGain.connect(ctx.destination);
      rollerOsc.start(now);
      rollerOsc.stop(now + 0.07);
    } else if (type === 'key') {
      // Soft vintage typewriter key tap (warm tactile thud)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260 + Math.random() * 50, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.04);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, now);

      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    }
  } catch (e) {
    // Audio fallback
  }
}

/* =========================================================================
   Icons
   ========================================================================= */

const ICON_PATHS = {
  project: {
    web: '<rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="9.2" x2="21" y2="9.2"/><circle cx="6.2" cy="7.1" r="0.55" fill="currentColor" stroke="none"/><circle cx="8.4" cy="7.1" r="0.55" fill="currentColor" stroke="none"/>',
    mobile: '<rect x="7.5" y="2.5" width="9" height="19" rx="2"/><line x1="10.5" y1="18" x2="13.5" y2="18"/>',
    design: '<path d="M4 20l1-4.2L15.5 5.3a1.8 1.8 0 012.6 0l0.6.6a1.8 1.8 0 010 2.6L8.2 19l-4.2 1z"/><line x1="13.8" y1="7" x2="17" y2="10.2"/>',
    code: '<path d="M8.5 8L3.5 12l5 4"/><path d="M15.5 8l5 4-5 4"/>',
    art: '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="13.2" cy="8.7" r="1" fill="currentColor" stroke="none"/><circle cx="15.3" cy="12.6" r="1" fill="currentColor" stroke="none"/><circle cx="10.3" cy="14.5" r="1" fill="currentColor" stroke="none"/>',
    writing: '<path d="M4 20l0.9-3.8L15.6 5.5a1.6 1.6 0 012.3 0l0.6.6a1.6 1.6 0 010 2.3L7.8 19.1z"/><path d="M4 20l3.8-0.9L4.9 16.2z" fill="currentColor" stroke="none"/>',
    game: '<rect x="3" y="9" width="18" height="8" rx="4"/><line x1="7.5" y1="11.2" x2="7.5" y2="14.8"/><line x1="5.7" y1="13" x2="9.3" y2="13"/><circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none"/><circle cx="17.3" cy="14" r="0.8" fill="currentColor" stroke="none"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7l1.3-2.6h4.4L15.5 7"/><circle cx="12" cy="13.6" r="3.4"/>',
    misc: '<path d="M12 3.2l2.4 5 5.4.6-4 3.7 1 5.4L12 15.2l-4.8 2.7 1-5.4-4-3.7 5.4-.6z"/>'
  },
  social: {
    github: '<rect x="3.5" y="4" width="17" height="16" rx="2.5"/><path d="M7.5 9.5l2.8 2.5-2.8 2.5"/><line x1="12" y1="14.7" x2="16.5" y2="14.7"/>',
    linkedin: '<circle cx="8" cy="8" r="3"/><path d="M2.2 20c0-3.3 2.6-6 5.8-6s5.8 2.7 5.8 6"/><circle cx="18" cy="7" r="2.2"/><path d="M15.3 13.4c2.5.5 4.3 2.7 4.3 5.3"/>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="16.3" cy="7.7" r="0.7" fill="currentColor" stroke="none"/>',
    twitter: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
    website: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18"/>',
    email: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 6.5l8.5 6.8 8.5-6.8"/>',
    generic: '<path d="M9 15l6-6"/><path d="M8 12L5.7 14.3a3 3 0 004.2 4.2L12.1 16.3"/><path d="M15.9 12l2.3-2.3a3 3 0 00-4.2-4.2L11.8 7.7"/>'
  }
};

function icon(kind, key) {
  const d = ICON_PATHS[kind][key] || ICON_PATHS[kind][kind === 'project' ? 'misc' : 'generic'];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================================
   Ticket Icon & Custom PNG Logo Renderer
   ========================================================================= */

function renderTicketIcon(p) {
  const src = p.logo || p.image || p.icon;
  if (!src) return icon('project', 'web');

  if (/\.(png|jpg|jpeg|webp|svg|gif)($|\?)/i.test(src) || src.includes('/') || src.startsWith('data:image')) {
    return `<img class="ticket-png-logo" src="${escapeHTML(src)}" alt="${escapeHTML(p.title)} logo" loading="lazy">`;
  }

  return icon('project', src);
}

/* Synthesize a quick, crisp paper rip sound when card is clicked / stub detaches */
function playPaperTearSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;

    const duration = 0.12;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const progress = i / bufferSize;
      const noise = (Math.random() * 2 - 1);
      const envelope = Math.exp(-progress * 9);
      const spike = Math.random() > 0.8 ? 1.6 : 1.0;
      output[i] = noise * envelope * spike;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + duration);
    filter.Q.setValueAtTime(1.8, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    whiteNoise.start(now);

    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(450, now);
    snapOsc.frequency.exponentialRampToValueAtTime(90, now + 0.08);
    snapGain.gain.setValueAtTime(0.4, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    snapOsc.connect(snapGain);
    snapGain.connect(ctx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.08);
  } catch (e) {
    console.warn("Paper tear audio error:", e);
  }
}

/* Synthesize a tactile paper re-attach snap sound when stub closes */
function playPaperAttachSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.07);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  } catch (e) { }
}

/* =========================================================================
   Render Tickets (With Real-time Search & Upward Column Launch)
   ========================================================================= */

let hasBeenPrinted = false;

function renderTickets(query = '') {
  const wrap = document.getElementById('ticketsInner') || document.getElementById('tickets');
  const searchCount = document.getElementById('searchCount');
  const cleanQuery = query.trim().toLowerCase();

  const filtered = CONFIG.projects.filter(p => {
    return p.title.toLowerCase().includes(cleanQuery) ||
      p.description.toLowerCase().includes(cleanQuery);
  });

  if (searchCount) {
    searchCount.textContent = `${filtered.length} CARD(S) INDEXED`;
  }

  if (filtered.length === 0) {
    wrap.innerHTML = `
      <div class="no-tickets-box">
        <div class="no-tickets-title">[ CLASSIFIED NOTICE: NO MATCHES ]</div>
        <p>No dossier cards match the query "<strong>${escapeHTML(query)}</strong>".</p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #8C8070;">Try searching for "web", "game", "code", or clear the search input.</p>
      </div>`;
    return;
  }

  wrap.innerHTML = filtered.map((p, i) => {
    const origIndex = CONFIG.projects.indexOf(p);
    const num = String(origIndex + 1).padStart(3, '0');
    const panelId = `ticket-panel-${i}`;
    const btnId = `ticket-btn-${i}`;
    // Bottom-up animation delay: bottom ticket appears first (0s), moving UPWARDS to top ticket
    const reverseIndex = filtered.length - 1 - i;
    const delay = prefersReducedMotion ? '0s' : (reverseIndex * 0.12).toFixed(2) + 's';

    if (!prefersReducedMotion && hasBeenPrinted) {
      setTimeout(() => playTypewriterSound('print'), reverseIndex * 120);
    }

    return `
      <article class="ticket" style="--delay:${delay}">
        <!-- Separate Left Stub Entity with External Red Star -->
        <div class="ticket-stub-side" role="button" tabindex="0" title="Detach ticket stub">
          <span class="external-star-icon" aria-hidden="true">★</span>
          <span class="ticket-icon">${renderTicketIcon(p)}</span>
        </div>

        <!-- Right Main Ticket Section (Holds Title Button + Aligned Description Panel) -->
        <div class="ticket-main-section">
          <button class="ticket-body-button" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
            <span class="ticket-title">${escapeHTML(p.title)}</span>
            <span class="ticket-toggle" aria-hidden="true">+</span>
          </button>

          <div class="ticket-details-wrap">
            <div class="ticket-details-inner" id="${panelId}" role="region" aria-labelledby="${btnId}">
              <p>${escapeHTML(p.description)}</p>
              <a class="ticket-link" href="${p.link}" target="_blank" rel="noopener noreferrer">OPEN DOSSIER LINK ↗</a>
            </div>
          </div>
        </div>
      </article>`;
  }).join('');

  wrap.querySelectorAll('.ticket').forEach((ticket) => {
    const toggleTicket = () => {
      const isOpen = ticket.classList.contains('open');

      wrap.querySelectorAll('.ticket.open').forEach((t) => {
        if (t !== ticket) {
          t.classList.remove('open');
          const btn = t.querySelector('.ticket-body-button');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      const newState = !isOpen;
      ticket.classList.toggle('open', newState);
      const mainBtn = ticket.querySelector('.ticket-body-button');
      if (mainBtn) mainBtn.setAttribute('aria-expanded', String(newState));

      if (newState) {
        playPaperTearSound();
      } else {
        playPaperAttachSound();
      }
    };

    const stub = ticket.querySelector('.ticket-stub-side');
    const btn = ticket.querySelector('.ticket-body-button');
    if (stub) {
      stub.addEventListener('click', toggleTicket);
      stub.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTicket();
        }
      });
    }
    if (btn) btn.addEventListener('click', toggleTicket);
  });
}

/* =========================================================================
   Render About / Contact Section
   ========================================================================= */

function renderAbout() {
  document.getElementById('name').textContent = CONFIG.name + "";
  document.getElementById('tagline').textContent = CONFIG.tagline;
  document.getElementById('bio').textContent = CONFIG.bio;

  const hobbies = document.getElementById('hobbies');
  hobbies.innerHTML = CONFIG.hobbies.map((h) => {
    const media = h.youtube
      ? `<a class="hobby-video-placeholder" href="https://www.youtube.com/watch?v=${encodeURIComponent(h.youtube)}"
        target="_blank" rel="noopener noreferrer" aria-label="Watch ${escapeHTML(h.label)} video on YouTube">
        <img src="https://i.ytimg.com/vi/${escapeHTML(h.youtube)}/hqdefault.jpg"
          alt="" width="480" height="360" loading="eager" fetchpriority="high" decoding="async">
        <span class="play-badge">WATCH VIDEO ON YOUTUBE</span>
      </a>`
      : (h.gif
        ? `<img class="hobby-gif" src="${escapeHTML(h.gif)}" alt="${escapeHTML(h.label)}" loading="lazy" decoding="async">`
        : '');

    return `
    <li class="hobby-item">
      <span class="hobby-label">[ ${escapeHTML(h.label).toUpperCase()} ]</span>
      ${media}
    </li>`;
  }).join('');

  /* Layout: #hobbies is a single-column vertical list — one full-width
     row per hobby, gif thumbnail on the left, label on the right.
     See CSS block below. */

  const socials = document.getElementById('socials');
  socials.innerHTML = CONFIG.socials.map((s) => `
    <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
      ${icon('social', s.type)}
      <span>${escapeHTML(s.label).toUpperCase()}</span>
    </a>`).join('');

  document.getElementById('contactTitle').textContent = CONFIG.contact.title.toUpperCase();
  document.getElementById('contactBody').textContent = CONFIG.contact.body;

  const emailLink = document.getElementById('emailLink');
  const emailLabel = document.getElementById('emailLabel');

  // The transmit button ONLY copies the email address to the clipboard.
  // No mailto: link, no external navigation of any kind.
  emailLink.removeAttribute('href');
  emailLink.setAttribute('role', 'button');
  emailLink.setAttribute('tabindex', '0');
  emailLabel.textContent = 'TRANSMIT EMAIL';

  let emailResetTimer = null;

  const copyEmail = async (e) => {
    if (e) e.preventDefault();
    playTypewriterSound('key');
    emailLabel.textContent = 'E-MAIL COPIED!';
    emailLink.classList.remove('is-copied');
    void emailLink.offsetWidth;
    emailLink.classList.add('is-copied');

    try {
      await navigator.clipboard.writeText(CONFIG.email);
    } catch (err) {
      const temp = document.createElement('textarea');
      temp.value = CONFIG.email;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      try { document.execCommand('copy'); } catch (err2) { /* no-op */ }
      document.body.removeChild(temp);
    }

    clearTimeout(emailResetTimer);
    emailResetTimer = setTimeout(() => {
      emailLabel.textContent = 'TRANSMIT EMAIL';
      emailLink.classList.remove('is-copied');
    }, 3600);
  };

  emailLink.addEventListener('click', copyEmail);
  emailLink.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      copyEmail(e);
    }
  });

  document.getElementById('stubDate').textContent = 'CLASSIFIED FILE: ' + new Date().getFullYear();
  document.getElementById('footerLine').textContent =
    `© ${new Date().getFullYear()} ${CONFIG.name.toUpperCase()}`;
}

/* =========================================================================
   Real-Time Search Controller
   ========================================================================= */

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    playTypewriterSound('key');
    const val = e.target.value;
    clearBtn.style.display = val.length > 0 ? 'block' : 'none';

    if (!hasBeenPrinted) {
      const printerWrap = document.getElementById('printerWrap');
      const ticketsWrap = document.getElementById('tickets');
      const searchSection = document.getElementById('searchSection');
      const scrollCue = document.getElementById('scrollCue');
      printerWrap.classList.add('is-printed');

      setTimeout(() => {
        hasBeenPrinted = true;
        renderTickets(val);
        printerWrap.classList.add('has-tickets');
        ticketsWrap.classList.add('visible');
        scrollCue.classList.add('visible');

        const count = CONFIG.projects.length;
        const ticketsFinishDelay = Math.max(550, (count * 120) + 150);
        setTimeout(() => {
          if (hasBeenPrinted && searchSection) {
            searchSection.classList.add('visible');
          }
        }, ticketsFinishDelay);
      }, 450);
    } else {
      renderTickets(val);
    }
  });

  clearBtn.addEventListener('click', () => {
    playTypewriterSound('key');
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    renderTickets('');
  });
}

/* =========================================================================
   Interactions: Printer Lever & Scroll Cue
   ========================================================================= */

function initPrinter() {
  const printBtn = document.getElementById('printBtn');
  const printerWrap = document.getElementById('printerWrap');
  const ticketsWrap = document.getElementById('tickets');
  const searchSection = document.getElementById('searchSection');
  const scrollCue = document.getElementById('scrollCue');

  printBtn.addEventListener('click', () => {
    playTypewriterSound('lever');
    printBtn.classList.add('is-pressed');
    setTimeout(() => printBtn.classList.remove('is-pressed'), 250);

    if (hasBeenPrinted) {
      // --- RETRACT TICKETS WITH SMOOTH GRID HEIGHT SHRINK ---
      const tickets = ticketsWrap.querySelectorAll('.ticket');
      const count = tickets.length;

      if (searchSection) searchSection.classList.remove('visible');

      tickets.forEach((t, i) => {
        t.style.setProperty('--retract-delay', `${(i * 0.08).toFixed(2)}s`);
        if (!prefersReducedMotion) {
          setTimeout(() => playTypewriterSound('print'), i * 80);
        }
      });

      ticketsWrap.classList.add('is-retracting');

      const retractDuration = Math.max(280, (count * 80) + 180);

      // Phase 1: Cards fade/slide out one by one
      setTimeout(() => {
        // Phase 2: Grid height smoothly shrinks 1fr -> 0fr over 500ms
        ticketsWrap.classList.remove('visible');

        // Phase 3: When height shrink completes (500ms), reset printer state
        setTimeout(() => {
          printerWrap.classList.remove('has-tickets', 'is-printed');
          ticketsWrap.classList.remove('is-retracting');
          const inner = document.getElementById('ticketsInner') || ticketsWrap;
          inner.innerHTML = '';
          hasBeenPrinted = false;
        }, 500);
      }, retractDuration);
    } else {
      // --- DISPATCH TICKETS ---
      printerWrap.classList.add('is-printed');

      setTimeout(() => {
        hasBeenPrinted = true;
        const currentSearch = document.getElementById('searchInput').value || '';
        renderTickets(currentSearch);
        printerWrap.classList.add('has-tickets');
        ticketsWrap.classList.add('visible');
        scrollCue.classList.add('visible');

        // Reveal search bar right after tickets appear
        const count = CONFIG.projects.length;
        const searchDelay = (count * 60) + 100;
        setTimeout(() => {
          if (hasBeenPrinted && searchSection) {
            searchSection.classList.add('visible');
          }
        }, searchDelay);
      }, 350);
    }
  });

  scrollCue.addEventListener('click', () => {
    playTypewriterSound('key');
    document.getElementById('about').scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
}

/* =========================================================================
   Init
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  initSearch();
  initPrinter();
});