// カウントアップ機能
let count = 0;

// カウント表示要素を取得
const countDisplay = document.getElementById('count-display');
const countButton = document.getElementById('count-button');

// カウントを更新して表示する関数
function updateCount() {
    count++;
    if (countDisplay) {
        countDisplay.textContent = `カウント: ${count}`;
    }
    console.log(`カウント: ${count}`);
}

// ページ読み込み後にイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
    if (countButton) {
        countButton.addEventListener('click', updateCount);
        console.log('カウントアップ機能が初期化されました');
    }
});
