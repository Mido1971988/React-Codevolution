import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
  title: 'Form/Button',
  component: Button,
  // decorators: [story => <Center>{story()}</Center>],
  args: {
    children: 'Button'
  }
}

// export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
// export const Success = () => <Center><Button variant='success'>Success</Button></Center>
export const Success = () => <Button variant='success'>Success</Button>
// export const Danger = () => <Center><Button variant='danger'>Danger</Button></Center>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  // children: 'Primary Args',
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
}