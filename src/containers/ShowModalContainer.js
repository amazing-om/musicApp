import { connect } from 'react-redux'
import ModalView from '../components/Modal'
import { showModal } from '../actions'


const mapStateToProps = (state) => ({
  	isShowModal: state.showModal,
  	url: state.selectedUrl.url,
  	id: state.selectedUrl.id
})

const mapDispatchToProps =  (dispatch) => ({
  	onClick: () => {
    	dispatch(showModal(false))
  	}
})

const ShowModalContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(ModalView)

export default ShowModalContainer
