/* مسار — the web build.
   The same journey the two native builds run, in the same order, reading the same content files.
   No framework and no build step: the page fetches Content/ as JSON and draws it, so a case the
   author adds appears here without anyone touching this file. */

const FIG = '٠١٢٣٤٥٦٧٨٩';
const num = (v, lang = LANG) => (lang === 'ar' ? String(v).replace(/[0-9]/g, d => FIG[+d]) : String(v));
const pick = o => (o ? o[LANG] : '');

/* ---------------------------------------------------------------- words */

const T = {
  ar: {
    appName: 'مسار',
    tagline: 'اكتشف تخصصك بأن تعيشه',
    start: 'ابدأ',
    next: 'التالي',
    introTitle: 'قبل أن تختار تخصصك…',
    introBody: 'لن تقرأ عن المهنة، بل ستعيش يوماً كاملاً فيها. ثم نرى معاً إن كانت تناسبك.',
    introBegin: 'لنبدأ',
    welcomeL1: 'لن تقرأ',
    welcomeL2: 'عن المهنة.',
    welcomeL3: 'ستعيشها.',
    welcomeLead: 'تختبِر ما يستهويك، ثم تعيش يوماً كاملاً في التخصص، ثم تعرف هل يشبهك.',
    welcomeBadge: 'للطلاب بين ١٣ و١٨ · الإصدار الأول',
    step1Title: 'اختبار قصير', step1Sub: 'بضع دقائق، بلا كتابة.',
    step2Title: 'يوم في حياة طبيب قلب', step2Sub: 'السابعة صباحاً. مريض ينتظرك.',
    step3Title: 'نتيجتك', step3Sub: 'وما خطوتك التالية.',
    welcomeFooter: '– الحالات من دفتر طبيبة قلب',
    privacyNote: 'لا يجمع التطبيق أي بيانات · ويعمل دون اتصال',
    testTitle: 'ما الذي يستهويك؟',
    testBody: 'أجب بسرعة وصدق. لا توجد إجابة خاطئة.',
    testSubmit: 'أظهر النتيجة',
    testIncomplete: 'أكمل الأسئلة أولاً',
    fitPointsTo: 'ما تشير إليه إجاباتك',
    fitLead: 'هذا هو التخصص الذي سنعيش فيه يوماً كاملاً. اقرأ الحالة، ثم قرّر كما لو كنت هناك.',
    fitBegin: 'جرّب يوماً في هذا التخصص',
    chooseDay: 'اختر يوماً لتعيشه',
    casesAvailable: 'حالات متاحة',
    chooseCase: 'ابدأ هذا اليوم',
    minutes: 'دقيقة',
    chosen: 'مختارة',
    scenarioTitle: 'يوم في الحياة',
    scenarioProgress: 'المشهد',
    scenarioMorning: '٧:٠٠ صباحاً',
    whatDoYouDo: 'ماذا تفعل؟',
    correct: 'أحسنت',
    notQuite: 'ليست الأفضل',
    sources: 'المصادر',
    sourcePending: 'المصدر: يُضاف مع المحتوى المعتمد',
    plate: 'اللوحة',
    plateMark: 'لوحة مصوّرة',
    assessmentTitle: 'تقييم',
    assessmentBody: 'أسئلة على ما عشته للتو.',
    explanation: 'الشرح',
    nextQuestion: 'السؤال التالي',
    thenResult: 'ثم نتيجتك',
    yourResult: 'نتيجتك',
    correctAnswers: 'إجابات صحيحة',
    whereFrom: 'من أين جاءت النتيجة',
    breakScenes: 'المواقف التي عشتها',
    breakDecisions: 'القرارات الصحيحة',
    breakQuiz: 'الأسئلة الصحيحة',
    scaleLow: 'لا يشبهك',
    scaleHigh: 'يشبهك كثيراً',
    strongest: 'أقوى ما ظهر عندك: ترتيب الأولويات وأنت تحت الوقت.',
    fromAssessment: '– من تقييم الحالة',
    gradedLevel: 'مستواك في التقييم',
    nextSteps: 'الخطوات التالية',
    tryAgain: 'أعد المحاولة',
    loading: '…جارٍ التحميل',
    noContent: 'لا يوجد محتوى بعد',
  },
  en: {
    appName: 'Masar',
    tagline: 'Discover a specialty by living it',
    start: 'Start',
    next: 'Next',
    introTitle: 'Before you choose a path…',
    introBody: "You won't read about the job — you'll live a full day inside it. Then we see together whether it fits.",
    introBegin: "Let's begin",
    welcomeL1: "You won't read",
    welcomeL2: 'about the job.',
    welcomeL3: "You'll live it.",
    welcomeLead: 'You test what draws you in, live a full day in the specialty, then learn whether it resembles you.',
    welcomeBadge: 'For students 13–18 · First release',
    step1Title: 'A short test', step1Sub: 'A few minutes, no typing.',
    step2Title: "A Day in a Cardiologist's Life", step2Sub: 'Seven in the morning. A patient is waiting.',
    step3Title: 'Your result', step3Sub: 'And your next step.',
    welcomeFooter: '– Cases from a cardiologist’s notebook',
    privacyNote: 'No data collected · works offline',
    testTitle: 'What draws you in?',
    testBody: 'Answer quickly and honestly. There is no wrong answer.',
    testSubmit: 'Show my result',
    testIncomplete: 'Finish the statements first',
    fitPointsTo: 'What your answers point to',
    fitLead: "This is the specialty we'll live a full day in. Read the case, then decide as if you were there.",
    fitBegin: 'Try a day in this specialty',
    chooseDay: 'Choose a day to live',
    casesAvailable: 'cases available',
    chooseCase: 'Start this day',
    minutes: 'min',
    chosen: 'Selected',
    scenarioTitle: 'A Day in the Life',
    scenarioProgress: 'Scene',
    scenarioMorning: '7:00 am',
    whatDoYouDo: 'What do you do?',
    correct: 'Well done',
    notQuite: 'Not the best',
    sources: 'Sources',
    sourcePending: 'Source: added with the approved content',
    plate: 'Plate',
    plateMark: 'Illustrated plate',
    assessmentTitle: 'Assessment',
    assessmentBody: 'Questions on what you just lived.',
    explanation: 'Explanation',
    nextQuestion: 'Next question',
    thenResult: 'Then your result',
    yourResult: 'Your result',
    correctAnswers: 'correct answers',
    whereFrom: 'Where the result came from',
    breakScenes: 'Scenes you lived',
    breakDecisions: 'Correct decisions',
    breakQuiz: 'Correct questions',
    scaleLow: 'Not like you',
    scaleHigh: 'Very like you',
    strongest: 'What showed most in you: ordering priorities while under time.',
    fromAssessment: '– from the case assessment',
    gradedLevel: 'Your level in the assessment',
    nextSteps: 'Next steps',
    tryAgain: 'Try again',
    loading: '…loading',
    noContent: 'No content yet',
  },
};

