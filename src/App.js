import React, { useState, useEffect } from 'react'
// import {} from 'rimble-ui'

// import './App.css';
import getContract from './api'
import CustomForm from './components/Form'
const options = [
  { value: '', label: '' },
  { value: 'eth', label: 'Ethereum' },
  { value: 'btc', label: 'Bitcoin' },
  { value: 'gno', label: 'Gnosis' },
  { value: 'gnt', label: 'Golem' },
  { value: 'rep', label: 'Augur' }
]
const App = () => {
  const [abi, setAbi] = useState([])

  const fetchAbi = async address => {
    const contract = await getContract(address)
    setAbi(contract._jsonInterface)
  }

  useEffect(() => {
    fetchAbi('0x8B3d70d628Ebd30D4A2ea82DB95bA2e906c71633')
  }, [])

  const options = abi.map(el => { return { value: '', label: el.name } })
  const renderArgs = args => args.map((arg, i) => {
    return (
      <ul key={i}>
        <li>Name: {arg.name}</li>
        <li>type: {arg.type}</li>
      </ul>
    )
  })

  const renderList = arr => arr.map((el, i) => {
    return (
      <div key={i}>
        <ul>
          <li>Function name: {el.name}</li>
          {el.inputs ? <>Arguments: {renderArgs(el.inputs)}</> : null}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Unimask</h1>
      <CustomForm options={options} />
      {/* <div>{renderList(abi)}</div> */}
      <div />
    </div>
  )
}
export default App
