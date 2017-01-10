import React, { PropTypes } from 'react'
import Music from './Music'

const MusicList = ({ list, type, onMusicClick }) => (
  <ul>
    {list.map(music => 
        <Music key={music.id} {...music} onClick={() => onMusicClick(music.id, music.url)} />
    )}
  </ul>
)

MusicList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMusicClick: PropTypes.func.isRequired
}

export default MusicList
