/**
 * 测验流程、计分、切页与结果渲染
 */

(function () {
  const data = window.AIKATSU_QUIZ_DATA;
  if (!data) {
    console.error("缺少 AIKATSU_QUIZ_DATA，请确认已先加载 js/data.js");
    return;
  }
  const { CHARACTER_IDS, CHARACTERS, QUESTIONS, MAX_SCORES_BY_CHARACTER } = data;

  const els = {
    stars: document.getElementById("stars"),
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    btnStart: document.getElementById("btn-start"),
    btnRetry: document.getElementById("btn-retry"),
    progressBar: document.getElementById("progress-bar"),
    progressWrap: document.getElementById("progress-wrap"),
    quizCurrent: document.getElementById("quiz-current"),
    quizTotal: document.getElementById("quiz-total"),
    quizText: document.getElementById("quiz-text"),
    quizOptions: document.getElementById("quiz-options"),
    quizCard: document.getElementById("quiz-card"),
    resultPortrait: document.getElementById("result-portrait"),
    resultInitial: document.getElementById("result-initial"),
    resultName: document.getElementById("result-name"),
    resultPercent: document.getElementById("result-percent"),
    resultTags: document.getElementById("result-tags"),
    resultDesc: document.getElementById("result-desc"),
    top3Bars: document.getElementById("top3-bars"),
  };

  /** @type {Record<string, number>} */
  let scores = {};
  let questionIndex = 0;
  let transitionLock = false;

  function emptyScores() {
    scores = {};
    CHARACTER_IDS.forEach((id) => {
      scores[id] = 0;
    });
  }

  function initStars() {
    if (!els.stars) return;
    const count = 28;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.setProperty("--tw", `${3 + Math.random() * 4}s`);
      s.style.setProperty("--td", `${Math.random() * 5}s`);
      els.stars.appendChild(s);
    }
  }

  /**
   * @param {'home' | 'quiz' | 'result'} name
   */
  function showScreen(name) {
    const map = { home: els.home, quiz: els.quiz, result: els.result };
    Object.entries(map).forEach(([key, el]) => {
      if (!el) return;
      if (key === name) {
        el.classList.add("screen--active");
        el.removeAttribute("aria-hidden");
      } else {
        el.classList.remove("screen--active");
        el.setAttribute("aria-hidden", "true");
      }
    });
  }

  function setProgress() {
    const total = QUESTIONS.length;
    const done = questionIndex;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    if (els.progressBar) els.progressBar.style.width = `${pct}%`;
    if (els.progressWrap) els.progressWrap.setAttribute("aria-valuenow", String(pct));
    if (els.quizCurrent) els.quizCurrent.textContent = String(Math.min(done + 1, total));
    if (els.quizTotal) els.quizTotal.textContent = String(total);
  }

  function renderQuestion() {
    const q = QUESTIONS[questionIndex];
    if (!q || !els.quizText || !els.quizOptions) return;
    els.quizText.textContent = q.text;
    els.quizOptions.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt.label}`;
      btn.addEventListener("click", () => onPickOption(opt));
      els.quizOptions.appendChild(btn);
    });
    setProgress();
  }

  /** @param {{ scores: Record<string, number> }} opt */
  function applyScores(opt) {
    Object.entries(opt.scores).forEach(([id, v]) => {
      if (typeof scores[id] === "number") scores[id] += v;
    });
  }

  /**
   * 同分按 CHARACTER_IDS 顺序取前者
   */
  function pickWinner() {
    let bestId = CHARACTER_IDS[0];
    let best = scores[bestId] || 0;
    CHARACTER_IDS.forEach((id) => {
      const s = scores[id] || 0;
      if (s > best) {
        best = s;
        bestId = id;
      }
    });
    return bestId;
  }

  function matchPercentFor(id) {
    const raw = scores[id] || 0;
    const max = MAX_SCORES_BY_CHARACTER[id] || 1;
    return Math.min(100, Math.round((raw / max) * 100));
  }

  function buildTop3() {
    const ranked = CHARACTER_IDS.map((id) => ({
      id,
      score: scores[id] || 0,
    })).sort((a, b) => b.score - a.score);
    const top = ranked.slice(0, 3);
    const sum = top.reduce((acc, x) => acc + x.score, 0) || 1;
    return top.map((x) => ({
      ...x,
      share: Math.round((x.score / sum) * 1000) / 10,
    }));
  }

  function renderResult() {
    const winnerId = pickWinner();
    const c = CHARACTERS[winnerId];
    if (!c) return;

    const pct = matchPercentFor(winnerId);
    if (els.resultPortrait) {
      els.resultPortrait.style.background = c.cardGradient;
      els.resultPortrait.classList.toggle("ssr-card__portrait--dark", c.id === "yurika");
    }
    if (els.resultInitial) els.resultInitial.textContent = c.initial;
    if (els.resultName) els.resultName.textContent = c.name;
    if (els.resultPercent) els.resultPercent.textContent = String(pct);
    if (els.resultDesc) els.resultDesc.textContent = c.description;

    if (els.resultTags) {
      els.resultTags.innerHTML = "";
      c.keywords.forEach((kw) => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = kw;
        els.resultTags.appendChild(span);
      });
    }

    if (els.top3Bars) {
      els.top3Bars.innerHTML = "";
      const top3 = buildTop3();
      top3.forEach((row) => {
        const ch = CHARACTERS[row.id];
        const wrap = document.createElement("div");
        wrap.className = "top3-row";
        wrap.innerHTML = `
          <span class="top3-row__label">${ch ? ch.name : row.id}</span>
          <span class="top3-row__pct">${row.share}%</span>
          <div class="top3-row__track">
            <div class="top3-row__fill" data-fill="0"></div>
          </div>
        `;
        els.top3Bars.appendChild(wrap);
        const fill = wrap.querySelector(".top3-row__fill");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (fill instanceof HTMLElement) fill.style.width = `${row.share}%`;
          });
        });
      });
    }
  }

  /** @param {{ scores: Record<string, number> }} opt */
  function onPickOption(opt) {
    if (transitionLock) return;
    applyScores(opt);

    const nextIndex = questionIndex + 1;
    if (nextIndex >= QUESTIONS.length) {
      transitionLock = true;
      els.quizCard.classList.add("is-exit");
      window.setTimeout(() => {
        questionIndex = nextIndex;
        renderResult();
        showScreen("result");
        els.quizCard.classList.remove("is-exit");
        transitionLock = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 280);
      return;
    }

    transitionLock = true;
    els.quizCard.classList.add("is-exit");
    window.setTimeout(() => {
      questionIndex = nextIndex;
      els.quizCard.classList.remove("is-exit");
      els.quizCard.classList.add("is-enter");
      renderQuestion();
      window.setTimeout(() => {
        els.quizCard.classList.remove("is-enter");
        transitionLock = false;
      }, 400);
    }, 260);
  }

  function startQuiz() {
    emptyScores();
    questionIndex = 0;
    showScreen("quiz");
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    emptyScores();
    questionIndex = 0;
    showScreen("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (els.btnStart) els.btnStart.addEventListener("click", startQuiz);
  if (els.btnRetry) els.btnRetry.addEventListener("click", restart);

  initStars();
})();
