import { gsap } from 'gsap';
import { APPROACH_INFO, CHAT, OVERRIDES, SENSITIVE, SENSITIVE_PATTERN, SYNONYMS, THEMES } from '../data/chat';
import type { Theme } from '../data/chat';

const root = document.getElementById('chat-root')!;
const openBtn = document.getElementById('chat-open') as HTMLButtonElement;
const closeBtn = document.getElementById('chat-close') as HTMLButtonElement;
const panel = document.getElementById('chat-panel') as HTMLElement;
const body = document.getElementById('chat-body') as HTMLElement;

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const allSymptoms = THEMES.flatMap((t) => t.symptoms.map((label) => ({ label, theme: t })));

const bubble = (html: string) =>
  `<div class="mb-4 max-w-[92%] rounded-2xl rounded-tl-sm bg-primary-soft px-4 py-3 text-[15px] leading-relaxed text-ink">${html}</div>`;
const pill = 'rounded-lg border border-line bg-surface px-3 py-2 text-left text-sm text-ink transition hover:border-primary hover:bg-primary-soft';
const primaryBtn = 'inline-flex items-center justify-center gap-2 rounded-lg bg-primary-strong px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-primary-text';
const ghostBtn = 'inline-flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 text-[15px] font-semibold text-ink transition hover:bg-bg';

