miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Reset',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {

          // 確認メッセージ表示
          let confirm = confirm("ボードを初期化します。よろしいですか？");

          if(confirm){

            // 全Stickerオブジェクトの取得
            let allStickers = await miro.board.widgets.get({type: 'sticker'})

            // 初期化位置の取得
            let frame1 = await miro.board.widgets.get({title: 'Frame 1'})

            let x = frame1.x + 20;
            let y = frame1.y + 80;

            let irow = 0;
            let icol = 0;

            // StickerオブジェクトをFrame1上に移動
            for(sticker in allStickers){
              sticker.x = x;
              sticker.y = y;

              if(irow / 2 != 0){
                y+=sticker.height + 20;
              }

              if(icol == 1){
                x+=sticker.width + 20;
                icol = 0;
              }else{
                x = frame1.x + 20;
              }
            }
          }

          // Filter stickers from selected widgets
          // Show success message
          miro.showNotification('ボードを初期化しました。')
        },
      },
    },
  })
})