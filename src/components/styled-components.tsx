import styled from "styled-components";

export const Button = styled.button`
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
    background-color: ${props => props.theme === "dark" ? "black" : "white"};
    color: ${props => props.theme === "dark" ? "white" : "black"};
`

export const Input = styled.input`
    border-radius: 5px;
    background-color: ${props => props.theme === "dark" ? "black" : "white"};
    color: ${props => props.theme === "dark" ? "white" : "black"};
`

export const Div = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


