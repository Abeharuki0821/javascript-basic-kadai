const Btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
});