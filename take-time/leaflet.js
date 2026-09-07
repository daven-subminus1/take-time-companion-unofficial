/**
 * Take Time - Leaflet Viewer Logic
 */

const LEAFLET_DATA = [
  {
    page: 1,
    chapterId: 1,
    roman: "I",
    title: "Chương I: Awakening",
    subtitle: "Giới thiệu luật cơ bản của Mặt Đồng Hồ (Clock Rules) & Phân đoạn (Segment Rules)",
    description: "Chương mở đầu hướng dẫn bạn cách phân bổ bài vào các cung giờ xung quanh đồng hồ. Quy tắc kiểm tra khi kết thúc: giá trị mỗi cung phải tăng dần (hoặc bằng nhau) theo chiều kim đồng hồ từ kim xuất phát.",
    image: "leaflet_pages/leaflet_page_1.webp",
    rules: [
      { label: "Clock Rules (Vô tận ∞)", text: "Giá trị phân đoạn có thể vượt quá 24 ở 3 màn đầu tiên (Clock 1-3). Từ màn 4 trở đi, tối đa là 24." },
      { label: "Resolution", text: "Ít nhất 1 lá bài ở mỗi 6 cung giờ. Giá trị các cung tăng dần theo chiều kim đồng hồ." },
      { label: "Placement (1 & 2)", text: "Hai lá bài đầu tiên cả nhóm đánh bắt buộc phải đặt vào 2 cung giờ có đánh dấu 1 và 2." }
    ]
  },
  {
    page: 2,
    chapterId: 2,
    roman: "II",
    title: "Chương II: Shadows",
    subtitle: "Ký hiệu cấm số & Quy tắc phủ bóng",
    description: "Trong chương này, các cung giờ xuất hiện ký hiệu cấm: không được phép đặt lá bài có giá trị trùng với con số được chỉ định.",
    image: "leaflet_pages/leaflet_page_2.webp",
    rules: [
      { label: "Segment Rules (Ký hiệu cấm)", text: "Không được đặt bất kỳ lá bài nào có giá trị trùng với số bị cấm cạnh phân đoạn này." },
      { label: "Clock Rules", text: "Kiểm tra kỹ các điều kiện tăng dần và liên kết giữa các cung liền kề." }
    ]
  },
  {
    page: 3,
    chapterId: 3,
    roman: "III",
    title: "Chương III: Silence",
    subtitle: "Vị trí đặt kim đồng hồ & Thảo luận hạn chế",
    description: "Quy tắc đặt kim đồng hồ trong giai đoạn thảo luận (Discussion Phase). Người chơi cần phối hợp chiến thuật chọn cung giờ bắt đầu trước khi chơi bài.",
    image: "leaflet_pages/leaflet_page_3.webp",
    rules: [
      { label: "Clock Hand Placement", text: "Trong pha thảo luận, người chơi cùng nhau quyết định đặt kim đồng hồ vào phân đoạn phù hợp." },
      { label: "Resolution", text: "Tuân thủ chặt chẽ thứ tự tăng dần từ vị trí kim đồng hồ." }
    ]
  },
  {
    page: 4,
    chapterId: 4,
    roman: "IV",
    title: "Chương IV: Roar",
    subtitle: "Bắt buộc đánh lá bài cao nhất (Highest-Value Card)",
    description: "Ở chương Roar, đến lượt bạn, bạn BẮT BUỘC phải đánh lá bài có giá trị cao nhất hiện có trên tay. Nếu có hai lá cùng giá trị cao nhất, bạn được chọn một trong hai.",
    image: "leaflet_pages/leaflet_page_4.webp",
    rules: [
      { label: "Placement Rule", text: "Bắt buộc phải đánh lá bài cao nhất trên tay bạn ở mỗi lượt." },
      { label: "Clock Rules", text: "Cân nhắc kỹ các lá bài lớn để không làm vỡ chuỗi tăng dần của mặt đồng hồ." }
    ]
  },
  {
    page: 5,
    chapterId: 5,
    roman: "V",
    title: "Chương V: Convergence",
    subtitle: "Mỗi phân đoạn chính xác 2 lá bài",
    description: "Mỗi phân đoạn trên mặt đồng hồ phải có ĐÚNG 2 lá bài. Các giá trị và tổng số được cân nhắc cẩn thận để đồng quy vào từng cung.",
    image: "leaflet_pages/leaflet_page_5.webp",
    rules: [
      { label: "Resolution", text: "Phải có chính xác 2 lá bài cạnh mỗi phân đoạn." },
      { label: "Clock Rules", text: "Kiểm tra sự cân đối giữa các lá Mặt Trời và Mặt Trăng." }
    ]
  },
  {
    page: 6,
    chapterId: 6,
    roman: "VI",
    title: "Chương VI: Discord",
    subtitle: "Hiệu số giữa các lá bài (Difference of Cards)",
    description: "Thay vì tính tổng giá trị các lá bài trong mỗi phân đoạn, ở chương này ta tính HIỆU SỐ (Difference) giữa lá cao nhất và thấp nhất. Để vượt qua thử thách, hiệu số này phải tăng dần theo chiều kim đồng hồ!",
    image: "leaflet_pages/leaflet_page_6.webp",
    rules: [
      { label: "Difference Rule", text: "Tính hiệu số (lá lớn trừ lá bé) trong mỗi cung giờ 2 lá." },
      { label: "Resolution", text: "Hiệu số giữa các cung phải tăng dần theo chiều kim đồng hồ." }
    ]
  },
  {
    page: 7,
    chapterId: 7,
    roman: "VII",
    title: "Chương VII: Voyage",
    subtitle: "Rút bài bổ sung khi đặt vào cung giờ đặc biệt",
    description: "Khi bạn đặt một lá bài vào phân đoạn có ký hiệu rút bài, bạn được rút ngay lập tức 1 lá bài từ chồng bài bốc (deck) nếu còn bài.",
    image: "leaflet_pages/leaflet_page_7.webp",
    rules: [
      { label: "Segment Rules (Draw Card)", text: "Đặt bài vào cung này sẽ được rút ngay 1 lá bài mới từ chồng bài tẩy." },
      { label: "Hand Management", text: "Quản lý số lượng bài trên tay một cách hiệu quả." }
    ]
  },
  {
    page: 8,
    chapterId: 8,
    roman: "VIII",
    title: "Chương VIII: Revolution",
    subtitle: "Xoay mặt đồng hồ theo chiều kim đồng hồ (+60°)",
    description: "Bất cứ khi nào bạn đặt bài vào phân đoạn có biểu tượng xoay, hãy lập tức xoay mặt đồng hồ 1 phân đoạn (60 độ) theo chiều kim đồng hồ! Các lá bài xung quanh và kim đồng hồ vẫn giữ nguyên vị trí.",
    image: "leaflet_pages/leaflet_page_8.webp",
    rules: [
      { label: "Rotation Rule (Xoay 60°)", text: "Mỗi khi đặt bài vào cung xoay, xoay mặt đồng hồ 1 bước (60°) theo chiều kim đồng hồ." },
      { label: "Lưu ý", text: "Vị trí bài trên bàn không di chuyển, chỉ có mặt đồng hồ bên dưới xoay!" }
    ]
  },
  {
    page: 9,
    chapterId: 9,
    roman: "IX",
    title: "Chương IX: Balance",
    subtitle: "Cân bằng các yếu tố Mặt Trời & Mặt Trăng",
    description: "Thử thách đỉnh cao về sự cân đối giữa các cung giờ đối xứng và kiểm soát nhịp độ ra bài.",
    image: "leaflet_pages/leaflet_page_9.webp",
    rules: [
      { label: "Segment Rules", text: "Tuân thủ các điều kiện cân bằng ký hiệu trên mặt đồng hồ." },
      { label: "Resolution", text: "Không được để bất kỳ phân đoạn nào vi phạm ràng buộc đối xứng." }
    ]
  },
  {
    page: 10,
    chapterId: 10,
    roman: "X",
    title: "Chương X: Finale",
    subtitle: "Khép lại chuỗi thử thách chính & Kim Giây (Second Hand)",
    description: "Lấy Kim Giây (Second Hand) từ phong bao Rebirth. Bạn sẽ đối mặt với câu đố phức tạp nhất để hoàn thành trọn vẹn hành trình chính của Take Time.",
    image: "leaflet_pages/leaflet_page_10.webp",
    rules: [
      { label: "Second Hand Rule", text: "Sử dụng Kim Giây với các quy tắc tương tác kép." },
      { label: "Finale Resolution", text: "Vượt qua bài kiểm tra cuối cùng để mở khóa chế độ Rebirth." }
    ]
  },
  {
    page: 11,
    chapterId: 12, // Rebirth mode in data.js is chapter 12
    roman: "Rebirth",
    title: "Rebirth Mode (Epilogue)",
    subtitle: "Chế độ Chơi Lại Nâng Cao & Thử Thách Bổ Sung",
    description: "CHÚ Ý: Chỉ đọc tờ này sau khi bạn đã trải nghiệm xong các màn chơi chính! Rebirth Mode cho phép chơi lại bất kỳ màn nào trong 40 Clocks kèm các token thử thách đặc biệt (Modifiers).",
    image: "leaflet_pages/leaflet_page_11.webp",
    rules: [
      { label: "Rebirth Setup", text: "Chọn bất kỳ màn nào trong 40 Clocks kết hợp cùng mặt đồng hồ Rebirth Clock." },
      { label: "Challenge Tokens", text: "Áp dụng các Token thử thách bổ sung (Pass Card, Solar Placement, v.v.)." }
    ]
  }
];

