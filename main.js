// --- HTML上のものを取得する（ボタンやセクションなど） ------------------------------------------------
const sections = document.querySelectorAll('.section');



// IntersectionObserver（画面内に入ったかどうかを監視）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      // セクション自体のアニメーション
      entry.target.classList.add('show');

      // sub-block を順番に表示
      const subBlocks = entry.target.querySelectorAll('.sub-block');

      subBlocks.forEach((block, index) => {
        block.style.transitionDelay = `${index * 0.2}s`; // 自動で遅延
        block.classList.add('show');
      });

      observer.unobserve(entry.target); // 一度だけ発火
    }

  });
}, {
  threshold: 0.4 // 40%見えたら発動
});

// 各セクションを監視開始
sections.forEach(section => {
  observer.observe(section);
});

// sub-text の最初の改行を削除する
document.querySelectorAll('.sub-text').forEach(p => {
  p.innerHTML = p.innerHTML.replace(/^\s*\n/, '');
});