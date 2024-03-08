
import { useEffect, useState } from "react"
import styled from "styled-components"
 
const ProjectWithDesc = ({project}) =>{
    const [anim,setAnim] = useState(false);
     
  
    const _pngUrl = require("../assets/"+project.src);
    const _gifUrl = require("../assets/"+project.gif); 

    return (  


        <BigProjectDiv id="bigId" onMouseOver={()=>{
           setAnim(true); }}
           onMouseOut={()=>{
            setAnim(false); }}
         > 
            <ProjectDesc >{project.desc}</ProjectDesc>
            <ProjectDiv  {...(anim ?{style:{...{"backgroundImage":`url(${_gifUrl})`}}}:{style:{...{"backgroundImage":`url(${_pngUrl})`}}  }  ) }>
                {project.name} 
                <Loader style={{backgroundImage:""}} />
            </ProjectDiv> 
         </BigProjectDiv>
            
    )
}

const GoodOrange = "rgb(255,110,0)";

const BigProjectDiv = styled.div`   
    cursor: pointer;
    pointer-events: all;
    background-color: #333333;
    border-radius:10px;
    position: relative;
    margin:auto;
    margin-top:10px; 
    width:fit-content;
    max-height:35vh; 
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: 200ms ease-in; 
    border: 2px white solid;
    &:hover{
         background-color: #444444; 
        filter: drop-shadow(-4px 0 0 ${GoodOrange}) drop-shadow(0 4px 0 ${GoodOrange}) drop-shadow(4px -4px 0 ${GoodOrange});
    }
`

const ProjectDesc = styled.div`
font-family: arial;
display: inline-block; 
font-size: 2.3vh;
vertical-align: top; 
width:25vh;
height:35vh;
padding:18px;
`
 
const ProjectDiv = styled.div`
background-color: rgb(255,111,0);
background-repeat:no-repeat;
background-size: contain;
font-family: zero4b;
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 4vh; 
border-radius: 10px;
width:35vh;
max-width:35vh;
height:35vh; 
max-height:35vh;
-webkit-text-stroke: 2px black;
`
const Loader = styled.div`
    visibility: hidden;
    height:0px;
    width: 0px;
`

export default ProjectWithDesc