// App State
const leafletState = {
  currentPageIndex: 0,
  zoom: 1,
  panX: 0,
  panY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  lastPanX: 0,
  lastPanY: 0,
  isFullscreen: false
};

// DOM Elements
let dom = {};

document.addEventListener('DOMContentLoaded', () => {
  dom = {
    leafletPills: document.getElementById('leafletPills'),
    leafletSelectJump: document.getElementById('leafletSelectJump'),
    leafletPageTitle: document.getElementById('leafletPageTitle'),
    leafletPageSubtitle: document.getElementById('leafletPageSubtitle'),
    leafletPageBadge: document.getElementById('leafletPageBadge'),
    leafletStageBadge: document.getElementById('leafletStageBadge'),
    leafletImage: document.getElementById('leafletImage'),
    leafletImageWrapper: document.getElementById('leafletImageWrapper'),
    leafletStage: document.getElementById('leafletStage'),
    leafletViewerCard: document.getElementById('leafletViewerCard'),
    leafletSpinner: document.getElementById('leafletSpinner'),
    leafletInfoTitle: document.getElementById('leafletInfoTitle'),
    leafletInfoDesc: document.getElementById('leafletInfoDesc'),
    leafletInfoPoints: document.getElementById('leafletInfoPoints'),
    zoomIndicator: document.getElementById('zoomIndicator'),
    btnPrevPage: document.getElementById('btnPrevPage'),
    btnNextPage: document.getElementById('btnNextPage'),
    btnBackToChapterBoard: document.getElementById('btnBackToChapterBoard')
  };

  initUI();
  setupEventListeners();

  // Read URL params (e.g. ?page=3 or ?chapter=3)
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = parseInt(urlParams.get('page'));
  const chapterParam = parseInt(urlParams.get('chapter'));

  let targetIndex = 0;
  if (!isNaN(pageParam) && pageParam >= 1 && pageParam <= LEAFLET_DATA.length) {
    targetIndex = pageParam - 1;
  } else if (!isNaN(chapterParam)) {
    const idx = LEAFLET_DATA.findIndex(d => d.chapterId === chapterParam);
    if (idx !== -1) targetIndex = idx;
  }

  goToPage(targetIndex);
});

