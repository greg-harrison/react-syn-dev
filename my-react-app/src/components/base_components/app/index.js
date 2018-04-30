import React, { Component } from 'react';
import FunctionalButton from '../../basic_components/functional_button'
import ClassButton from '../../basic_components/class_button'
import HorizontalSplit from '../../layout_components/horizontalSplit'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HorizontalSplit
          leftSide={
            <FunctionalButton title="Functional" action={() => { console.log('test funct') }} />
          }
          rightSide={
            <ClassButton title="Class" action={() => { console.log('test class') }} />
          }
        />
      </div>
    );
  }
}

export default App;
