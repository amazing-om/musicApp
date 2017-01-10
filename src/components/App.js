import React from 'react'
import SearchTabs from './SearchTabs'
import SelectedAudio from '../containers/SelectedAudio'
import SearchBox from '../containers/SearchBox'
import VisibleSearchResult from '../containers/VisibleSearchResult'
import ShowModalContainer from '../containers/ShowModalContainer'

const App = () => (
  <div>
  	<SearchBox />
    <SearchTabs />
    <VisibleSearchResult />
    <SelectedAudio />
    <ShowModalContainer />
  </div>
)

export default App
