import styled from "styled-components"
import arrowUrl from "../assets/arrow.png"
import portraitUrl from "../assets/portrait.png"
import reactUrl from "../assets/logo-react.png"
import javaScrUrl from "../assets/logo-javascript.png"
import nodeUrl from "../assets/logo-node.png"
import htmlUrl from "../assets/logo-html5.png"
import mongoUrl from "../assets/logo-mongo.png"
import gitUrl from "../assets/logo-git.png"
import canvasUrl from "../assets/logo-canvas.png"
import CoolPopup from "./CoolPopup"

import githubUrl from "../assets/icon-github.png"
import emailUrl from "../assets/icon-at.png"
import itchUrl from "../assets/icon-itch.svg"

import { useEffect, useState, useRef } from "react"
import { projects } from "../data/dataProjects"

import ProjectWithDesc from "./ProjectWithDesc"
 
 
const About = () => {

    const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);

    const imgRef = useRef();
     
    const popupHandler = (elemento,target) =>{   
        const _pos = target.getBoundingClientRect(); 
        setPopup([true,`${Math.floor(_pos.left+_pos.width/2)}px`,`${Math.floor(_pos.bottom+15)}px`,elemento]);
    }

    const popupOut = () =>{
        setPopup([false,0,0,<></>]);
    }

    useEffect(
        ()=>{setAnim(true);
        setTimeout(()=>{
            setAnim(false);
        },2000)
        }
        ,[])

    return (

        <>
        <AboutDiv> 
         
                <OneBigDivDeco {...(anim ?{className:"anim"}:{})}>
                     <AbsoluteRelative> 
                         <ArrowDecoSide/> 
                         <ArrowDecoSecond/>
                        <ArrowDecoSideTwo/>
                        <ArrowDeco> 
                            <ArrowImg/>
                         </ArrowDeco>
                    </AbsoluteRelative> 
                 </OneBigDivDeco>
                  


            <AboutContentDiv>
                
                
                <QuickContact> 
                    <AboutPortrait> 
                    </AboutPortrait> 
                    <QuickContactText>Quick Contact</QuickContactText>
                    <div>
                        <a href={"https://github.com/RenaudCormierBootcamp"}><PopContactsImg src={githubUrl} popElement={<span>Github</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut} /></a>
                        <a href={"mailto:solbaboon@gmail.com"}><PopContactsImg src={emailUrl} popElement={<span>E-Mail</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut}/></a>
                        <a href={"https://themonstreking.itch.io/"}><PopContactsImg src={itchUrl} popElement={<span>itch.io</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut}/></a>
                    </div>
                </QuickContact>
                
                <AboutMainTitle>ABOUT</AboutMainTitle>
                <AboutSubTitle>Full stack web developper specialized in user interactions</AboutSubTitle>
                <AboutSubTitle >  
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Javascript</span>} onOutHandler={popupOut} src={javaScrUrl}   /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>HTML5</span>} onOutHandler={popupOut} src={htmlUrl}  /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Canvas</span>} onOutHandler={popupOut} src={canvasUrl}   /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Node</span>} onOutHandler={popupOut} src={nodeUrl}   /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>React</span>} onOutHandler={popupOut} src={reactUrl}   /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>MongoDB</span>} onOutHandler={popupOut} src={mongoUrl}  /> 
                    <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Git</span>} onOutHandler={popupOut} src={gitUrl}  />  
                    
                     </AboutSubTitle> 
                     <AboutSubTitle style={{"textAlign":"center"}}>Most recent project:</AboutSubTitle>
                    <div style={{width:"70vw"}}>
                        <ProjectWithDesc project={projects[0]}/>
                     </div>
            </AboutContentDiv>
            <CoolPopup popup={popup} />
        </AboutDiv>
        </>
    )
}

const PopContactsImg = ({imgRef,src,onEnterHandler,onOutHandler,popElement}) =>{
    return (
    <ContactIconsImg elemento={popElement} ref={imgRef} src={src} 
        onMouseEnter={(event)=>{
            onEnterHandler(popElement,event.target);
        }} 
        onMouseOut={(onOutHandler)}
    /> 
    )
}