function initUI() {
  // Populate Carousel Pills
  dom.leafletPills.innerHTML = '';

  let isDraggingPills = false;
  let pillsDraggedDist = 0;
  let startX = 0;
  let scrollStart = 0;

  // Cuộn con lăn chuột ngang
  dom.leafletPills.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      dom.leafletPills.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  // Kéo rê chuột
  dom.leafletPills.addEventListener('mousedown', (e) => {
    isDraggingPills = true;
    pillsDraggedDist = 0;
    startX = e.pageX - dom.leafletPills.offsetLeft;
    scrollStart = dom.leafletPills.scrollLeft;
    dom.leafletPills.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingPills) return;
    const x = e.pageX - dom.leafletPills.offsetLeft;
    const diff = (x - startX) * 1.5;
    pillsDraggedDist += Math.abs(diff);
    dom.leafletPills.scrollLeft = scrollStart - diff;
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingPills) {
      isDraggingPills = false;
      dom.leafletPills.style.cursor = 'grab';
      setTimeout(() => { pillsDraggedDist = 0; }, 60);
    }
  });

  LEAFLET_DATA.forEach((item, index) => {
    const pill = document.createElement('button');
    pill.className = `chapter-pill ${item.roman === 'Rebirth' ? 'special' : ''}`;
    pill.id = `leaflet-pill-${index}`;
    const label = item.roman === 'Rebirth' ? 'Rebirth' : `Ch.${item.chapterId}`;
    pill.innerHTML = `<span>${label}</span>`;
    pill.title = item.title;
    pill.onclick = (e) => {
      if (pillsDraggedDist > 6) {
        e.preventDefault();
        return;
      }
      goToPage(index);
    };
    dom.leafletPills.appendChild(pill);
  });

  // Populate Dropdown Jump
  dom.leafletSelectJump.innerHTML = '';
  LEAFLET_DATA.forEach((item, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.textContent = `Trang ${item.page}: ${item.title}`;
    dom.leafletSelectJump.appendChild(opt);
  });
}