const t = k => T[LANG][k] ?? k;

/* The graded bands, from the case file when it carries them, else the shipped defaults. */
const BANDS = [
  { min: 0.0, max: 0.5, label: { ar: 'أساس', en: 'Foundation' },
    message: { ar: 'تعرف الأساسيات. اقرأ الحالة مرة أخرى وركّز على سبب كل خطوة، لا على الخطوة نفسها.',
               en: 'You know the basics. Read the case again and focus on why each step was taken, not the step itself.' } },
  { min: 0.5, max: 0.8, label: { ar: 'تطبيق', en: 'Application' },
    message: { ar: 'تطبّق ما تعرفه في موقف حقيقي. الخطوة التالية: اسأل «ماذا لو تغيّر شيء واحد؟»',
               en: 'You apply what you know to a real situation. Next: ask "what if one thing changed?"' } },
  { min: 0.8, max: Infinity, label: { ar: 'استدلال', en: 'Reasoning' },
    message: { ar: 'ترتّب وتستنتج تحت الوقت. هذا ما يفعله الطبيب فعلاً.', en: 'You order and infer under time. That is what a doctor actually does.' } },
];

/* ---------------------------------------------------------------- state */

let LANG = 'ar';
let TEST = null;
let CASES = [];
let CASE_ = null;
let stage = 'welcome';
const s = {
  answers: {},        // interest-test item id -> 1..5
  step: 0,            // scenario step index
  chosen: {},         // step id -> choice id
  revealed: {},       // step id -> true
  q: 0,               // assessment index
  qa: {},             // assessment question id -> choice id
  finished: false,
};

