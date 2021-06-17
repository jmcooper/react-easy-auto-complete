import React from 'react'
import AutoComplete from './auto-complete'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'AutoComplete component', decorators: [withKnobs]}

export const autoComplete = () => {
  const message = text('Text', 'Click here now!')
  return <AutoComplete message={message}></AutoComplete>
}