function goToPage(index) {
  if (index < 0) index = 0;
  if (index >= LEAFLET_DATA.length) index = LEAFLET_DATA.length - 1;

  leafletState.currentPageIndex = index;
  const current = LEAFLET_DATA[index];

  // Reset Zoom & Pan
  leafletState.zoom = 1;
  leafletState.panX = 0;
  leafletState.panY = 0;
  updateTransform();

  // Update Headers & Info
  dom.leafletPageTitle.textContent = current.title;
  dom.leafletPageSubtitle.textContent = current.subtitle;
  dom.leafletPageBadge.textContent = `Trang ${current.page} / ${LEAFLET_DATA.length}`;
  dom.leafletStageBadge.textContent = `${current.roman}: ${current.title.split(':')[1] || current.title}`;

  // Update Dropdown
  dom.leafletSelectJump.value = index;

  // Update Pills Active State
  document.querySelectorAll('.chapter-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx === index);
  });
  const activePill = document.getElementById(`leaflet-pill-${index}`);
  if (activePill) {
    activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  // Update Prev/Next Buttons
  dom.btnPrevPage.disabled = (index === 0);
  dom.btnNextPage.disabled = (index === LEAFLET_DATA.length - 1);
  dom.btnPrevPage.style.opacity = index === 0 ? '0.4' : '1';
  dom.btnNextPage.style.opacity = index === LEAFLET_DATA.length - 1 ? '0.4' : '1';

  // Update Link back to board
  if (dom.btnBackToChapterBoard) {
    dom.btnBackToChapterBoard.href = `index.html?chapter=${current.chapterId}`;
    dom.btnBackToChapterBoard.textContent = `⏱️ Mở Bàn Chơi ${current.title}`;
  }

  // Load Image with Spinner
  dom.leafletSpinner.style.display = 'flex';
  const img = new Image();
  img.src = current.image;
  img.onload = () => {
    dom.leafletImage.src = current.image;
    dom.leafletSpinner.style.display = 'none';
  };
  img.onerror = () => {
    dom.leafletSpinner.innerHTML = `<span style="color:var(--accent-red);">Không thể tải trang ${current.page}</span>`;
  };

  // Render Info section
  dom.leafletInfoTitle.textContent = `📖 Tóm Tắt Luật: ${current.title}`;
  dom.leafletInfoDesc.textContent = current.description;
  dom.leafletInfoPoints.innerHTML = '';
  current.rules.forEach(r => {
    const point = document.createElement('div');
    point.className = 'leaflet-rule-item';
    point.innerHTML = `
      <strong class="rule-badge">${r.label}</strong>
      <p class="rule-text">${r.text}</p>
    `;
    dom.leafletInfoPoints.appendChild(point);
  });

  // Preload next and prev images
  preloadAdjacentPages(index);
}

function preloadAdjacentPages(currentIndex) {
  if (currentIndex > 0) {
    const prev = new Image();
    prev.src = LEAFLET_DATA[currentIndex - 1].image;
  }
  if (currentIndex < LEAFLET_DATA.length - 1) {
    const next = new Image();
    next.src = LEAFLET_DATA[currentIndex + 1].image;
  }
}

