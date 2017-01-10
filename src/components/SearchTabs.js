import React from 'react'
import Tabs from '../containers/Tabs'

const SearchTabs = () => (
  <p>
    Search On the Basis of:
    {" "}
    <Tabs filter="ARTIST">
      Artist
    </Tabs>
    {", "}
    <Tabs filter="ALBUM">
      Album
    </Tabs>
    {", "}
    <Tabs filter="SONGS">
      Songs
    </Tabs>
  </p>
)

export default SearchTabs