const $ = id => document.getElementById(id);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------------------------------------------------------------- the field */

const SCREEN_PHOTO = {
  welcome: 'screen-welcome.jpg',
  intro: 'screen-intro.jpg',
  test: 'screen-test.jpg',
  fit: 'screen-fit.jpg',
  cases: 'screen-fit.jpg',
  assessment: 'screen-assessment.jpg',
  dashboard: 'screen-dashboard.jpg',
};

function setField(name) {
  const f = $('field');
  const file = name || null;
  if (!file) {
    f.className = 'field paper';
    f.innerHTML = '';
    $('screen').classList.remove('on-photo');
    return;
  }
  if (f.dataset.file !== file) {
    f.dataset.file = file;
    f.className = 'field';
    f.innerHTML = `<img src="content/images/${file}" alt="">`;
  }
  f.className = 'field';
  $('screen').classList.add('on-photo');
}

/* ---------------------------------------------------------------- the band */

function setBand(label, { note = '', enabled = true, onPaper = false, onClick = null } = {}) {
  const b = $('band');
  if (!label) { b.hidden = true; b.onclick = null; return; }
  b.hidden = false;
  b.className = 'band' + (onPaper ? ' on-paper' : '');
  b.disabled = !enabled;
  b.innerHTML = `<span>${esc(label)}</span><span class="arrow">‹</span>` +
                (note ? `<span class="note">${esc(note)}</span>` : '');
  b.onclick = enabled && onClick ? onClick : null;
}

/* ---------------------------------------------------------------- pieces */

function plate(image, opts = {}) {
  if (!image) return null;
  const box = el('div', 'plate');
  const src = image.file;
  box.innerHTML = `<img src="content/images/${src}" alt="${esc(pick(image.altText) || '')}">` +
    `<span class="tag">${esc(t('plate'))} ${num(opts.index || 1)}</span>` +
    (pick(image.caption) ? `<div class="cap">${esc(pick(image.caption))} <span style="opacity:.7">· ${esc(image.credit || '')}</span></div>` : '');
  return box;
}

function sources(steps) {
  const list = (steps || []).filter(Boolean);
  if (!list.length) return null;
  const d = el('details', 'sources');
  d.innerHTML = `<summary>${esc(t('sources'))}</summary>` +
    list.map(s => `<div>${esc(s.label || s.id || '')}${s.url ? ` — <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a>` : ''}</div>`).join('');
  return d;
}

function line(step) {
  const img = plate(step.image, { index: s.step + 1 });
  if (img) img.querySelector('.tag').textContent = `${t('plate')} ${num(s.step + 1)}`;
  return img;
}

/* ---------------------------------------------------------------- screens */

