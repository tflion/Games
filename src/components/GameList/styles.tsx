import styled from 'styled-components';
import { devices } from '../../styles/devices'

export const List = styled.ul`
    display: block;
    max-width: 542px;
    margin: 0 auto;
    padding: 0 16px;
    list-style-type: none;
    box-sizing: border-box;

    @media (min-width: ${devices.tablet}){
        max-width: ${devices.tablet}
    }

    @media (min-width: ${devices.desktop}){
        max-width: ${devices.desktop}
    }
`

export const ListItem = styled.li`
    margin-bottom: 24px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        box-shadow: 0 0 3.5px 3.5px lightblue;
    }

    @media (min-width: ${devices.tablet}){
        display: inline-block;
        max-width: 332px;
        margin-right: 24px;

        &:nth-of-type(even) {
            margin-right: 0;
        }
    }

    @media (min-width: ${devices.desktop}){
        max-width: 312px;

        &:nth-of-type(even) {
            margin-right: 24px;
        }

        &:nth-of-type(3n+3) {
            margin-right: 0;
        }
    }
`