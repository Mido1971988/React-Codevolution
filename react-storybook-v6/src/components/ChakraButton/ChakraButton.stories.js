import React from 'react'
import { Button } from '@chakra-ui/react'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template =  args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    colorScheme: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}

export const Log = Template.bind({})

Log.args = {
  colorScheme : 'blue',
  children: 'Log',
  onClick : () => console.log("Log Clicked" , process.env.STORYBOOK_THEME)
}
    

export const Knobs = () => (
  <Button colorScheme='purple' disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
)