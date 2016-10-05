import React, { PropTypes } from 'react'

const Mutterings = ({mutterings}) => (
  <ul>
    {mutterings.map((mutter, i) =>
      <li key={i}>{mutter.mutterText}</li>
    )}
  </ul>
)

Mutterings.propTypes = {
  mutterings: PropTypes.array.isRequired
}

export default Mutterings