const SCREENS = {

  welcome() {
    setField(SCREEN_PHOTO.welcome);
    const box = el('div');
    box.innerHTML = `
      <div class="lang">${langButtons()}</div>
      <div class="sp26"></div>
      <h1 class="h1">${esc(t('welcomeL1'))}<br>${esc(t('welcomeL2'))}<br><span style="color:var(--blood)">${esc(t('welcomeL3'))}</span></h1>
      <div class="sp16"></div>
      <p class="lead">${esc(t('welcomeLead'))}</p>
      <div class="sp26"></div>
      <hr class="rule">`;
    for (const [i, [ti, sub]] of [[1, ['step1Title', 'step1Sub']], [2, ['step2Title', 'step2Sub']], [3, ['step3Title', 'step3Sub']]]) {
      box.insertAdjacentHTML('beforeend', `
        <div class="row top" style="padding:14px 0">
          <span class="micro" style="min-width:22px">${num(i)}</span>
          <span class="grow">
            <span class="h2" style="display:block">${esc(t(ti))}</span>
            <span class="meta" style="display:block;margin-top:3px">${esc(t(sub))}</span>
          </span>
        </div>
        <hr class="rule">`);
    }
    box.insertAdjacentHTML('beforeend', `
      <div class="sp20"></div>
      <p class="micro">${esc(t('welcomeBadge'))}</p>
      <div class="sp8"></div>
      <p class="micro">${esc(t('welcomeFooter'))}</p>
      <div class="sp8"></div>
      <p class="micro">${esc(t('privacyNote'))}</p>`);
    return { body: box, band: { label: t('start'), onClick: () => go('intro') } };
  },

  intro() {
    setField(SCREEN_PHOTO.intro);
    const box = el('div');
    box.innerHTML = `
      <div class="lang">${langButtons()}</div>
      <div class="sp34"></div>
      <h1 class="h1">${esc(t('introTitle'))}</h1>
      <div class="sp16"></div>
      <p class="body">${esc(t('introBody'))}</p>`;
    return { body: box, band: { label: t('introBegin'), onClick: () => go('test') } };
  },

  test() {
    setField(SCREEN_PHOTO.test);
    const box = el('div');
    box.innerHTML = `<div class="lang">${langButtons()}</div><div class="sp20"></div>
      <h1 class="h1">${esc(t('testTitle'))}</h1>
      <div class="sp8"></div><p class="meta">${esc(t('testBody'))}</p>
      <div class="sp8"></div>
      <p class="micro">${num(TEST.items.length)} ${LANG === 'ar' ? 'عبارة' : 'statements'} · ${LANG === 'ar' ? 'من' : 'ages'} ${num(TEST.audience.minAge)}–${num(TEST.audience.maxAge)}</p>
      <div class="sp12"></div>`;
    TEST.items.forEach((item, i) => {
      const row = el('div', 'item');
      row.innerHTML = `<p class="q"><span class="micro" style="opacity:.7">${num(i + 1)}</span> ${esc(pick(item.text))}</p>
        <div class="scale"></div>`;
      const scale = row.querySelector('.scale');
      TEST.scale.labels.forEach(lab => {
        const b = el('button', null, esc(pick(lab.text)));
        b.type = 'button';
        b.setAttribute('aria-pressed', String(s.answers[item.id] === lab.value));
        b.onclick = () => { s.answers[item.id] = lab.value; render(); };
        scale.append(b);
      });
      box.append(row);
    });
    const done = TEST.items.every(i => s.answers[i.id]);
    return {
      body: box,
      band: {
        label: t('testSubmit'), enabled: done,
        note: done ? '' : t('testIncomplete'),
        onClick: () => go('fit'),
      },
    };
  },

  fit() {
    setField(SCREEN_PHOTO.fit);
    const top = topDimension();
    const box = el('div');
    box.innerHTML = `
      <div class="lang">${langButtons()}</div>
      <div class="sp20"></div>
      <p class="micro">${esc(t('fitPointsTo'))}</p>
      <div class="sp8"></div>
      <h1 class="h1">${esc(pick(top ? top.name : { ar: 'قلب', en: 'Cardiology' }))}</h1>
      <div class="sp16"></div>
      <p class="body">${esc(t('fitLead'))}</p>
      <div class="sp20"></div>
      <hr class="rule">
      <div class="sp12"></div>
      <p class="micro">${num(CASES.length)} ${esc(t('casesAvailable'))}</p>`;
    return { body: box, band: { label: t('fitBegin'), note: pick(CASE_?.title), onClick: () => go('cases') } };
  },

  cases() {
    setField(SCREEN_PHOTO.cases);
    const box = el('div');
    box.innerHTML = `
      <div class="lang">${langButtons()}</div>
      <div class="sp20"></div>
      <h1 class="h1">${esc(t('chooseDay'))}</h1>
      <div class="sp8"></div>
      <p class="meta">${num(CASES.length)} ${esc(t('casesAvailable'))}</p>
      <div class="sp16"></div>`;
    CASES.forEach(c => {
      const card = el('div', 'card' + (CASE_?.id === c.id ? ' chosen' : ''));
      card.innerHTML = `
        ${c.cover ? `<img src="content/images/${c.cover.file}" alt="${esc(pick(c.cover.altText) || '')}">` : ''}
        <div class="inner">
          <div class="row top">
            <span class="h2 grow">${esc(pick(c.title))}</span>
            ${CASE_?.id === c.id ? `<span class="micro" style="color:var(--blood)">${esc(t('chosen'))}</span>` : ''}
          </div>
          <div class="sp8"></div>
          <p class="body" style="font-size:17px">${esc(pick(c.summary))}</p>
          <div class="sp8"></div>
          <p class="micro">${esc(pick(c.specialty.name))} · ${esc(levelName(c.level))} · Dok ${num(c.dok)} · ${num(c.estimatedMinutes || 0)} ${esc(t('minutes'))}</p>
        </div>
        <div class="start">${esc(t('chooseCase'))}</div>`;
      card.onclick = () => { CASE_ = c; render(); };
      box.append(card, el('div', 'sp16'));
    });
    return {
      body: box,
      band: {
        label: t('fitBegin'), note: pick(CASE_?.title), enabled: !!CASE_,
        onClick: () => { s.step = 0; s.chosen = {}; s.revealed = {}; go('scenario'); },
      },
    };
  },

  scenario() {
    setField(CASE_.background?.file || null);
    const steps = CASE_.scenario;
    const step = steps[s.step];
    if (!step) return { body: el('div'), band: null, advance: () => go('assessment') };

    const box = el('div');
    box.innerHTML = `<div class="lang">${langButtons()}</div>
      <p class="micro">${esc(t('scenarioProgress'))} ${num(s.step + 1)} ${LANG === 'ar' ? 'من' : 'of'} ${num(steps.length)} · ${esc(t('scenarioMorning'))}</p>
      <div class="sp12"></div>
      <p class="body">${esc(pick(step.text))}</p>`;
    const img = line(step);
    if (img) box.append(img);

    const src = sources(step.sources);
    if (src) box.append(src);

    if (step.kind === 'decision') {
      const chosenId = s.chosen[step.id];
      const wrap = el('div');
      wrap.style.marginTop = '18px';
      wrap.innerHTML = `<p class="h2">${esc(t('whatDoYouDo'))}</p><div class="sp12"></div>`;
      step.choices.forEach(c => {
        const b = el('button', 'choice');
        b.type = 'button';
        b.textContent = pick(c.text);
        if (chosenId) {
          b.disabled = true;
          if (c.id === chosenId) b.classList.add(c.correct ? 'correct' : 'wrong');
        } else {
          b.onclick = () => { s.chosen[step.id] = c.id; render(); };
        }
        wrap.append(b);
      });
      if (chosenId) {
        const picked = step.choices.find(c => c.id === chosenId);
        const v = el('div', 'verdict');
        v.innerHTML = `<p class="who">${esc(picked.correct ? t('correct') : t('notQuite'))}</p><p class="body">${esc(pick(picked.feedback))}</p>`;
        wrap.append(v);
      }
      box.append(wrap);
    }

    const answered = step.kind !== 'decision' || !!s.chosen[step.id];
    const last = s.step >= steps.length - 1;
    return {
      body: box,
      band: {
        label: last ? (LANG === 'ar' ? 'إلى التقييم' : 'To the assessment') : t('next'),
        enabled: answered,
        note: answered ? '' : t('whatDoYouDo'),
        onClick: () => {
          if (last) { s.q = 0; s.qa = {}; s.finished = false; go('assessment'); }
          else { s.step += 1; render(); }
        },
      },
    };
  },

  assessment() {
    setField(SCREEN_PHOTO.assessment);
    const qs = CASE_.assessment;
    const q = qs[s.q];
    const box = el('div');
    box.innerHTML = `<div class="lang">${langButtons()}</div>
      <p class="micro">${esc(t('assessmentTitle'))} · ${esc(t('scenarioProgress'))} ${num(s.q + 1)} ${LANG === 'ar' ? 'من' : 'of'} ${num(qs.length)}</p>
      <div class="sp12"></div>
      <p class="body">${esc(pick(q.prompt))}</p>
      <div class="sp16"></div>`;
    const chosenId = s.qa[q.id];
    q.choices.forEach(c => {
      const b = el('button', 'choice');
      b.type = 'button';
      b.textContent = pick(c.text);
      if (chosenId) {
        b.disabled = true;
        if (c.id === chosenId) b.classList.add(c.correct ? 'correct' : 'wrong');
      } else {
        b.onclick = () => { s.qa[q.id] = c.id; render(); };
      }
      box.append(b);
    });
    if (chosenId) {
      const v = el('div', 'verdict');
      v.innerHTML = `<p class="who">${esc(t('explanation'))}</p><p class="body">${esc(pick(q.explanation))}</p>`;
      box.append(v);
      const src = sources(q.sources);
      if (src) box.append(src);
    }
    const last = s.q >= qs.length - 1;
    return {
      body: box,
      band: {
        label: last ? t('thenResult') : t('nextQuestion'),
        enabled: !!chosenId,
        note: chosenId ? '' : (LANG === 'ar' ? 'اختر إجابة أولاً' : 'Choose an answer first'),
        onClick: () => { if (last) { s.finished = true; go('dashboard'); } else { s.q += 1; render(); } },
      },
    };
  },

  dashboard() {
    setField(SCREEN_PHOTO.dashboard);
    const g = grade();
    const steps = CASE_.scenario.filter(x => x.kind === 'decision');
    const made = steps.filter(x => s.chosen[x.id]).length;
    const right = steps.filter(x => {
      const c = x.choices.find(y => y.id === s.chosen[x.id]);
      return c && c.correct;
    }).length;

    const box = el('div');
    box.innerHTML = `<div class="lang">${langButtons()}</div><div class="sp20"></div>
      <div class="row top">
        <span class="grow">
          <span class="micro" style="display:block">${esc(t('yourResult'))}</span>
          <span class="h1" style="display:block">${esc(pick(CASE_.specialty.name))}</span>
        </span>
        <span style="text-align:end">
          <span class="figure-big" style="display:block">${num(g.pct)}٪</span>
          <span class="micro">${num(g.right)} / ${num(g.total)} ${esc(t('correctAnswers'))}</span>
        </span>
      </div>
      <div class="sp20"></div>
      <div class="scalebar">
        <div class="track"></div>
        <div class="fill" style="inset-inline-start:0;width:${Math.max(2, g.pct)}%"></div>
        <div class="tick" style="inset-inline-start:${Math.max(0, Math.min(99, g.pct))}%"></div>
      </div>
      <div class="row"><span class="micro grow">${esc(t('scaleLow'))}</span><span class="micro">${esc(t('scaleHigh'))}</span></div>
      <div class="sp20"></div><hr class="rule"><div class="sp12"></div>
      <p class="micro">${esc(t('gradedLevel'))}</p>
      <div class="sp8"></div>
      <p class="h2">${esc(pick(g.band.label))}</p>
      <div class="sp8"></div>
      <p class="body">${esc(pick(g.band.message))}</p>
      <div class="sp12"></div><hr class="rule"><div class="sp16"></div>
      <p class="body">${esc(pick(CASE_.outcome.fitMessage))}</p>
      <div class="sp20"></div>
      <p class="micro">${esc(t('whereFrom'))}</p>
      <div class="sp12"></div>`;
    box.insertAdjacentHTML('beforeend', leader(t('breakScenes'), `${num(made)} / ${num(steps.length)}`));
    box.insertAdjacentHTML('beforeend', leader(t('breakDecisions'), `${num(right)} / ${num(steps.length)}`));
    box.insertAdjacentHTML('beforeend', leader(t('breakQuiz'), `${num(g.right)} / ${num(g.total)}`));
    box.insertAdjacentHTML('beforeend', `
      <div class="sp20"></div>
      <p class="lead">${esc(t('strongest'))}</p>
      <div class="sp8"></div>
      <p class="micro">${esc(t('fromAssessment'))}</p>
      <div class="sp20"></div>
      <div style="background:var(--paper);padding:16px">
        <p class="micro" style="color:var(--ink-3)">${esc(t('nextSteps'))}</p>
        <div class="sp8"></div>
        ${(CASE_.outcome.nextSteps || []).map(n => `<p class="body" style="color:var(--ink);font-size:17px">${esc(pick(n))}</p>`).join('')}
      </div>`);
    return { body: box, band: { label: t('tryAgain'), onClick: () => { reset(); go('welcome'); } } };
  },
};

