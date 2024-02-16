
import styled from "styled-components";
import { useState,useContext } from "react";   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import About from "./components/About"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
 
let selection = 0;


function App() {

  
  return ( 
    
    <BrowserRouter>
    <MainDiv>
      <FrameDiv>
        <MainFrame>
          <div> Renaud Cormier </div>
        </MainFrame>
        <Link to="/"><SubFrame 
        {...( selection === 0 ? {className:"selected"}:{})}
        >Main-About</SubFrame></Link>
        <Link to="/projects"
        {...( selection === 1 ? {className:"selected"}:{})}
        ><SubFrame 
        {...( selection === 2 ? {className:"selected"}:{})}
        >Projects</SubFrame></Link>
        <Link to="/contact"
        {...( selection === 3 ? {className:"selected"}:{})} 
        ><SubFrame>Contact</SubFrame> </Link>
         
      </FrameDiv> 

      {/* separation between FrameDiv and ContentDiv */}

      <ContentDiv>
        
        <Routes>
          <Route path="/" element={<div><About/></div>} />
          <Route path="/projects" element={<div><Projects/></div>} />
          <Route path="/contact" element={<div><Contact/></div>} /> 
        </Routes>
      </ContentDiv>


    </MainDiv>
    </BrowserRouter>
  )
}

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

`
const SubFrame = styled.div`    
cursor: pointer;
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
justify-content: flex-end; 
align-items: flex-end;
transition: all 200ms ease-out;
  -webkit-text-stroke: 0px rgb(255,110,0);
&:hover{
  -webkit-text-stroke: 4px yellow;
  font-size: 5.2vh; 
  text-decoration-color: yellow;
}
&.selected{
  font-size: 5.4vh;
  -webkit-text-stroke: 4px black;
  text-decoration-color: black; 
}
`

const ContentDiv = styled.div` 

`

export default App;
