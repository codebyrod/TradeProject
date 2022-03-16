import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div` 
//background-color: red ;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
font-family: 'Hubballi', cursive;
`

export const Box = styled.div` 
//background-color: crimson;
height: 85vh;
width: 40vw;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
//margin-bottom: 2rem ;
`

export const Presentation = styled.div` 
//background-color: yellow;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
height: 38vh;
`

export const BoxImg = styled.div` 
//background-color: orange;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 100%;
}
`

export const BoxTitle = styled.div` 
//background-color: pink;
height: 9vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
color: #044475;

h2{
    font-size: 1.7rem ;
}

p{
    font-size: 1.3rem ;
}
`

export const BoxInput = styled.form` 
width: 30vw;
height: 24vh;
//background-color: orange;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

input{
    border: none;
    width: 30vw;
    height: 4vw;
    outline: none;
    font-size: 1.4rem;
    padding: 1rem;
    color: #275375;
    border-bottom: 3px solid #0670C2;
    &::placeholder{
        color: #275375;
        opacity: 0.8;
    }
}
`
export const BtnLogin = styled.button` 
width: 20vw;
height: 7vh;
border-radius: 2rem;
border: none;
font-size: 0.9rem;
font-weight: 700;
cursor: pointer;
background-color: #044475;
color: #FFFFFF;

&:hover{
    opacity: 0.9;
}
`

export const BoxRedirect = styled.div` 
//background-color: orange;
width: 40vw;
height: 5vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1rem;

opacity: 0.8;
`

export const BtnSupport = styled(Link)` 
color: #044475;
`
