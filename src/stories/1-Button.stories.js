import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button, ButtonOutlined} from 'styles/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Primary</Button>
export const Alternative = () => <Button color='secondary'>Secondary</Button>
export const Danger = () => <Button color='alternative'>Alternative</Button>
export const PrimaryOutlined = () => <ButtonOutlined>Primary</ButtonOutlined>
export const AlternativeOutlined = () => <ButtonOutlined color='secondary'>Secondary</ButtonOutlined>
export const DangerOutlined = () => <ButtonOutlined color='alternative'>Alternative</ButtonOutlined>