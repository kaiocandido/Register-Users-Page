import styled from "styled-components";
import { Background } from "../TopBackground/style";
export const Button = styled.button`
    border: none;
    background: ${(props) => (props.thema === 'primary' ? 'linear-gradient(to right, #FBCDBD, #56317E)' : 'orange')};
    border-radius: 20px;
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    &:hover { background: ${(props) => props.thema === 'primary' ? '#56317E' : 'black'}};
    &active{
        opacity: 5;
    }
`