function leader(label, value) {
  return `<div class="leader"><span class="lbl">${esc(label)}</span><span class="dots"></span><span class="val">${esc(value)}</span></div>`;
}

function langButtons() {
  return ['ar', 'en'].map(code =>
    `<button type="button" aria-pressed="${LANG === code}" onclick="setLang('${code}')"><span>${code === 'ar' ? 'العربية' : 'English'}</span></button>`
  ).join('');
}

/* ---------------------------------------------------------------- scoring */

function levelName(level) {
  const map = {
    level1: { ar: 'المستوى الأول', en: 'Level 1' },
    intermediate: { ar: 'متوسط', en: 'Intermediate' },
    advanced: { ar: 'متقدم', en: 'Advanced' },
  };
  return pick(map[level] || map.level1);
}

function topDimension() {
  if (!TEST) return null;
  const totals = {};
  TEST.items.forEach(item => {
    const v = s.answers[item.id];
    if (v) totals[item.dimension] = (totals[item.dimension] || 0) + v;
  });
  const best = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];
  if (!best) return null;
  return TEST.dimensions.find(d => d.id === best[0]) || null;
}

function grade() {
  const qs = CASE_.assessment;
  let weight = 0, earned = 0, right = 0;
  qs.forEach(q => {
    const w = q.dok || 1;
    weight += w;
    const c = q.choices.find(x => x.id === s.qa[q.id]);
    if (c && c.correct) { earned += w; right += 1; }
  });
  const ratio = weight ? earned / weight : 0;
  const band = BANDS.find(b => ratio >= b.min && ratio < b.max) || BANDS[BANDS.length - 1];
  return { pct: Math.round((right / (qs.length || 1)) * 100), right, total: qs.length, ratio, band };
}

