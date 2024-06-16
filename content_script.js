// 要素上でマウスオーバーしたときのイベントリスナー
document.addEventListener('mouseover', function (e) {
    // ターゲット要素の型ガード
    if (!(e.target instanceof HTMLElement))
        return;
    // 要素の座標を取得
    var rect = e.target.getBoundingClientRect();
    // バルーンの内容を作成
    var balloonContent = "\n    <div style=\"background-color: rgba(0,0,0,0.8); color: white; padding: 5px; border-radius: 3px;\">\n      Left: ".concat(rect.left, " px\n      Top: ").concat(rect.top, " px\n      Width: ").concat(rect.width, " px\n      Height: ").concat(rect.height, " px\n    </div>\n  ");
    // バルーンを表示
    var balloon = document.createElement('div');
    balloon.style.position = 'fixed';
    balloon.style.zIndex = '999999';
    balloon.style.left = "".concat(rect.left + rect.width + 10, "px");
    balloon.style.top = "".concat(rect.top, "px");
    balloon.innerHTML = balloonContent;
    document.body.appendChild(balloon);
    // マウスアウトでバルーンを削除
    e.target.addEventListener('mouseout', function () {
        document.body.removeChild(balloon);
    }, { once: true });
});
