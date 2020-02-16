import React, { Component } from 'react'
// import {} from 'rimble-ui'
// import './App.css';

import contractWeb3 from './contract'

class App extends Component {
  state = {
    contract: contractWeb3
  }

  // async componentDidMount () {
  //   this.setState({contract: contractWeb3})
  // }
  renderList = obj => Object.keys(obj).map((key, index) => {
    const re = /[a-z]+\(.*\)/gi
    if (key.match(re)) {
      return (
        <div key={index}>{key}</div>
      )
    }
  })
  
  render () {
    // console.log(this.state.contract.methods)
    return (
      <div>
        <h1>Unimask</h1>
        <div>
          {this.renderList(this.state.contract.methods)}
        </div>
      </div>
    )
  }
}

export default App
