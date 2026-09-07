/**
 * Regicide Boss Companion Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const bossNames = ['Jack (J)', 'Queen (Q)', 'King (K)'];
  const bossHPs = [20, 30, 40];
  const bossATKs = [10, 15, 20];
  const suits = ['Hearts ♥', 'Diamonds ♦', 'Clubs ♣', 'Spades ♠'];

  const state = {
    bossTier: 0,
    defeatedCount: 0,
    currentHP: 20,
    maxHP: 20,
    attack: 10,
    bossSuit: 'Hearts ♥',
    shield: 0
  };

  function updateUI() {
    const bossNameElem = document.getElementById('regBossName');
    const bossHPElem = document.getElementById('regBossHP');
    const bossATKElem = document.getElementById('regBossATK');
    const bossHPBar = document.getElementById('regBossHPBar');
    const defeatedCountElem = document.getElementById('regDefeatedCount');
    const shieldValueElem = document.getElementById('shieldValue');

    if (!bossNameElem) return;

    bossNameElem.textContent = `${bossNames[state.bossTier]} (${state.bossSuit})`;
    bossHPElem.textContent = `${state.currentHP} / ${state.maxHP}`;
    bossATKElem.textContent = `${Math.max(0, state.attack - state.shield)} (Gốc: ${state.attack})`;
    defeatedCountElem.textContent = `${state.defeatedCount} / 12`;
    if (shieldValueElem) shieldValueElem.textContent = `${state.shield}`;

    const hpPercent = Math.max(0, (state.currentHP / state.maxHP) * 100);
    bossHPBar.style.width = `${hpPercent}%`;
  }

  window.damageBoss = function(amount) {
    state.currentHP = Math.max(0, state.currentHP - amount);
    updateUI();
    if (state.currentHP === 0) {
      showToast(`⚔️ Đã hạ gục ${bossNames[state.bossTier]}! Nhấn "Boss Kế Tiếp" để sang trận tiếp theo.`);
    }
  };

  window.addShield = function(amount) {
    state.shield += amount;
    updateUI();
    showToast(`🛡️ Đã tăng thêm ${amount} Khiên phòng thủ!`);
  };

  window.nextBoss = function() {
    state.defeatedCount = Math.min(12, state.defeatedCount + 1);
    if (state.defeatedCount >= 12) {
      showToast('🏆 CHÚC MỪNG! BẠN ĐÃ CHIẾN THẮNG TOÀN BỘ 12 VỊ VUA CHÚA TRONG REGICIDE!');
      return;
    }
    
    state.bossTier = Math.floor(state.defeatedCount / 4);
    state.maxHP = bossHPs[state.bossTier];
    state.currentHP = state.maxHP;
    state.attack = bossATKs[state.bossTier];
    state.shield = 0;
    state.bossSuit = suits[state.defeatedCount % 4];

    updateUI();
    showToast(`Xuất hiện Boss mới: ${bossNames[state.bossTier]} (${state.bossSuit})`);
  };

  window.resetRegicide = function() {
    state.defeatedCount = 0;
    state.bossTier = 0;
    state.maxHP = 20;
    state.currentHP = 20;
    state.attack = 10;
    state.shield = 0;
    state.bossSuit = 'Hearts ♥';
    updateUI();
    showToast('Đã bắt đầu lại trận chiến Regicide mới');
  };

  updateUI();
});
