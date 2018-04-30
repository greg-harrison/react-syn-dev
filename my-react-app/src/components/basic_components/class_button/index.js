import React from 'react'
import PropTypes from 'prop-types'

export default class ClassButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func
  }
  // constructor(props) {
  //   super(props)
  // }
  render() {
    let { title, action } = this.props;
    return (
      <div>
        <button onClick={() => action()}>{title}</button>
      </div>
    )
  }
}
