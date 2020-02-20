import styled from "styled-components"

import Btn from '@material-ui/core/Button'
import IconBtn from '@material-ui/core/IconButton'

import {green, red, blue, background1, text1} from 'ui-colors'

const setColor = (color) => {
    let variant = green;

    if (color === 'secondary')
        variant = red;
    else if (color === 'alternative')
        variant = blue;
    
    else if (color === 'transparent')
        variant = background1;
    
    console.log(color)
    console.log(variant)

    return variant;
}


export const Button = styled(Btn).attrs({
    variant: 'contained',
    disableElevation: true
})`
    &&{
        color: ${props => props.outlined ? setColor(props.color) : 'white'};
        background-color: ${props => setColor(props.color)};
    }
`

export const ButtonOutlined =  styled(Btn).attrs({
    variant: 'outlined',
    disableElevation: true
})`
    &&{
        color: ${props => setColor(props.color)};
        border-color: ${props => setColor(props.color)};
    }
`

export const IconButton =  styled(IconBtn).attrs({
    variant: 'inherit'
})`
    &&{
        color: ${props => props.color === 'white' ? text1 : background1};
        background-color: ${props => setColor(props.color)};
        border-radius: 10%;
    }
`

export const FabIcon =  styled(IconBtn).attrs({
    variant: 'inherit'
})`
    &&{
        color: text1;
        background-color: white;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    }
`