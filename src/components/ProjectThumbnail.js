
import { useEffect,useState } from "react"
import styled from "styled-components"
 
const ProjectThumbnail = ({project}) =>{
  
    const [anim,setAnim] = useState(false);
    const _pngUrl = require("../assets/"+project.src);
    const _gifUrl = require("../assets/"+project.gif); 

    return (  
            <ProjectDiv onMouseOver={()=>{
           setAnim(true); }}
           onMouseOut={()=>{
            setAnim(false); }}
         
            
            {...(anim ?{style:{...{"backgroundImage":`url(${_gifUrl})`}}}:{style:{...{"backgroundImage":`url(${_pngUrl})`}}  }  ) } >
                {project.name} 
                <Loader style={{backgroundImage:`url(${_gifUrl}`}} />
            </ProjectDiv> 
    )
}
 
const ProjectDiv = styled.div`
background-color: rgb(255,111,0);
background-repeat:no-repeat;
background-size: contain;
font-family: superstar;
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 3.4vh; 
border-radius: 10px;
width:22vh;
max-width:22vh;
height:22vh; 
max-height:22vh;
-webkit-text-stroke: 1.5px black;
box-shadow: rgb(255, 255, 255)0px 0px 0px 2px;
`
const Loader = styled.div`
    visibility: hidden;
    height:0px;
    width: 0px;
`

export default ProjectThumbnail

