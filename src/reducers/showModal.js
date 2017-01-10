const showModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.isShowModal
    default:
      return state
  }
}

export default showModal
