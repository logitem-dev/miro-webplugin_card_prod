function onDataUploaded(e) {
  let emploee_id = e.emploee_id
  miro.board.widgets.create({ type: 'image', url: 'https://logitem.herokuapp.com/' + emploee_id + '.png'});
}

miro.onReady(() => {
  miro.addListener(miro.enums.event.DATA_BROADCASTED, onDataUploaded)
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Reset',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {

			await miro.board.ui.openModal('createsticker.html', { width: 500, height: 750 });
			

        },
      },
    },
  })
})