const PopIconsImg = ({imgRef,src,onEnterHandler,onOutHandler,popElement}) =>{
    return (
    <TechIconsImg elemento={popElement} src={src} 
        onMouseEnter={(event)=>{
            onEnterHandler(popElement,event.target);
        }} 
        onMouseOut={(onOutHandler)}
    /> 
    )
}

//styling starts----------------------------------------
const GoodOrange = "rgb(255,110,0)"

const QuickContact = styled.div`
    float:right;
`
 
const QuickContactText = styled.div`
font-size:3vh;
`
const AboutDiv = styled.div` 
margin:0px 20px;
color:white; 
`
const AbsoluteRelative = styled.div`
position: sticky;
max-width:1px;
max-height: 1px;
`

const OneBigDivDeco = styled.div`
pointer-events: none;
position: absolute; 
width:50vw;
height:0px;
left:0.5vw;
opacity: 0; 
transition: 2000ms ease-in-out;
filter: drop-shadow(4px 0 0 black) 
        drop-shadow(0 4px 0 black)
        drop-shadow(-4px 0 0 black)
        drop-shadow(0 -4px 0 black);
        z-index: 1;
&.anim{
    opacity: 1;
}
`

 
const ArrowDecoSide = styled.div`

position: relative;
width: 1vw;
height: 11vh;
top:-7vh;
left:21.1vw;
background-color: white;
`
const ArrowDecoSideTwo = styled.div`

position: relative;
width: 1vw;
height: 18vh;
top:-11vh;
left:71vw;
background-color: white;
`
const ArrowDecoSecond = styled.div`
    position: relative;
    left:21.1vw;
    top: -9vh;
    width:50.9vw;
    height:2.5vh;
    background-color: white; 

`

const ArrowDeco = styled.div`
    position: relative;
    left:71vw;
    top: -11vh;
    width:8vw;
    height:2.5vh;
    background-color: white; 

`
const ArrowImg = styled.div` 
background-image: url(${arrowUrl});
background-size:contain;
background-repeat: no-repeat;
image-rendering: pixelated; 
min-width: 6vh;
max-width: 6vh;
min-height: 6vh;
max-width: 6vh;
position: relative;
 top: -1.5vh;
 left:96%; 
`

const AboutContentDiv = styled.div`
color:white;
font-size:10vh;
margin:0px 50px 50px 50px; 
z-index: 3; 
`


const AboutPortrait = styled.div` 
    position: relative;
    background-image: url(${portraitUrl});
    background-size:contain;
    background-repeat: no-repeat; 
    background-color: blue;
    margin: 50px 0px 0px 0px;
    top:-3vh;
    min-width: 18vw;
    min-height:27vw;
    border-radius: 10px;
    float:right;
    box-shadow: rgba(255, 60, 33,0.5) 5px 5px, rgba(255, 60, 33,0.4) 10px 10px, rgba(255, 60, 33,0.3) 15px 15px, rgba(255, 60, 33,0.2) 20px 20px, rgba(255, 60, 33,0.1) 25px 25px,
    rgba(255, 60, 33,0.5) -2px -2px, rgba(255, 60, 33,0.4) -4px -4px, rgba(255, 60, 33,0.3) -6px -6px, rgba(255, 60, 33,0.2) -8px 8px, rgba(255, 60, 33,0.1) -10px -10px;

`

const AboutMainTitle = styled.div` 
font-family:  zero4B, 'Courier New', Courier, monospace;
width: 70%;
border-bottom:4px solid white ;
color:white;
font-size:9vh;
padding-left:30px;
margin: 10px 10px 10px 10px;
filter: drop-shadow(3px 0 0 ${GoodOrange})  drop-shadow(3px 3px 0 ${GoodOrange});
`
const AboutSubTitle = styled.div`
margin:15px 5px 5px 15px;
font-size:5vh;
`

const AboutContent = styled.div`

`
const AboutImages = styled.div` 
`

const ContactIconsImg = styled.img`
height: 9vh;
margin:5px;
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 ${GoodOrange})  drop-shadow(0px 0 0 ${GoodOrange});
transition: all 200ms ease-out;
&:hover{

    filter: brightness(0) invert(0.5)  drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});
}
`

const TechIconsImg = styled.img`
height: 11vh;
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 ${GoodOrange})  drop-shadow(0px 0 0 ${GoodOrange});
transition: all 200ms ease-out;
&:hover{

    filter: brightness(0) invert(0.5)  drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});
}
`


export default About