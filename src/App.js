
import styled from "styled-components";
import { useState,useContext, useRef, useEffect } from "react";   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import About from "./components/About"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import CoolPopup from "./components/CoolPopup";

import githubUrl from "./assets/icon-github.png"
import emailUrl from "./assets/icon-at.png"
import itchUrl from "./assets/icon-itch.svg"
  




function App() {

  const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);
    const [selection,setSelection] = useState(0);

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
    
    <BrowserRouter>
    <MainDiv>
      <FrameDiv>
        <MainFrame>
          <div> Renaud Cormier </div>
        </MainFrame>
        <FlexFrameDiv>
        <Link to="/"><SubFrame 
        {...( selection === 0 ? {className:"selected"}:{})}
        onClick={()=>{setSelection(0);}}
        >Main-About</SubFrame></Link></FlexFrameDiv>
        <FlexFrameDiv>
        <Link to="/projects" 
        ><SubFrame 
        {...( selection === 1 ? {className:"selected"}:{})}
        onClick={()=>{setSelection(1);}}
        >Projects</SubFrame></Link></FlexFrameDiv>
         
        <IconsFrameDiv> 
                    <IconsIndividualDiv>
                        <a href={"https://github.com/RenaudCormierBootcamp"} target=" _blank" rel="noreferrer noopener"><PopContactsImg src={githubUrl} popElement={<span>Github</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut} /></a>
                    </IconsIndividualDiv> 
                    <IconsIndividualDiv>
                        <a href={"mailto:renaud.c.portfolio@hotmail.com"} target=" _blank" rel="noreferrer noopener" ><PopContactsImg src={emailUrl} popElement={<span>E-Mail</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut}/></a> 
                    </IconsIndividualDiv> 
          
        </IconsFrameDiv> 
         
      </FrameDiv> 

      {/* separation between FrameDiv and ContentDiv */}

      <ContentDiv>
        
        <Routes>
          <Route path="/" element={<div><About/></div>} />
          <Route path="/projects" element={<div><Projects/></div>} />
          <Route path="/contact" element={<div><Contact/></div>} /> 
        </Routes>
      </ContentDiv>

      <CoolPopup popup={popup} />
    </MainDiv>
    </BrowserRouter>
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

/// --- Styling Start---

const GoodOrange = "rgb(255,110,0)";
const shadowColor = "#FF5522";

const MainDiv = styled.div`  
width:100%;
max-width: 100vw;
`

const FrameDiv = styled.div` 
color:white;
margin:0 0 4vh 0;
padding: 0; 
background-color: rgb(255,110,0);
min-width: 800px;
min-height: 40px;
height:10vh;
display:flex;  
justify-content: space-evenly;
gap:5px;
padding:5px 5px 3vh 5px; 
box-shadow: rgba(255, 60, 33,0.5) 0px 5px, rgba(255, 60, 33,0.4) 0px 10px, rgba(255, 60, 33,0.3) 0px 15px, rgba(255, 60, 33,0.2) 0px 20px, rgba(255, 60, 33,0.1) 0px 25px;
`

const Deco = styled.div` 
pointer-events: none;
position: fixed;
height: calc(13vh + 5px); 
width:35vw;
top:0px; 
box-shadow: rgba(255, 60, 33,0.5) 5px 0, rgba(255, 60, 33,0.4) 10px 0, rgba(255, 60, 33,0.3) 15px 0, rgba(255, 60, 33,0.2) 20px 0, rgba(255, 60, 33,0.1) 25px 0;

` 
const MainFrame = styled.div`   
font-family: superstar, Arial, Helvetica, sans-serif;
text-shadow: 0.4vh 0vh black, -0.4vh 0vh black, 0vh 0.4vh black, 0vh -0.4vh black, 0.4vh -0.4vh black, -0.4vh 0.4vh black;
font-size: 10vh; 
height:95%;
margin-left:1vw;
margin-right:5vw;
`
const FlexFrameDiv = styled.div`
flex:2;
`

const SubFrame = styled.div`     
cursor: pointer;
flex:2;
font-family: zero4B, Arial, Helvetica, sans-serif;
text-decoration: underline;
text-decoration-thickness: 0.5vh; 
text-shadow: 0.3vh 0.3vh black;
font-size: 5vh;
height:95%;
position: relative;
top:0.7vh;
display: inline; 
display:flex;
justify-content: center; 
align-items: flex-end;
transition: all 200ms ease-out;
  -webkit-text-stroke: 0px rgb(255,110,0);
&:hover{
  -webkit-text-stroke: 4px yellow;
  font-size: 5.2vh; 
  text-decoration-color: yellow;
}
&.selected{
  color:yellow;
  font-size: 5.8vh;  
  text-decoration-color: yellow;
} 
&.selected:before{
  color:white;
  content:"[";
}
&.selected:after{
  color:white;
  content:"]";
}
`

const IconsFrameDiv = styled.div` 
flex:2;
margin-top:1.5vh;
height:100%; 
display:flex; 
flex-direction: row;
justify-content: space-evenly; 
`

const IconsIndividualDiv = styled.div` 
height:100%; 
display: flex;
flex-direction: column;
align-items: center;
`

const ContactIconsImg = styled.img`
height: 9vh;
margin:5px;
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 yellow)  drop-shadow(0px 0 0 yellow);
transition: all 200ms ease-out;
&:hover{

    filter: brightness(0) invert(0.5)  drop-shadow(2px 0 0 yellow) drop-shadow(-2px 0 0 yellow) drop-shadow(0 2px 0 yellow) drop-shadow(0 -2px 0 yellow);
}
`

const ContentDiv = styled.div`  
`

export default App;
