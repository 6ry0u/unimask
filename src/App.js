import React, { Component } from 'react'
// import {} from 'rimble-ui'

// import './App.css';
import getContract from './api'

class App extends Component {
  state = {
    methods: {}
  }

  async componentDidMount () {
    const { methods } = await getContract('0x8B3d70d628Ebd30D4A2ea82DB95bA2e906c71633')
    this.setState({ methods })
  }

  renderList = obj => Object.keys(obj).map((key, index) => {
    const re = /[a-z]+\(.*\)/gi
    if (key.match(re)) {
      return (
        <div key={index}>{key}</div>
      )
    }
  })

  render () {
    return (
      <div>
        <h1>Unimask</h1>
        <div>
          {this.renderList(this.state.methods)}
        </div>
      </div>
    )
  }
}

export default App
