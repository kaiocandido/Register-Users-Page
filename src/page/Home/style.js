import styled from "styled-components"


export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const Container = styled.div`

    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`


export const TopBackground = styled.div`
    background: linear-gradient(to right, #FBCDBD, #56317E);
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;


    img{
        max-width: 50%;
        min-height: 50%;
    }
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`

export const ContainerInputs = styled.div`

    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px 12px 20px;
    outline: none;
    width: 100%;
`

export const Button = styled.button`

    border: none;
    background: linear-gradient(to right, #FBCDBD, #56317E);
    border-radius: 20px;
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover{
        background: #56317E;
        
    }

    &active{
        opacity: 5;
    }
`

export const InputLabel = styled.label`

    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: #ef4f45;
        font-weight: bold;
    }
`