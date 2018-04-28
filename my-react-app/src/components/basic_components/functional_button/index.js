import React from 'react'

/*
*  Functional Components do not extend lifecycle methods for your component.
*/
const FunctionalButton = ({ title, action }) => (
  <div>
    <button onClick={() => action()} > {title} </button>
  </div>
)

export default FunctionalButton
