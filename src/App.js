import React, { useState, useEffect } from 'react'
// import {} from 'rimble-ui'

// import './App.css';
import getContract from './api'

const App = () => {
  const [abi, setAbi] = useState([])

  const fetchAbi = async address => {
    const contract = await getContract(address)
    setAbi(contract._jsonInterface)
  }

  useEffect(() => {
    fetchAbi('0x8B3d70d628Ebd30D4A2ea82DB95bA2e906c71633')
  }, [])

  const renderList = arr => arr.map((el, i) => {
    return (
      <div key={i}>
        <div>{el.name}</div>
      </div>
    )
  })
  return (
    <div>
      <h1>Unimask</h1>
      <div>{renderList(abi)}</div>
      <div />
    </div>
  )
}
export default App
