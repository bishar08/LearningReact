import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBlind from './components/EvenBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBlind /> */}
        {/* <Counter /> */}
        {/* <Greet name="Munira" heroName="Wonder Women">
          <p>Bishar habibna</p>
        </Greet>
        <Greet name="Muna" heroName="Wonder Women" />
        <Greet name="Ahmed" heroName="batman" />
        <Welcome name="Munira" heroName="Wonder Women" />
        <Welcome name="Muna" heroName="Wonder Women" /> */}
        {/* <Welcome name="Ahmed" heroName="batman" /> */}
        {/* <Message /> */}
      </div>
    )
  }
}

export default App