function render(html: string, animate = true) {
  body.innerHTML = html;
  body.scrollTop = 0;
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.from(body.children, { y: 14, opacity: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' });
  }
}

function symptomPill(label: string) {
  return `<button type="button" data-symptom="${esc(label)}" class="${pill}">${esc(label)}</button>`;
}

function showList() {
  render(`
    ${bubble("Bonjour ! Qu'est-ce qui vous amène ? Choisissez ce qui vous ressemble le plus, je vous indique l'approche adaptée.")}
    <label class="relative mb-5 block">
      <span class="sr-only">Rechercher un symptôme</span>
      <input id="chat-search" type="search" autocomplete="off" placeholder="Rechercher un symptôme…" class="w-full rounded-lg border border-line bg-bg py-3 pl-4 pr-4 text-[15px] outline-none focus:border-primary" />
    </label>
    ${THEMES.map(
      (t) => `
      <div class="mb-5">
        <p class="mb-2 text-xs font-bold uppercase tracking-[0.6px] text-ink-soft">${esc(t.title)}</p>
        <div class="flex flex-wrap gap-2">${t.symptoms.map(symptomPill).join('')}</div>
      </div>`,
    ).join('')}
  `);
}

function search(query: string) {
  const q = norm(query);
  const synonym = Object.entries(SYNONYMS).find(([k]) => q.includes(k));
  let hits = allSymptoms.filter((s) => norm(s.label).includes(q) || norm(s.theme.title).includes(q));
  if (synonym) {
    const target = allSymptoms.find((s) => s.label === synonym[1]);
    if (target && !hits.includes(target)) hits = [target, ...hits];
  }
  return hits;
}

function showSearch(query: string) {
  if (SENSITIVE_PATTERN.test(norm(query))) return showSensitive();
  const hits = search(query);
  render(`
    <label class="relative mb-4 block">
      <span class="sr-only">Rechercher un symptôme</span>
      <input id="chat-search" type="search" value="${esc(query)}" autocomplete="off" class="w-full rounded-lg border border-line bg-bg py-3 pl-4 pr-4 text-[15px] outline-none focus:border-primary" />
    </label>
    <p class="mb-3 text-[13px] text-ink-soft">${hits.length} résultat${hits.length > 1 ? 's' : ''}</p>
    <ul class="mb-5 flex flex-col gap-2">
      ${hits
        .map(
          (h) => `<li><button type="button" data-symptom="${esc(h.label)}" class="${pill} w-full">
            <span class="block font-semibold">${esc(h.label)}</span>
            <span class="block text-[13px] text-ink-soft">${esc(h.theme.title)}</span></button></li>`,
        )
        .join('')}
    </ul>
    ${bubble(`Vous ne trouvez pas ce que vous ressentez ? Pas de souci, on en parle directement :`)}
    <a href="tel:${CHAT.phoneTel}" class="${primaryBtn} w-full">Appeler le ${esc(CHAT.phone)}</a>
    <button type="button" data-back class="${ghostBtn} mt-3 w-full">Voir tous les symptômes</button>
  `, false);
  const input = document.getElementById('chat-search') as HTMLInputElement;
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function showResult(label: string) {
  if (SENSITIVE.includes(label)) return showSensitive();
  const hit = allSymptoms.find((s) => s.label === label);
  if (!hit) return showList();
  const theme: Theme = hit.theme;
  const override = OVERRIDES[label];
  const keys = override?.approaches ?? theme.approaches;
  const intro = override?.intro ?? theme.intro;
  render(`
    <div class="mb-4 flex justify-end"><span class="rounded-2xl rounded-tr-sm bg-ink px-4 py-2 text-[15px] text-white">${esc(label)}</span></div>
    ${bubble(`Merci. Voici les approches qui peuvent vous aider ${esc(intro)} :`)}
    <ul class="mb-5 flex flex-col gap-3">
      ${keys
        .map((k, i) => {
          const a = APPROACH_INFO[k];
          return `<li class="rounded-xl border ${i === 0 ? 'border-primary bg-primary-soft' : 'border-line bg-surface'} p-4">
            <p class="font-serif text-lg">${esc(a.name)}</p>
            <p class="mt-1 text-sm text-ink-soft">${esc(a.desc)}</p>
            <a href="${a.href}" class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-text hover:underline">Voir l'approche →</a>
          </li>`;
        })
        .join('')}
    </ul>
    ${bubble("Stéphanie fera le point avec vous à la première séance pour choisir la bonne approche.")}
    <a href="${CHAT.resalib}" target="_blank" rel="noopener" class="${primaryBtn} w-full">Prendre rendez-vous</a>
    <button type="button" data-back class="${ghostBtn} mt-3 w-full">Choisir un autre symptôme</button>
  `);
}

function showSensitive() {
  render(`
    <div class="mb-4 flex justify-end"><span class="rounded-2xl rounded-tr-sm bg-ink px-4 py-2 text-[15px] text-white">Idées noires</span></div>
    ${bubble("Merci de me l'avoir dit. Ce que vous traversez compte, et vous n'avez pas à rester seul·e avec ça.")}
    <div class="mb-4 rounded-xl border border-accent/40 bg-[#fdf3ec] p-4">
      <p class="font-serif text-lg text-accent">Parlez-en dès maintenant</p>
      <p class="mt-2 text-sm text-ink">Le 3114 est le numéro national de prévention du suicide : gratuit, anonyme, 24h/24 et 7j/7. En cas de danger immédiat, appelez le 15.</p>
      <div class="mt-4 flex gap-3">
        <a href="tel:3114" class="${primaryBtn} flex-1">Appeler le 3114</a>
        <a href="tel:15" class="${ghostBtn} flex-1">Appeler le 15</a>
      </div>
    </div>
    ${bubble("Quand vous vous sentirez prêt·e, un accompagnement au cabinet peut aussi vous aider.")}
    <a href="${CHAT.resalib}" target="_blank" rel="noopener" class="${ghostBtn} w-full">Prendre rendez-vous</a>
    <button type="button" data-back class="${ghostBtn} mt-3 w-full">Retour</button>
  `);
}

let opener: HTMLElement | null = null;

function open() {
  opener = document.activeElement as HTMLElement;
  panel.hidden = false;
  openBtn.hidden = true;
  openBtn.setAttribute('aria-expanded', 'true');
  showList();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.from(panel, { y: 24, opacity: 0, scale: 0.98, duration: 0.35, ease: 'power3.out' });
  }
  closeBtn.focus();
}

function close() {
  panel.hidden = true;
  openBtn.hidden = false;
  openBtn.setAttribute('aria-expanded', 'false');
  (opener ?? openBtn).focus();
}

openBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-open-chat]') && panel.hidden) open();
});
document.addEventListener('astro:before-swap', () => {
  panel.hidden = true;
  openBtn.hidden = false;
  openBtn.setAttribute('aria-expanded', 'false');
});
root.addEventListener('keydown', (e) => {
  if ((e as KeyboardEvent).key === 'Escape' && !panel.hidden) close();
});

body.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const symptom = target.closest<HTMLElement>('[data-symptom]');
  if (symptom) return showResult(symptom.dataset.symptom!);
  if (target.closest('[data-back]')) showList();
});

body.addEventListener('input', (e) => {
  const input = e.target as HTMLInputElement;
  if (input.id !== 'chat-search') return;
  if (input.value.trim().length === 0) return showList();
  showSearch(input.value);
});

body.addEventListener('keydown', (e) => {
  const input = e.target as HTMLInputElement;
  if (input.id === 'chat-search' && (e as KeyboardEvent).key === 'Enter') e.preventDefault();
});
