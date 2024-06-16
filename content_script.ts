// 要素上でマウスオーバーしたときのイベントリスナー
document.addEventListener('mouseover', (e: MouseEvent) => {
  // ターゲット要素の型ガード
  if (!(e.target instanceof HTMLElement)) return;

  // 要素の座標を取得
  const rect = e.target.getBoundingClientRect();

  // バルーンの内容を作成
  const balloonContent = `
    <div style="background-color: rgba(0,0,0,0.8); color: white; padding: 5px; border-radius: 3px;">
      Left: ${rect.left} px
      Top: ${rect.top} px
      Width: ${rect.width} px
      Height: ${rect.height} px
    </div>
  `;

  // バルーンを表示
  const balloon = document.createElement('div');
  balloon.style.position = 'fixed';
  balloon.style.zIndex = '999999';
  balloon.style.left = `${rect.left + rect.width + 10}px`;
  balloon.style.top = `${rect.top}px`;
  balloon.innerHTML = balloonContent;
  document.body.appendChild(balloon);

  // マウスアウトでバルーンを削除
  e.target.addEventListener('mouseout', () => {
    document.body.removeChild(balloon);
  }, { once: true });
});
