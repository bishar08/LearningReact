import React, { Component } from 'react'

class EvenBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello',
    }

    // this.ClickHandler = this.ClickHandler.bind(this)
  }

  // ClickHandler() {
  //   this.setState({
  //     message: 'Goodbye',
  //   })
  //   console.log(this)
  // }

  ClickHandler = () => {
    this.setState({
      message: 'Goodbye',
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click Us</button> */}
        {/* <button onClick={() => this.ClickHandler()}>Click Us</button> */}
        <button onClick={this.ClickHandler}>Click Us</button>
      </div>
    )
  }
}

export default EvenBind
