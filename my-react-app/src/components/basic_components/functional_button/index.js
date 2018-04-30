import React from 'react'
import PropTypes from 'prop-types'

/*
*  Functional Components do not extend lifecycle methods for your component.
*/
const FunctionalButton = ({ title, action }) => (
  <div>
    <button onClick={() => action()} > {title} </button>
  </div>
)

FunctionalButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default FunctionalButton
