import React from 'react'
import {
  Box,
  Form,
  Input,
  Select,
  Field,
  Button,
  Text
} from 'rimble-ui'

const CustomForm = ({ options }) => {
  return (
    <Box>
      <Form>
        <Box>
          <Field label='Paste contract address'>
            <Input required />
          </Field>
        </Box>
        <Box>
          <Field label='Select function'>
            <Select
              required
              options={options}
            />
          </Field>
        </Box>
      </Form>
    </Box>
  )
}

export default CustomForm
