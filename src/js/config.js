;(() => {
  /**
   * 【4】 プラグイン設定画面ロード時処理
   */
  const textfield = document.querySelector(
    '.settings .kintoneplugin-row .message'
  )
  textfield.innerHTML = '🐰このテキストはプラグインが挿入しました'
  textfield.style.fontSize = '24px'
})()
