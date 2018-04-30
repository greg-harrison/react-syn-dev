import React from 'react'

export default class ClassButton extends React.Component {
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
