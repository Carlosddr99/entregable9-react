
import styled from 'styled-components';

const  elegirColor = type =>{
    switch(type){
        case 'sucess':
            return "green";
        case 'error':
            return "red";
        case 'warning':
            return "orange";
        case 'info':
            return "dodgerblue";
        default:
            return "black";
    }
}

export const Button = styled.button`

color: white;
background-color: ${props => elegirColor(props.type)};

`

export const GridLayout = styled.div`
    display: flex;
    flex-direction: row;
`