import React from 'react';
import { action } from '@storybook/addon-actions';
import Send from '@material-ui/icons/Send';
import {IconButton, FabIcon} from 'styles/Button';

export default {
  title: 'Icon Button',
  component: IconButton,
};

export const Primary = () => <IconButton><Send /></IconButton>
export const Alternative = () => <IconButton color='secondary'><Send /></IconButton>
export const Danger = () => <IconButton color='alternative'><Send /></IconButton>
export const Fab = () => <FabIcon color='alternative'><Send /></FabIcon>