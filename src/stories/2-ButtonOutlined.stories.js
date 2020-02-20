import React from 'react';
import { action } from '@storybook/addon-actions';
import {ButtonOutlined} from 'styles/Button';

export default {
  title: 'Button Outlined',
  component: ButtonOutlined,
};

export const Primary = () => <ButtonOutlined>Primary</ButtonOutlined>
export const Alternative = () => <ButtonOutlined color='secondary'>Secondary</ButtonOutlined>
export const Danger = () => <ButtonOutlined color='alternative'>Alternative</ButtonOutlined>