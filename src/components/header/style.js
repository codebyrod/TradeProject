import styled from "styled-components";

//#484450, #466067, #459a96, #34baab, #c4c8c5

//#044475, #51AFF7, #088FF5, #275375, #0670C2

//#470B75, #B560F7, #9416F5, #562E75, #7611C2, #7E91CC

export const Container = styled.div`
position: fixed;
z-index: 999;
width: 100vw;
height: 13vh;
//padding: 1rem;
background-color: #275375;
//box-shadow: 0px 1px 7px 0px rgb(0 0 0 / 65%);
font-family: 'Red Hat Display', sans-serif;
display: flex;
align-items: center;
`

export const Nav = styled.nav`
width: 100%;
//height: 100%;
display:flex;
justify-content: space-between;
align-items: center;
//background-color: pink ;
`
export const BoxLogo = styled.div` 
width: 7vw;
margin-left: 2rem;
//background-color: yellowgreen;

img{
    width: 50%;
}
`

export const BoxItem = styled.ul`
//background-color: blue;
display: flex;
width: 45vw;
height: 13vh;
padding: 0 2rem ;
gap: 2.5rem ;
align-items: center;
justify-content: center;
`

export const ListItem = styled.li` 
a {
    //background-color: blue ;
    display: block;
    //width: 180px;
    text-align: center;
    letter-spacing: 1.5px;
    font-size:1rem;
    font-weight: 700;
    color: #FFFFFF;
    &:hover{
    /* background: linear-gradient(to right, #70018B 0%, #01718D 100%);
    background-clip: border-box; */
    transition: 400ms;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    }
}
`

export const BoxBtn = styled.div` 
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
//width: 27.3vw;
width: 10vw ;
height: 13vh;
border: none;
`

export const Btn = styled.a` 
width: 70%;
height: 100%;
border: none;
cursor: pointer;
display: flex;
justify-content: space-around;
align-items: center;

img{
width: 25%;
}

p{
color: #275375;
font-weight: 700;
}
`