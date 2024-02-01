import styled from "styled-components"
import githubUrl from "../assets/icon-github.png"
import emailUrl from "../assets/icon-at.png"
import itchUrl from "../assets/icon-itch.svg"
import { isVisible } from "@testing-library/user-event/dist/utils"

const Contact = () =>{

    return (
        <ContentDiv>
            <ContactContentDiv>
                <ContactMainTitle>Contact</ContactMainTitle>
                <ContactMainDiv>
                <p>Business e-mail: <EmailAnchor href={"mailto:renaud.c.portfolio@gmail.com"}><ContactIconsImg src={emailUrl}/>renaud.c.portfolio@gmail.com</EmailAnchor> </p>
                <p style={{visibility:"hidden"}}>not a line break</p>
                <p>
                <ContactIconsImg src={githubUrl}/>Github: <EmailAnchor href={"https://github.com/RenaudCPortfolio"}>Find my latest code repositories here</EmailAnchor>
                </p>
                <p>
                <ContactIconsImg src={itchUrl}/>Itch.io: <EmailAnchor href={"https://themonstreking.itch.io/"}>Published playable interactive and game projects</EmailAnchor>
                </p>
                </ContactMainDiv>
            </ContactContentDiv>
        </ContentDiv>
    )
}


const GoodOrange = "rgb(255,110,0)"

const EmailAnchor = styled.a`
color: ${GoodOrange};
text-decoration: underline;
transition: 200ms ease-in;
&:hover{
    color:rgb(255,140,40);
    filter: drop-shadow(2px 0 0 ${GoodOrange});
}
&:active{
    transition:5ms linear;
    font-weight: bolder;
    color:rgb(255,255,100);
}
`

const ContactMainTitle = styled.div` 
font-family:  zero4B, 'Courier New', Courier, monospace;
width: 70%;
border-bottom:4px solid white ;
color:white;
font-size:9vh;
padding-left:30px;
margin: 10px 10px 10px 10px;
filter: drop-shadow(3px 0 0 ${GoodOrange})  drop-shadow(3px 3px 0 ${GoodOrange});
`
const ContentDiv = styled.div` 
margin:0px 20px;
color:white; 
`
const ContactContentDiv = styled.div`
color:white;
font-size:5vh;
margin:0px 50px 50px 50px; 
z-index: 3; 
`
const ContactMainDiv = styled.div` 
padding:10px;
margin:10px;
line-height: 8vh;
`

const ContactIconsImg = styled.img`
height: 3.5vh;
margin:5px; 
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 ${GoodOrange})  drop-shadow(0px 0 0 ${GoodOrange}); 
`
export default Contact