export const search = (text) => ({
  type: 'SEARCH',
  text
})

export const setSelectedTab = (filter) => ({
  type: 'SELECTED_TAB',
  filter
})

export const songClicked = (id, url) => ({
  type: 'SELECTED_URL',
  id,
  url
})


export const showModal = ( isShowModal ) => ({
  type: 'SHOW_MODAL',
  isShowModal
})
