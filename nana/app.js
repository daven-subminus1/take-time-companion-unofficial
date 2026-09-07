/**
 * Nana (Trio) Companion Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    collectedTrios: [],
    targetNumber: null
  };

  const trioListElem = document.getElementById('collectedTrioList');
  const luckySevenNotice = document.getElementById('luckySevenNotice');

  function renderTrios() {
    trioListElem.innerHTML = '';
    if (state.collectedTrios.length === 0) {
      trioListElem.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;">Chưa có bộ Ba nào được thu thập.</span>`;
    } else {
      state.collectedTrios.forEach((num, index) => {
        const chip = document.createElement('div');
        chip.className = `trio-chip ${num === 7 ? 'lucky-seven' : ''}`;
        chip.innerHTML = `
          <span>Bộ số ${num} (3x)</span>
          <button onclick="removeTrio(${index})" style="background:none; border:none; color:var(--text-muted); cursor:pointer; margin-left:6px;">✕</button>
        `;
        trioListElem.appendChild(chip);
      });
    }

    const hasSeven = state.collectedTrios.includes(7);
    if (hasSeven) {
      luckySevenNotice.style.display = 'block';
      showToast('🎉 CHIẾN THẮNG TUYỆT ĐỐI VỚI BỘ BA SỐ 7 MAY MẮN!');
    } else if (state.collectedTrios.length >= 3) {
      showToast('🏆 BẠN ĐÃ THU THẬP ĐỦ 3 BỘ BA VÀ CHIẾN THẮNG!');
    } else {
      luckySevenNotice.style.display = 'none';
    }
  }

  window.addTrio = function(num) {
    if (state.collectedTrios.length >= 3) {
      showToast('Đã đủ 3 bộ Ba!');
      return;
    }
    state.collectedTrios.push(num);
    renderTrios();
    showToast(`Đã ghi nhận bộ Ba số ${num}`);
  };

  window.removeTrio = function(index) {
    state.collectedTrios.splice(index, 1);
    renderTrios();
  };

  window.resetNana = function() {
    state.collectedTrios = [];
    renderTrios();
    showToast('Đã bắt đầu ván mới');
  };

  renderTrios();
});
