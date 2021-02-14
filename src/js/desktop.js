;(() => {
  /**
   * 【1】 プラグインロード時処理
   */
  const elem = document.createElement('div')
  elem.innerText = '🐹'
  elem.style.position = 'absolute'
  elem.style.right = '40px'
  elem.style.top = '220px'
  elem.style.fontSize = '36px'
  document.getElementsByTagName('body')[0].appendChild(elem)

  /**
   * 【2】 レコード追加時・編集時イベント
   */
  kintone.events.on(
    ['app.record.create.show', 'app.record.edit.show'],
    (event) => {
      const space = kintone.app.record.getSpaceElement('space')
      space.innerHTML = '🐱このテキストはプラグインが挿入しました'
      space.style.fontSize = '24px'
    }
  )
})()
