
import React, { PropTypes } from 'react';
import Immutable from 'immutable';

const Mutterings = ({mutterings}) => (
    <ul>
        {mutterings.map((mutter, i) =>
            <li key={i}>{mutter.mutterText}</li>
        )}
    </ul>
)

Mutterings.propTypes = {
    mutterings: PropTypes.instanceOf(Immutable.List).isRequired
};

export default Mutterings
