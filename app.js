/**
 * Take Time - Application Logic (Resilient & Defensive)
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentChapterId: 1,
    currentLevelId: '1.1',
    rotationDegree: 0,
    zoomLevel: 1,
    progress: loadProgress()
  };

  // Safe DOM Elements getter
  const el = (id) => document.getElementById(id);

  function loadProgress() {
    try {
      const saved = localStorage.getItem('take_time_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('take_time_progress', JSON.stringify(state.progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }

  // Drag & Scroll State for Chapters
  let isDraggingPills = false;
  let pillsDraggedDistance = 0;
  let dragStartX = 0;
  let scrollStartX = 0;

  function setupChapterPillsDrag(container) {
    if (!container || container._hasDragSetup) return;
    container._hasDragSetup = true;

    // Cuộn ngang bằng con lăn chuột (Mouse Wheel)
    container.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // Kéo rê bằng chuột (Mouse Drag & Scroll)
    container.addEventListener('mousedown', (e) => {
      isDraggingPills = true;
      pillsDraggedDistance = 0;
      dragStartX = e.pageX - container.offsetLeft;
      scrollStartX = container.scrollLeft;
      container.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingPills) return;
      const x = e.pageX - container.offsetLeft;
      const diff = (x - dragStartX) * 1.5;
      pillsDraggedDistance += Math.abs(diff);
      container.scrollLeft = scrollStartX - diff;
    });

    window.addEventListener('mouseup', () => {
      if (isDraggingPills) {
        isDraggingPills = false;
        container.style.cursor = 'grab';
        // Reset distance after click handler has fired
        setTimeout(() => { pillsDraggedDistance = 0; }, 60);
      }
    });
  }

  // Render Chapters Carousel Pills
  function renderChapterPills() {
    const container = el('chapterPills');
    if (!container) return;

    setupChapterPillsDrag(container);

    container.innerHTML = '';
    TAKE_TIME_DATA.chapters.forEach(ch => {
      const pill = document.createElement('button');
      pill.className = `chapter-pill ${ch.isSpecial ? 'special' : ''} ${ch.id === state.currentChapterId ? 'active' : ''}`;
      pill.id = `pill-ch-${ch.id}`;
      const label = ch.id === 12 ? 'Rebirth' : `Ch.${ch.id}`;
      pill.innerHTML = `<span>${label}</span>`;
      pill.title = `Chương ${ch.roman}: ${ch.title}`;

      pill.onclick = (e) => {
        // Nếu vừa kéo rê quá 5px thì không kích hoạt click
        if (pillsDraggedDistance > 6) {
          e.preventDefault();
          return;
        }
        selectChapter(ch.id);
      };

      container.appendChild(pill);
    });

    // Cuộn mượt để đưa chương đang chọn vào giữa tầm mắt
    const activePill = el(`pill-ch-${state.currentChapterId}`);
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function selectChapter(chapterId) {
    state.currentChapterId = chapterId;
    state.rotationDegree = 0;
    state.zoomLevel = 1;
    updateBoardTransform();

    renderChapterPills();

    const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    // Chapter Title
    const titleEl = el('currentChapterTitle');
    if (titleEl) {
      titleEl.textContent = `Chương ${chapter.roman}: ${chapter.title}`;
    }

    // Top Leaflet Button
    const btnTopLeaflet = el('btnTopLeaflet');
    if (btnTopLeaflet) {
      btnTopLeaflet.href = `leaflet.html?chapter=${chapterId}`;
    }

    // Sleeve Box Preview (if present)
    const sleeveBox = el('sleevePreviewBox');
    if (sleeveBox) {
      if (chapter.front) {
        sleeveBox.style.display = 'flex';
        const thumb = el('sleeveThumb');
        const title = el('sleeveTitle');
        const desc = el('sleeveDesc');
        if (thumb) thumb.src = chapter.front;
        if (title) title.textContent = `Sleeve: ${chapter.title}`;
        if (desc) desc.textContent = chapter.description || 'Chạm vào ảnh bìa để lật xem 2 mặt Sleeve.';
      } else {
        sleeveBox.style.display = 'none';
      }
    }

    // Chapter 8 Rotation Box (if present)
    const rotBox = el('chapter8RotationBox');
    const rotOverlay = el('rotationIndicatorOverlay');
    if (rotBox) {
      rotBox.style.display = chapter.hasRotation ? 'flex' : 'none';
    }
    if (rotOverlay) {
      rotOverlay.style.display = chapter.hasRotation ? 'flex' : 'none';
    }

    renderLevels(chapter);
    updateUrlParams(chapterId, state.currentLevelId);
  }

  function updateUrlParams(chapterId, levelId) {
    try {
      const url = new URL(window.location.href);
      if (chapterId) url.searchParams.set('chapter', chapterId);
      if (levelId) url.searchParams.set('level', levelId);
      window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    } catch (e) {
      // Fallback
    }
  }

  function renderLevels(chapter) {
    const row = el('levelSelectorRow');
    if (!row) return;

    row.innerHTML = '';

    if (!chapter.levels || chapter.levels.length === 0) {
      row.innerHTML = `
        <div style="grid-column: span 4; text-align: center; color: var(--text-muted); padding: 1.5rem; background: var(--bg-card); border-radius: var(--radius-md);">
          ${chapter.description || 'Không có màn chơi phụ'}
        </div>
      `;
      if (chapter.front) {
        const bImg = el('boardImage');
        const bBadge = el('currentBoardBadge');
        if (bImg) bImg.src = chapter.front;
        if (bBadge) bBadge.textContent = chapter.roman;
      }
      return;
    }

    const currentBelongs = chapter.levels.some(lvl => lvl.id === state.currentLevelId);
    if (!currentBelongs) {
      state.currentLevelId = chapter.levels[0].id;
    }

    chapter.levels.forEach(lvl => {
      const btn = document.createElement('button');
      const isCompleted = state.progress[lvl.id]?.completed;
      const stars = state.progress[lvl.id]?.stars || 0;

      btn.className = `level-btn ${lvl.id === state.currentLevelId ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;

      btn.innerHTML = `
        <span>${lvl.id}</span>
      `;
      btn.onclick = () => selectLevel(lvl.id);
      row.appendChild(btn);
    });

    loadBoard(state.currentLevelId);
  }

  function selectLevel(levelId) {
    state.currentLevelId = levelId;
    state.rotationDegree = 0;
    state.zoomLevel = 1;
    updateBoardTransform();

    const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === state.currentChapterId);
    if (chapter) renderLevels(chapter);
    loadBoard(levelId);
    updateUrlParams(state.currentChapterId, levelId);
  }

  function loadBoard(levelId) {
    const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === state.currentChapterId);
    if (!chapter) return;

    const level = chapter.levels?.find(l => l.id === levelId);
    if (level) {
      const bImg = el('boardImage');
      const bBadge = el('currentBoardBadge');
      if (bImg) bImg.src = level.url;
      if (bBadge) bBadge.textContent = `Board ${level.id}`;
      renderLevelGuides(level);
    }

    const lvlProgress = state.progress[levelId] || { completed: false, stars: 0 };
    const chk = el('levelCompletedCheckbox');
    if (chk) chk.checked = !!lvlProgress.completed;
    updateStarUI(lvlProgress.stars || 0);
  }

  // Presets mapping for cropping regions on the clock board
  const GUIDE_POS_PRESETS = {
    1: { x: 50, y: 4.8, zoom: 800 },    // 1: Top (12h)
    1.5: { x: 76, y: 12, zoom: 800 },   // 1.5: Giữa 1 và 2 (~1h)
    2: { x: 93, y: 28, zoom: 800 },     // 2: Top-Right (~2h)
    2.5: { x: 96, y: 50, zoom: 800 },   // 2.5: Giữa 2 và 3 (Sườn phải ~3h)
    3: { x: 93, y: 72, zoom: 800 },     // 3: Bottom-Right (~4h)
    3.5: { x: 76, y: 88, zoom: 800 },   // 3.5: Giữa 3 và 4 (~5h)
    4: { x: 50, y: 95.5, zoom: 800 },   // 4: Bottom (6h)
    4.5: { x: 24, y: 88, zoom: 800 },   // 4.5: Giữa 4 và 5 (~7h)
    5: { x: 7, y: 72, zoom: 800 },      // 5: Bottom-Left (~8h)
    5.5: { x: 4, y: 50, zoom: 800 },    // 5.5: Giữa 5 và 6 (Sườn trái ~9h)
    6: { x: 7, y: 28, zoom: 800 },      // 6: Top-Left (~10h)
    6.5: { x: 24, y: 12, zoom: 800 },   // 6.5: Giữa 6 và 1 (~11h)
    7: { x: 50, y: 50, zoom: 800 },     // 7: Center (Tâm đồng hồ)
    8: null                             // 8: Text-only (Chỉ dẫn phụ)
  };
  GUIDE_POS_PRESETS['top'] = GUIDE_POS_PRESETS[1];
  GUIDE_POS_PRESETS['top-right'] = GUIDE_POS_PRESETS[2];
  GUIDE_POS_PRESETS['right'] = GUIDE_POS_PRESETS[2.5];
  GUIDE_POS_PRESETS['bottom-right'] = GUIDE_POS_PRESETS[3];
  GUIDE_POS_PRESETS['bottom'] = GUIDE_POS_PRESETS[4];
  GUIDE_POS_PRESETS['bottom-left'] = GUIDE_POS_PRESETS[5];
  GUIDE_POS_PRESETS['left'] = GUIDE_POS_PRESETS[5.5];
  GUIDE_POS_PRESETS['top-left'] = GUIDE_POS_PRESETS[6];
  GUIDE_POS_PRESETS['center'] = GUIDE_POS_PRESETS[7];
  GUIDE_POS_PRESETS['text'] = null;

  function renderLevelGuides(level) {
    const card = el('levelGuideCard');
    const list = el('levelGuideList');
    const nameEl = el('levelGuideName');
    if (!card || !list) return;

    if (!level || !level.guides || level.guides.length === 0) {
      card.style.display = 'none';
      list.innerHTML = '';
      return;
    }

    card.style.display = 'block';
    if (nameEl) nameEl.textContent = `Màn ${level.id}`;

    list.innerHTML = '';
    level.guides.forEach(g => {
      const item = document.createElement('div');
      item.className = 'level-guide-item';

      let cropData = null;
      if (g.x !== undefined && g.y !== undefined) {
        cropData = { x: g.x, y: g.y, zoom: g.zoom || 400 };
      } else if (GUIDE_POS_PRESETS[g.pos] !== undefined) {
        cropData = GUIDE_POS_PRESETS[g.pos];
      }

      let thumbHtml = '';
      if (cropData) {
        const zoomVal = g.zoom || cropData.zoom || 400;
        const xVal = g.x !== undefined ? g.x : cropData.x;
        const yVal = g.y !== undefined ? g.y : cropData.y;
        thumbHtml = `
          <div class="level-guide-thumb" 
               style="background-image: url('${level.url}'); background-size: ${zoomVal}%; background-position: ${xVal}% ${yVal}%;"
               title="${g.title}">
          </div>
        `;
      } else {
        const icon = g.icon || '💡';
        thumbHtml = `
          <div class="level-guide-thumb text-only">
            <span>${icon}</span>
          </div>
        `;
      }

      item.innerHTML = `
        ${thumbHtml}
        <div class="level-guide-info">
          <div class="level-guide-item-title">${g.title}</div>
        </div>
      `;
      list.appendChild(item);
    });
  }

  function updateBoardTransform() {
    const wrapper = el('boardImageWrapper');
    if (wrapper) {
      wrapper.style.transform = `scale(${state.zoomLevel}) rotate(${state.rotationDegree}deg)`;
    }

    const rotText = el('rotationAngleText');
    if (rotText) rotText.textContent = `${state.rotationDegree}°`;

    const overlayText = el('rotationOverlayText');
    if (overlayText) overlayText.textContent = `${state.rotationDegree}°`;
  }

  window.rotateBoard = function (degrees) {
    state.rotationDegree = (state.rotationDegree + degrees) % 360;
    if (state.rotationDegree < 0) state.rotationDegree += 360;
    updateBoardTransform();
    if (typeof showToast === 'function') {
      showToast(`Đã xoay mặt đồng hồ: ${state.rotationDegree}°`);
    }
  };

  window.resetRotation = function () {
    state.rotationDegree = 0;
    updateBoardTransform();
    if (typeof showToast === 'function') {
      showToast('Đã đặt lại góc xoay ban đầu (0°)');
    }
  };

  window.zoomBoard = function (delta) {
    state.zoomLevel = Math.min(Math.max(state.zoomLevel + delta, 0.7), 2.2);
    updateBoardTransform();
  };

  window.resetZoom = function () {
    state.zoomLevel = 1;
    state.rotationDegree = 0;
    updateBoardTransform();
  };

  // Completion Checkbox (safely initialized)
  const levelCompletedCheckbox = el('levelCompletedCheckbox');
  if (levelCompletedCheckbox) {
    levelCompletedCheckbox.addEventListener('change', (e) => {
      const checked = e.target.checked;
      if (!state.progress[state.currentLevelId]) {
        state.progress[state.currentLevelId] = {};
      }
      state.progress[state.currentLevelId].completed = checked;
      if (checked && !state.progress[state.currentLevelId].stars) {
        state.progress[state.currentLevelId].stars = 3;
      }
      saveProgress();

      const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === state.currentChapterId);
      if (chapter) renderLevels(chapter);

      if (typeof showToast === 'function') {
        showToast(checked ? `🎉 Đã hoàn thành Màn ${state.currentLevelId}!` : `Đã bỏ đánh dấu Màn ${state.currentLevelId}`);
      }
    });
  }

  // Star Rating UI (safely initialized)
  function updateStarUI(stars) {
    const starButtons = document.querySelectorAll('.star-btn');
    if (!starButtons || starButtons.length === 0) return;

    starButtons.forEach(btn => {
      const val = parseInt(btn.dataset.value);
      btn.classList.toggle('filled', val <= stars);
      btn.textContent = val <= stars ? '★' : '☆';
    });
  }

  const starButtons = document.querySelectorAll('.star-btn');
  if (starButtons && starButtons.length > 0) {
    starButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const stars = parseInt(btn.dataset.value);
        if (!state.progress[state.currentLevelId]) {
          state.progress[state.currentLevelId] = {};
        }
        state.progress[state.currentLevelId].stars = stars;
        state.progress[state.currentLevelId].completed = true;

        const chk = el('levelCompletedCheckbox');
        if (chk) chk.checked = true;

        saveProgress();
        updateStarUI(stars);

        const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === state.currentChapterId);
        if (chapter) renderLevels(chapter);
        if (typeof showToast === 'function') {
          showToast(`Đã đánh giá ${stars} sao cho Màn ${state.currentLevelId}`);
        }
      });
    });
  }

  // Sleeve Flip Modal
  window.openSleeveModal = function () {
    const chapter = TAKE_TIME_DATA.chapters.find(c => c.id === state.currentChapterId);
    if (!chapter || !chapter.front) return;

    const modal = el('sleeveModal');
    const modalTitle = el('sleeveModalTitle');
    const sleeveFrontImg = el('sleeveFrontImg');
    const sleeveBackImg = el('sleeveBackImg');
    const flipCard = el('flipCard');

    if (modalTitle) modalTitle.textContent = `Sleeve Chương ${chapter.roman}: ${chapter.title}`;
    if (sleeveFrontImg) sleeveFrontImg.src = chapter.front;
    if (sleeveBackImg) sleeveBackImg.src = chapter.back || chapter.front;
    if (flipCard) flipCard.classList.remove('flipped');
    if (modal) modal.classList.add('active');
  };

  window.toggleSleeveFlip = function () {
    const flipCard = el('flipCard');
    if (flipCard) flipCard.classList.toggle('flipped');
  };

  // Modifiers (safely initialized)
  function renderModifiers() {
    const grid = el('modifiersGrid');
    if (!grid || !TAKE_TIME_DATA.modifiers) return;

    grid.innerHTML = '';
    TAKE_TIME_DATA.modifiers.forEach(mod => {
      const card = document.createElement('div');
      card.className = 'modifier-card';
      card.innerHTML = `
        <div class="modifier-icon">${mod.icon}</div>
        <div>
          <div class="modifier-title">${mod.title}</div>
          <div class="modifier-desc">${mod.desc}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Rules Modal
  window.openRulesModal = function () {
    const modal = el('rulesModal');
    const title = el('rulesModalTitle');
    const body = el('rulesModalBody');
    if (!modal) return;

    if (title) title.textContent = 'Luật chơi: Take Time';
    if (body) {
      let html = `<p style="margin-bottom:1rem; color:var(--text-sub);">${TAKE_TIME_DATA.description}</p>`;
      if (TAKE_TIME_DATA.rulesSummary) {
        TAKE_TIME_DATA.rulesSummary.forEach(r => {
          html += `<div style="margin-bottom:1rem;"><strong style="color:var(--accent-sun);">${r.title}:</strong> <p style="font-size:0.85rem; color:var(--text-sub);">${r.content}</p></div>`;
        });
      }
      html += `
        <div style="margin-top:1.5rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
          <a href="leaflet.html" class="btn-primary" style="text-decoration:none;">📜 Xem Leaflet 11 Trang (Đầy Đủ)</a>
          <a href="TT_LEAFLET_EN.pdf" target="_blank" class="btn-secondary" style="text-decoration:none;">📥 File PDF Gốc (17MB)</a>
          <a href="https://steamusercontent-a.akamaihd.net/ugc/15880191668556044870/AC14DD187496DEF1ED031FA4528682ACF9DEE970/" target="_blank" class="btn-secondary" style="text-decoration:none;">📖 Rulebook Steam</a>
        </div>
      `;
      body.innerHTML = html;
    }
    modal.classList.add('active');
  };

  // URL Synchronization on Browser Back/Forward
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const lvl = params.get('level');
    const ch = parseInt(params.get('chapter'));

    if (lvl) {
      const foundCh = TAKE_TIME_DATA.chapters.find(c => c.levels && c.levels.some(l => l.id === lvl));
      if (foundCh && foundCh.id !== state.currentChapterId) {
        selectChapter(foundCh.id);
      }
      selectLevel(lvl);
    } else if (!isNaN(ch) && ch !== state.currentChapterId) {
      selectChapter(ch);
    }
  });

  // Initialize from URL parameters (e.g. ?level=1.2 or ?chapter=2&level=2.3)
  const urlParams = new URLSearchParams(window.location.search);
  const chParam = parseInt(urlParams.get('chapter'));
  const lvlParam = urlParams.get('level');

  let targetChapterId = 1;
  if (lvlParam) {
    // Tự động tìm đúng chương chứa màn chơi này
    const foundChapter = TAKE_TIME_DATA.chapters.find(c =>
      c.levels && c.levels.some(l => l.id === lvlParam)
    );
    if (foundChapter) {
      targetChapterId = foundChapter.id;
    }
  } else if (!isNaN(chParam) && TAKE_TIME_DATA.chapters.some(c => c.id === chParam)) {
    targetChapterId = chParam;
  }

  renderChapterPills();
  selectChapter(targetChapterId);
  if (lvlParam) {
    selectLevel(lvlParam);
  }
  renderModifiers();
});
