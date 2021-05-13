miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Reset',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {


          miro.board.ui.openModal('createsticker.html', {title: 'アップロード'})

          // // 確認メッセージ表示
          // let needToClear = confirm("ボードを初期化します。よろしいですか？");

          // if(needToClear){

          //   // 全Stickerオブジェクトの取得
          //   let allStickers = await miro.board.widgets.get({type: 'sticker'})

          //   // 初期化位置の取得
          //   let frame1 = await miro.board.widgets.get({title: 'Frame 1'})

          //   let groupIds = allStickers.filter(sticker=> typeof sticker.groupId != 'undefined').map(sticker=> sticker.groupId);

          //   let groupobjects = await miro.board.widgets.get({groupId: groupIds[0]});

          //   miro.board.selection.selectWidgets(groupobjects);

//             let x = frame1[0].x - 120;
//             let y = frame1[0].y - 260;

//             let irow = 0;
//             let icol = 0;

//             // StickerオブジェクトをFrame1上に移動
//             allStickers.forEach(sticker => {
              
//               sticker.x = x;
//               sticker.y = y;

//               if(irow % 2 != 0){
//                 y = (y + sticker.bounds.height);
//               }
//               irow++;

//               if(icol == 0){
//                 x += sticker.bounds.width + 20;
//                 icol++;
//               }else{
//                 x = frame1[0].x - 120;
//                 icol = 0;
//               }
//             });
//            miro.board.widgets.update(allStickers);

            // Show success message
            // miro.showNotification('ボードを初期化しました。')  
//          }

        },
      },
    },
  })
})