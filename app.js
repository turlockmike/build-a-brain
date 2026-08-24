/* Build a Brain — app logic.
 * Vanilla JS, no build step, no framework — matches the kana-cards/word625-cards/
 * latin-flashcards family pattern. Progress lives in localStorage only (no backend,
 * no login). Data comes from data/curriculum.js (globals ROADMAP, LESSONS).
 */
(function(){
  "use strict";
  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const main = $('#app');

  // ================= PROGRESS (localStorage) =================
  const PROGRESS_KEY = 'bab_progress_v1';
  function loadProgress(){
    try{ const p = JSON.parse(localStorage.getItem(PROGRESS_KEY)); if(p && p.lessons) return p; }
    catch(e){}
    return {lessons:{}};
  }
  function saveProgress(){ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }
  let progress = loadProgress();

  function lessonState(id){ return progress.lessons[id] || {started:false, complete:false}; }
  function markStarted(id){
    const s = progress.lessons[id] = progress.lessons[id] || {started:false, complete:false};
    if(!s.started){ s.started = true; saveProgress(); }
  }
  function markComplete(id, score, total){
    const s = progress.lessons[id] = progress.lessons[id] || {started:true, complete:false};
    s.started = true; s.complete = true; s.quizScore = score; s.quizTotal = total; s.lastAttempt = Date.now();
    saveProgress();
  }

  // ================= HELPERS =================
  function esc(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  let toastTimer = null;
  function toast(msg){
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>el.classList.remove('show'), 2200);
  }

  const PHASE1_LESSONS = LESSONS.slice().sort((a,b)=>a.number-b.number);
  const LESSON_BY_ID = {};
  PHASE1_LESSONS.forEach(l => LESSON_BY_ID[l.id] = l);

  function phase1Progress(){
    const total = PHASE1_LESSONS.length;
    const done = PHASE1_LESSONS.filter(l => lessonState(l.id).complete).length;
    return {done, total};
  }

  // ================= ROUTING =================
  function route(){
    const hash = location.hash.slice(1);
    if(hash.indexOf('lesson/') === 0){
      renderLesson(hash.slice('lesson/'.length));
    } else {
      renderRoadmap();
    }
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route);

  // ================= ROADMAP VIEW =================
  function renderRoadmap(){
    const {done, total} = phase1Progress();
    const pct = total ? Math.round(done/total*100) : 0;

    const phasesHtml = ROADMAP.map(p => {
      if(p.number === 1){
        const lessonsHtml = PHASE1_LESSONS.map(l => {
          const st = lessonState(l.id);
          const cls = st.complete ? 'complete' : (st.started ? 'started' : 'new');
          const icon = st.complete ? '✓' : (st.started ? '•' : '');
          const scoreTxt = st.complete ? `<span class="lscore">${st.quizScore}/${st.quizTotal}</span>` : '';
          return `<button class="lesson-row" data-lesson="${l.id}">
              <span class="status ${cls}">${icon}</span>
              <span class="lnum">${l.number}.</span>
              <span class="ltitle">${esc(l.title)}</span>
              ${scoreTxt}
              <span class="chev">›</span>
            </button>`;
        }).join('');
        return `<div class="phase unlocked" data-phase="1">
            <div class="node"><span class="node-num">1</span></div>
            <div class="phase-body">
              <div class="phase-title">${esc(p.title)}</div>
              <div class="phase-progress"><div class="bar"><div class="fill" style="width:${pct}%"></div></div><span>${done}/${total}</span></div>
              <div class="lesson-list">${lessonsHtml}</div>
            </div>
          </div>`;
      }
      return `<div class="phase locked" data-phase="${p.number}">
          <div class="node"><span class="lock">🔒</span></div>
          <div class="phase-body">
            <div class="phase-title">${p.number}. ${esc(p.title)}</div>
            <div class="phase-sub">Coming soon</div>
          </div>
        </div>`;
    }).join('');

    main.innerHTML = `
      <div class="hero">
        <h1>Build a Brain</h1>
        <p class="tagline">Your path from arithmetic to a real, working neural network — one lesson at a time. 14 phases. Start with the math.</p>
        <div class="overall-progress">
          <div class="bar big"><div class="fill" style="width:${pct}%"></div></div>
          <span>${done}/${total} lessons complete in Phase 1</span>
        </div>
      </div>
      <div class="path">${phasesHtml}</div>
    `;

    $$('.lesson-row').forEach(b => b.onclick = () => { location.hash = '#lesson/' + b.dataset.lesson; });
    $$('.phase.locked').forEach(el => el.onclick = () => toast("Coming soon — this phase hasn't been written yet."));
  }

  // ================= LESSON VIEW =================
  function renderLesson(id){
    const l = LESSON_BY_ID[id];
    if(!l){ location.hash = ''; return; }
    markStarted(id);

    const idx = PHASE1_LESSONS.findIndex(x => x.id === id);
    const prev = PHASE1_LESSONS[idx-1], next = PHASE1_LESSONS[idx+1];

    const objectivesHtml = l.objectives.map(o => `<li>${esc(o)}</li>`).join('');
    const explanationHtml = l.explanation.map(p => `<p>${esc(p)}</p>`).join('');
    const exampleStepsHtml = l.example.steps.map(s => `<li>${esc(s)}</li>`).join('');
    const practiceHtml = l.practice.map((pr,i) => `
        <div class="practice-item">
          <div class="practice-problem"><b>Problem ${i+1}.</b> ${esc(pr.problem)}</div>
          <button class="reveal-btn" data-idx="${i}">Show solution</button>
          <div class="practice-solution" id="psol-${i}" hidden>${esc(pr.solution)}</div>
        </div>`).join('');
    const quizHtml = l.quiz.map((q,i) => renderQuizQuestion(q,i)).join('');

    main.innerHTML = `
      <button class="back-btn" id="backBtn">← Roadmap</button>
      <div class="lesson-crumb">Phase 1 · Lesson ${l.number} of ${PHASE1_LESSONS.length}</div>
      <h1 class="lesson-title">${esc(l.title)}</h1>

      <section class="card">
        <h2>What you'll learn</h2>
        <ul class="objectives">${objectivesHtml}</ul>
      </section>

      <section class="card explanation">${explanationHtml}</section>

      <section class="card example">
        <h2>Worked example</h2>
        <div class="ex-problem">${esc(l.example.problem)}</div>
        <ol class="ex-steps">${exampleStepsHtml}</ol>
        <div class="ex-answer">Answer: ${esc(l.example.answer)}</div>
      </section>

      <section class="card">
        <h2>Practice problems</h2>
        ${practiceHtml}
      </section>

      <section class="card quiz" id="quizSection">
        <h2>Check your understanding</h2>
        <div id="quizList">${quizHtml}</div>
        <button class="bigbtn" id="finishQuiz" disabled>Answer all questions to finish</button>
        <div id="quizResult" class="quiz-result" hidden></div>
      </section>

      <div class="lesson-nav">
        ${prev ? `<button class="navbtn" id="prevBtn">← ${esc(prev.title)}</button>` : '<span></span>'}
        ${next ? `<button class="navbtn" id="nextBtn">${esc(next.title)} →</button>` : '<span></span>'}
      </div>
    `;

    $('#backBtn').onclick = () => { location.hash = ''; };
    if(prev) $('#prevBtn').onclick = () => { location.hash = '#lesson/' + prev.id; };
    if(next) $('#nextBtn').onclick = () => { location.hash = '#lesson/' + next.id; };

    $$('.reveal-btn').forEach(b => b.onclick = () => {
      const sol = $('#psol-' + b.dataset.idx);
      const hidden = sol.hasAttribute('hidden');
      if(hidden){ sol.removeAttribute('hidden'); b.textContent = 'Hide solution'; }
      else { sol.setAttribute('hidden',''); b.textContent = 'Show solution'; }
    });

    wireQuiz(l);
  }

  function renderQuizQuestion(q, i){
    const head = `<div class="quiz-q"><div class="qtext"><b>Q${i+1}.</b> ${esc(q.question)}</div>`;
    if(q.type === 'mc'){
      const choices = q.choices.map((c,ci) =>
        `<button class="choice" data-qi="${i}" data-ci="${ci}">${esc(c)}</button>`).join('');
      return `${head}<div class="choices" data-qi="${i}">${choices}</div><div class="qfeedback" id="qf-${i}"></div></div>`;
    }
    return `${head}<div class="short-answer">
        <input type="text" id="qin-${i}" placeholder="Type your answer">
        <button class="checkbtn" data-qi="${i}">Check</button>
      </div><div class="qfeedback" id="qf-${i}"></div></div>`;
  }

  function wireQuiz(l){
    const answered = {}; // qi -> boolean (was it correct)

    function checkDone(){
      const answeredCount = Object.keys(answered).length;
      const allAnswered = answeredCount === l.quiz.length;
      const btn = $('#finishQuiz');
      btn.disabled = !allAnswered;
      btn.textContent = allAnswered ? 'Finish quiz' : `Answer all questions (${answeredCount}/${l.quiz.length})`;
    }

    l.quiz.forEach((q, i) => {
      if(q.type === 'mc'){
        $$(`.choices[data-qi="${i}"] .choice`).forEach(btn => {
          btn.onclick = () => {
            if(answered[i] !== undefined) return;
            const ci = +btn.dataset.ci;
            const correct = ci === q.answerIndex;
            answered[i] = correct;
            $$(`.choices[data-qi="${i}"] .choice`).forEach(b => b.disabled = true);
            btn.classList.add(correct ? 'correct' : 'incorrect');
            if(!correct){
              const correctBtn = $(`.choices[data-qi="${i}"] .choice[data-ci="${q.answerIndex}"]`);
              if(correctBtn) correctBtn.classList.add('correct');
            }
            const fb = $('#qf-' + i);
            fb.classList.add('show', correct ? 'good' : 'bad');
            fb.textContent = (correct ? 'Correct! ' : 'Not quite. ') + q.explanation;
            checkDone();
          };
        });
      } else {
        const doCheck = () => {
          if(answered[i] !== undefined) return;
          const input = $('#qin-' + i);
          const val = input.value.trim().toLowerCase();
          const accepted = [q.answer].concat(q.acceptable || []).map(a => String(a).trim().toLowerCase());
          const correct = val.length > 0 && accepted.indexOf(val) !== -1;
          answered[i] = correct;
          input.disabled = true;
          $(`.checkbtn[data-qi="${i}"]`).disabled = true;
          const fb = $('#qf-' + i);
          fb.classList.add('show', correct ? 'good' : 'bad');
          fb.textContent = (correct ? 'Correct! ' : `Not quite — the answer was "${q.answer}". `) + q.explanation;
          checkDone();
        };
        $(`.checkbtn[data-qi="${i}"]`).onclick = doCheck;
        $('#qin-' + i).addEventListener('keydown', e => { if(e.key === 'Enter') doCheck(); });
      }
    });

    $('#finishQuiz').onclick = () => {
      const total = l.quiz.length;
      const score = Object.keys(answered).filter(k => answered[k]).length;
      markComplete(l.id, score, total);
      $('#finishQuiz').hidden = true;
      const res = $('#quizResult');
      res.hidden = false;
      res.innerHTML = `<h3>${score}/${total} correct</h3><p>${quizMessage(score,total)}</p>
        <button class="bigbtn" id="toRoadmap">Back to roadmap</button>`;
      $('#toRoadmap').onclick = () => { location.hash = ''; };
    };

    checkDone();
  }

  function quizMessage(score, total){
    const pct = score / total;
    if(pct === 1) return "Perfect score! You've fully got this one.";
    if(pct >= 0.8) return "Great work — you've got a solid handle on this.";
    if(pct >= 0.6) return "Good effort. If anything felt shaky, reread the explanation above.";
    return "This one's tricky — it's worth reviewing the lesson and trying the practice problems again.";
  }

  // ================= SETTINGS SHEET =================
  $('#gearBtn').onclick = () => openSheet();
  $('#closeSheet').onclick = () => $('#sheet').classList.remove('show');
  $('#sheet').addEventListener('click', e => { if(e.target.id === 'sheet') e.target.classList.remove('show'); });
  function openSheet(){
    const {done, total} = phase1Progress();
    $('#s_done').textContent = `${done}/${total}`;
    const scored = PHASE1_LESSONS.filter(l => lessonState(l.id).complete);
    if(scored.length){
      const avg = scored.reduce((sum,l) => {
        const s = lessonState(l.id);
        return sum + (s.quizScore / s.quizTotal);
      }, 0) / scored.length;
      $('#s_avg').textContent = Math.round(avg*100) + '%';
    } else {
      $('#s_avg').textContent = '—';
    }
    $('#sheet').classList.add('show');
  }
  $('#resetBtn').onclick = () => {
    if(!confirm('Erase ALL lesson progress on this device? This cannot be undone.')) return;
    progress = {lessons:{}};
    saveProgress();
    $('#sheet').classList.remove('show');
    route();
  };

  // ================= BOOT =================
  route();
})();
