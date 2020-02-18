import React, { useState, useEffect } from 'react'
import { Box, Heading } from 'rimble-ui'

// import './App.css';
import getContract from './api'
import CustomForm from './components/Form'

const App = () => {
  return (
    <Box>
      <Heading as='h1'>Unimask</Heading>
      <CustomForm />
    </Box>
  )
}
export default App
