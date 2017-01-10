import { connect } from 'react-redux'
import MusicList from '../components/MusicList'
import { songClicked } from '../actions'

const getVisibleList = (list, filter, search) => {
	switch (filter) {
		case 'ARTIST':
		  	return list.filter(l => ( l.name.toLowerCase().indexOf(search) !== -1  && l.filterType === filter )) 
		case 'ALBUM':
		  	return list.filter(l => ( l.name.toLowerCase().indexOf(search) !== -1 && l.filterType === filter )) 
		case 'SONGS':
		  	return list.filter(l => ( l.name.toLowerCase().indexOf(search) !== -1 && l.filterType === filter )) 
		default:
		  	throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state) => ({
  	list: getVisibleList(state.list, state.selectedTab, state.search),
  	type: state.selectedTab
})

const mapDispatchToProps =  ({
  onMusicClick: songClicked
})

const VisibleSearchResult = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(MusicList)

export default VisibleSearchResult
