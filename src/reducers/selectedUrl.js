const selectedUrl = (state = '', action) => {
  switch (action.type) {
    case 'SELECTED_URL':
       return {
        url: action.url,
        id: action.id
      }
    default:
      return state
  }
}

export default selectedUrl
