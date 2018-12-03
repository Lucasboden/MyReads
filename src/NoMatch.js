import React from 'react';
import PropTypes from 'prop-types'
const NoMatch = ({location}) => {
    return(
      <div>
        <h3> No match for <code>{location.pathname}</code></h3>
      </div>)
};
NoMatch.propTypes = {
  currently_reading: PropTypes.array.isRequired
}

export default NoMatch