const iconCard = '<g id="id_card"><path d="M21,3H3A3,3,0,0,0,0,6V18a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6A3,3,0,0,0,21,3Zm1,15a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V6A1,1,0,0,1,3,5H21a1,1,0,0,1,1,1Z"></path><path d="M10.38,11.8a3,3,0,1,0-4.76,0C3.91,13.08,4,14.68,4,16a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1C12,14.79,12.15,13.13,10.38,11.8ZM7,10a1,1,0,0,1,2,0A1,1,0,0,1,7,10ZM6,15a2,2,0,0,1,4,0Z"></path><path d="M19,7H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,7Z"></path><path d="M19,11H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,11Z"></path><path d="M19,15H14a1,1,0,0,0,0,2h5A1,1,0,0,0,19,15Z"></path></g>'


miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'カード登録',
        svgIcon: iconCard, 
        positionPriority: 1,
        onClick: async () => {

			await miro.board.ui.openModal('createsticker.html', { width: 500, height: 500 });
			

        },
      },
    },
  })
})