/* ---------------------------------------------------------------- journey */

function reset() {
  s.answers = {}; s.step = 0; s.chosen = {}; s.revealed = {}; s.q = 0; s.qa = {}; s.finished = false;
}

function go(next) {
  stage = next;
  render();
  $('screen').scrollTop = 0;
}

window.setLang = code => { LANG = code; document.documentElement.lang = code; document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr'; render(); };

function render() {
  const view = SCREENS[stage]();
  const screen = $('screen');
  screen.innerHTML = '';
  screen.append(view.body);
  if (view.band) setBand(view.band.label, view.band);
  else setBand(null);
}

/* ---------------------------------------------------------------- boot */

async function boot() {
  try {
    const [test, index] = await Promise.all([
      fetch('content/interest-test.json').then(r => r.json()),
      fetch('content/cases/index.json').then(r => r.json()),
    ]);
    TEST = test;
    CASES = await Promise.all(index.cases.map(f => fetch(`content/cases/${f}`).then(r => r.json())));
    CASE_ = CASES[0] || null;
    if (!CASE_) throw new Error('no cases');
    document.body.classList.add('ready');
    go('welcome');
  } catch (e) {
    $('screen').innerHTML = `<p class="notice">${esc(t('noContent'))}<br><span class="micro">${esc(e.message)}</span></p>`;
  }
}

boot();
