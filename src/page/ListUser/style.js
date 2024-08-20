import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

`

export const ContainerUsers = styled.div`

    margin: 30px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 10px ;


    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }

`

export const CardUsers = styled.div`

    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 350px;

    h2{
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 12px;
        font-weight: 200;
    }
    
    
`

export const TrashIcon = styled.img`

    padding-left: 30px;
    cursor: pointer;
`

export const AvatarUser = styled.img`
    height:80px;
`