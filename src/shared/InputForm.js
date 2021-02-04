import React from 'react'
import styled from '@emotion/styled'
import { Input, Button } from './Form'

const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`

const InputForm = ({
  inputVal,
  inputLocation,
  onChangeLocation,
  onChange,
  onSubmit,
  buttonText
}) => {
  return (
    <Container>
      <Input value={inputVal} onChange={onChange} placeholder='term' />
      <Input
        value={inputLocation}
        onChange={onChangeLocation}
        placeholder='location'
      />
      <Button onClick={onSubmit}>{buttonText || 'Search'}</Button>
    </Container>
  )
}

export default InputForm
