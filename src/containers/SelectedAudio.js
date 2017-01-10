import { connect } from 'react-redux'
import AudioPlayer from '../components/AudioPlayer'
import { showModal } from '../actions'

const mapStateToProps = (state) => ({
  	url: state.selectedUrl.url,
  	id: state.selectedUrl.id
})

const mapDispatchToProps =  (dispatch) => ({
	onClick: () => {
    	dispatch(showModal(true))
  	}
})

const SelectedAudio = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(AudioPlayer)

export default SelectedAudio
