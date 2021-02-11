;(() => {
  /**
   * プラグインロード時処理
   */
  const elem = document.createElement('div')
  elem.innerText = '🐹'
  elem.style.position = 'absolute'
  elem.style.right = '40px'
  elem.style.top = '50px'
  elem.style.fontSize = '36px'
  document.getElementsByTagName('body')[0].appendChild(elem)

  /**
   * レコード作成時・編集時イベント
   */
  kintone.events.on(
    ['mobile.app.record.create.show', 'mobile.app.record.edit.show'],
    (event) => {
      const space = kintone.mobile.app.record.getSpaceElement('space')
      space.innerHTML = '🐶このテキストはプラグインが挿入しました'
      space.style.fontSize = '24px'
    }
  )
})()
