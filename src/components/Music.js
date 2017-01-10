import React, { PropTypes } from 'react'

const Music = ({ onClick, name }) => (
  <li style={{cursor: "pointer"}} onClick={ onClick } >
    {name}
  </li>
)

Music.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Music
