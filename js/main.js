miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      // bottomBar: {
      //   title: 'Sticker to shapes',
      //   svgIcon:
      //     '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
      //   positionPriority: 1,
      //   onClick: async () => {
      //     // Get selected widgets
      //     let selectedWidgets = await miro.board.selection.get()

      //     // Filter stickers from selected widgets
      //     let stickers = selectedWidgets.filter((widget) => widget.type === 'STICKER')

      //     // Delete selected stickers
      //     await miro.board.widgets.deleteById(stickers.map((sticker) => sticker.id))

      //     // Create shapes from selected stickers
      //     await miro.board.widgets.create(
      //       stickers.map((sticker) => ({
      //         type: 'shape',
      //         text: sticker.text,
      //         x: sticker.x,
      //         y: sticker.y,
      //         width: sticker.bounds.width,
      //         height: sticker.bounds.height,
      //       })),
      //     )

      //     // Show success message
      //     miro.showNotification('Stickers has been converted')
      //   },
      // },
      bottomBar: {
        title: 'Board cleaner',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        ositionPriority: 1,
        onClick: async () => {
          // Show modal and wait for user choice
          let needToClear = confirm('Do you want delete all content?')

          if (needToClear) {
            // Get all board objects
            let objects = await miro.board.widgets.get()

            // Delete all board objects
            await miro.board.widgets.deleteById(objects.map((object) => object.id))

            // Display success
            miro.showNotification('Content has been deleted')
          }
        },
      },      
    },
  })
})