import styled from "styled-components"
import Btn from '@material-ui/core/Button'
import {green, red, blue} from 'ui-colors'

const setColor = (color) => {
    let variant = green;

    if (color === 'secondary')
        variant = red;
    else if (color === 'alternative')
        variant = blue;
    
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