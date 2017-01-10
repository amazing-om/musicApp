import React from 'react'

const AudioPlayer = ({id, url, isShowModal, onClick}) => (
    url ? <div>
    	<div style={{cursor: 'pointer'}} onClick={() => onClick()}>Click For More Details</div>
        <audio key={id} src={url} controls="controls" preload="auto">
            <i>Your browser does not support the audio element.</i>
        </audio>
    </div> : null
)

export default AudioPlayer

