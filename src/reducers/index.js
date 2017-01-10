import { combineReducers } from 'redux'
import list from './list'
import search from './search'
import selectedTab from './selectedTab'
import selectedUrl from './selectedUrl'
import showModal from './showModal'

const musicApp = combineReducers({
  list,	
  search,	
  selectedTab,
  selectedUrl,
  showModal
})

export default musicApp
