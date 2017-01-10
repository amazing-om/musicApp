const selectedTab = (state = 'ARTIST', action) => {
  switch (action.type) {
    case 'SELECTED_TAB':
      return action.filter
    default:
      return state
  }
}

export default selectedTab