function changePage(delta) {
  goToPage(leafletState.currentPageIndex + delta);
}

function jumpToSelectedPage(value) {
  goToPage(parseInt(value));
}

function updateTransform() {
  dom.leafletImageWrapper.style.transform = `translate(${leafletState.panX}px, ${leafletState.panY}px) scale(${leafletState.zoom})`;
  if (dom.zoomIndicator) {
    dom.zoomIndicator.textContent = `${Math.round(leafletState.zoom * 100)}%`;
  }
}

function zoomLeaflet(delta) {
  const newZoom = Math.min(Math.max(leafletState.zoom + delta, 0.8), 3.5);
  leafletState.zoom = parseFloat(newZoom.toFixed(2));
  if (leafletState.zoom <= 1) {
    leafletState.panX = 0;
    leafletState.panY = 0;
  }
  updateTransform();
}

function resetLeafletZoom() {
  leafletState.zoom = 1;
  leafletState.panX = 0;
  leafletState.panY = 0;
  updateTransform();
  showToast('Đã đặt lại kích thước chuẩn');
}

function toggleFullscreen() {
  const target = dom.leafletViewerCard;
  if (!document.fullscreenElement) {
    target.requestFullscreen().then(() => {
      target.classList.add('in-fullscreen');
      document.getElementById('btnFullscreen').textContent = '✕ Thoát toàn màn hình';
    }).catch(err => {
      console.warn('Fullscreen not allowed', err);
    });
  } else {
    document.exitFullscreen().then(() => {
      target.classList.remove('in-fullscreen');
      document.getElementById('btnFullscreen').textContent = '⛶ Toàn màn hình';
    });
  }
}

// Mouse & Touch Gestures
function setupEventListeners() {
  const stage = dom.leafletStage;

  // Mouse wheel zoom
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    zoomLeaflet(delta);
  }, { passive: false });

  // Mouse drag pan
  stage.addEventListener('mousedown', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') return;
    leafletState.isDragging = true;
    leafletState.dragStartX = e.clientX - leafletState.panX;
    leafletState.dragStartY = e.clientY - leafletState.panY;
    stage.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!leafletState.isDragging) return;
    leafletState.panX = e.clientX - leafletState.dragStartX;
    leafletState.panY = e.clientY - leafletState.dragStartY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    if (leafletState.isDragging) {
      leafletState.isDragging = false;
      stage.style.cursor = 'grab';
    }
  });

  // Touch Support (Pinch zoom & touch drag)
  let initialDistance = 0;
  let initialZoom = 1;

  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      leafletState.isDragging = true;
      leafletState.dragStartX = e.touches[0].clientX - leafletState.panX;
      leafletState.dragStartY = e.touches[0].clientY - leafletState.panY;
    } else if (e.touches.length === 2) {
      leafletState.isDragging = false;
      initialDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialZoom = leafletState.zoom;
    }
  }, { passive: true });

  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && leafletState.isDragging && leafletState.zoom > 1) {
      leafletState.panX = e.touches[0].clientX - leafletState.dragStartX;
      leafletState.panY = e.touches[0].clientY - leafletState.dragStartY;
      updateTransform();
    } else if (e.touches.length === 2 && initialDistance > 0) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / initialDistance;
      leafletState.zoom = Math.min(Math.max(initialZoom * factor, 0.8), 3.5);
      updateTransform();
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    leafletState.isDragging = false;
    initialDistance = 0;
  }, { passive: true });

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      changePage(-1);
    } else if (e.key === 'ArrowRight') {
      changePage(1);
    } else if (e.key === '+' || e.key === '=') {
      zoomLeaflet(0.25);
    } else if (e.key === '-' || e.key === '_') {
      zoomLeaflet(-0.25);
    } else if (e.key === '0') {
      resetLeafletZoom();
    }
  });

  // Fullscreen change listener
  document.addEventListener('fullscreenchange', () => {
    const isFull = !!document.fullscreenElement;
    dom.leafletViewerCard.classList.toggle('in-fullscreen', isFull);
    const btn = document.getElementById('btnFullscreen');
    if (btn) {
      btn.textContent = isFull ? '✕ Thoát toàn màn hình' : '⛶ Toàn màn hình';
    }
  });
}
