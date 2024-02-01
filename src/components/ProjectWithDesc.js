
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

const ProjectDesc = styled.div`
font-family: arial;
display: inline-block; 
font-size: 2.3vh;
vertical-align: top; 
width:45vh;
height:35vh;
padding:12px;
`
const BigProjectDiv = styled.div`   
    background-color: rgba(255,255,255,0.10);
    border-radius:10px;
    position: relative;
    margin:auto;
    margin-top:10px; 
    width:fit-content;
    max-height:35vh; 
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: 200ms ease-in;
    &:hover{
        background-color: rgba(255,255,255,0.15); 
        box-shadow: rgba(255, 111, 0, 0.5) 0px 0px 16px; 
    }
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
-webkit-text-stroke: 1px black;
`
const Loader = styled.div`
    visibility: hidden;
    height:0px;
    width: 0px;
`

export default ProjectWithDesc

