import React, { useState, useEffect } from 'react'
import {
  Box,
  Form,
  Input,
  Select,
  Field,
  Button,
  Text
} from 'rimble-ui'

import getContract from '../api'

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
const CustomForm = () => {
  // Hooks
  const [input, setInput] = useState('')
  const [abi, setAbi] = useState([])
  // TODO: Update default state for address. Handle error and loading
  const [address, setAddress] = useState('0x1e143b2588705DfEA63A17f2032CA123dF995CE0')

  useEffect(() => {
    fetchAbi(address)
  }, [address])

  const handleAddress = e => {
    setAddress(e.target.value)
  }

  const fetchAbi = async address => {
    const contract = await getContract(address)
    setAbi(contract._jsonInterface)
  }

  const options = abi.map(el => { return { value: '', label: el.name } })

  return (
    <Box px={3}>
      <Form onSubmit={e => console.log(e.target)}>
        <Box>
          <Field label='Paste contract address' width={1}>
            <Input
              width={1}
              required
              onChange={e => setInput(e.target.value)}
              value={input}
            />
          </Field>
        </Box>
        <Button
          type='submit'
          onClick={() => setAddress(input)}
        >Submit
        </Button>
        <Box>
          <Field label='Select function' width={1}>
            <Select required options={options} width={1} />
          </Field>
        </Box>
      </Form>
    </Box>
  )
}

export default CustomForm
