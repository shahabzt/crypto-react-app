import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 40px;
    font-size: 12px;
    color: #212529;
    border-bottom: 1px solid silver;
`

export const Image = styled.img`
width: 30px;
`

export const Name = styled.span`
width: 140px;
font-size: 14xp;
margin-left: 15px;
text-align: left;
font-weight: bold;
color: #333333;
`

export const Symbol = styled.span`
text-align: left;
width: 100px;
`

export const CurrentPrice = styled.span`
text-align: left;
    width: 100px;
`
export const GreenPrice = styled.span`
width: 100px;
    text-align: left;
    font-weight: bold;
    color: rgb(0, 204, 0);
`

export const RedPrice = styled.span`
width: 100px;
    text-align: left;
    font-weight: bold;
    color: rgb(255, 38, 38);
`

export const Span = styled.span`

`

export const Input = styled.input`
width: 300px;
margin-top: 50px;
border: 1px solid silver;
border-radius: 5px;
height: 20px;
padding: 5px;
background-color: #f6f6f6;
transition: all 0.2s ease;
`