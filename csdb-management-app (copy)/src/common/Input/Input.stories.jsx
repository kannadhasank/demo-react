import { useState } from 'react';
import Input from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  name: 'default',
  placeholder: 'Enter text...',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Email Address',
  name: 'email',
  type: 'email',
  placeholder: 'example@email.com',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Field',
  name: 'required',
  required: true,
  placeholder: 'This field is required',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  name: 'email',
  type: 'email',
  value: 'invalid-email',
  error: 'Please enter a valid email address',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  name: 'password',
  type: 'password',
  placeholder: 'Enter your password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  name: 'disabled',
  value: 'This is disabled',
  disabled: true,
};

export const Number = Template.bind({});
Number.args = {
  label: 'Age',
  name: 'age',
  type: 'number',
  placeholder: 'Enter your age',
};
