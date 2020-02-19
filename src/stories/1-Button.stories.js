import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'styles/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button>Hello Stranger</Button>