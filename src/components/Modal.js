import React from 'react'
import Modal from 'react-modal'

const ModalView = ({isShowModal, url, id, onClick}) => (
	isShowModal ? <div>
		<Modal isOpen={isShowModal}> 
			<button onClick={() => onClick()}>Close</button>
	    	<div>Expanded View</div>
	    	<audio key={id} src={url} controls="controls" preload="auto">
	            <i>Your browser does not support the audio element.</i>
	        </audio>
	    </Modal>
	</div>  : null
)

export default ModalView

