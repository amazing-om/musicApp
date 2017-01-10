import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions'

let SearchBox = ({ dispatch }) => {
  return (
    <div>
        <input placeholder="Search Here..."
          onChange={(event) => dispatch(search(event.target.value))}
        />
    </div>
  )
}
SearchBox = connect()(SearchBox)

export default SearchBox
