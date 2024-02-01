import styled from "styled-components"
import { useState } from "react";
import { projects } from "../data/dataProjects"

import ProjectThumbnail from "./ProjectThumbnail";

const Projects = () =>{

    const [currentProject,setCurrentProject] = useState(projects[0]);
    const [selectedIndex,setSelectedIndex] = useState(0);

    return (
        <>
        <ProjectsDiv>
            <ProjectsContentDiv>
                <ProjectsMainTitle>Projects</ProjectsMainTitle> 
                    
                <ProjectsMainDiv> 
                            <SelectedAnimProject style={{backgroundImage:`url(${require("../assets/"+currentProject.gif)})`}}>
                                
                            </SelectedAnimProject>
                            <ProjectsDescription>
                                <LilTitle>{currentProject.name}</LilTitle>
                                <p>{currentProject.desc} </p>
                            </ProjectsDescription> 

                    <div style={{flex:1,borderRight:"solid 3px white"}}></div>
                    <ThumbnailGrid>
                        {
                            projects.map((project,index)=>{

                                return (

                                    <MiniProjectDiv key={"key"+String(index)} onClick={()=>{
                                        setCurrentProject(project);
                                        setSelectedIndex(index);
                                        window.scrollTo(0,0) 
                                         }
                                    }>
                                     {selectedIndex!=index && (
                                      <ProjectThumbnail project={project}></ProjectThumbnail>
                                     )}
                                     {selectedIndex===index && (
                                       <SelectedProject>{project.name}</SelectedProject>
                                     )}
                                    </MiniProjectDiv>
                                )
                            })
                        }
                    </ThumbnailGrid>
                </ProjectsMainDiv>
             </ProjectsContentDiv>
        </ProjectsDiv>
        </>
    )
}

export default Projects


const GoodOrange = "rgb(255,110,0)"

const LilTitle = styled.h3`
font-family: superstar;
font-size:4.5vh;
filter: drop-shadow(2px 0 0 ${GoodOrange})  drop-shadow(2px 2px 0 ${GoodOrange});
`

const SelectedProject = styled.div`
background-color: rgb(255,111,0);
background-repeat:no-repeat;
background-size: contain;
font-family: superstar;
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 4vh; 
border-radius: 10px;
width:22vh;
max-width:22vh;
height:22vh; 
max-height:22vh;
-webkit-text-stroke: 1.5px black;
box-shadow: rgb(255, 255, 255)0px 0px 0px 2px;
    box-shadow: rgba(255, 111, 0, 0.5) 0px 2px 26px 5px; 
` 

const SelectedAnimProject = styled.div`
    flex:16;
    border-radius: 5px;
    width:40vh;
    max-width:40vh;
    height:40vh; 
    max-height:40vh;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(255, 110, 0) 0px 0px 0px 5px;
`

const ProjectsDiv = styled.div` 
margin:0px 20px;
color:white; 
`

const MiniProjectDiv = styled.div`
cursor:pointer;
transition: 200ms ease-in;
max-height: 28vh;
&:hover{
    box-shadow: rgba(255, 111, 0, 0.5) 0px 2px 26px 5px; 
}
`

const ProjectsContentDiv = styled.div`
color:white;
font-size:10vh;
margin:0px 50px 50px 50px; 
z-index: 3; 
`
const ProjectsMainDiv = styled.div`
margin:5vh;
display:flex;
flex-direction:row;
gap:3vh;
justify-content: space-between;
`
const ProjectsDescription = styled.div`
flex:10;  
font-size:3vh;
`
const ThumbnailGrid = styled.div`
flex:28;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(22vh, 22vh));
gap:15px;
`

const ProjectsMainTitle = styled.div` 
font-family:  zero4B, 'Courier New', Courier, monospace;
width: 70%;
border-bottom:4px solid white ;
color:white;
font-size:9vh;
padding-left:30px;
margin: 10px 10px 10px 10px;
filter: drop-shadow(3px 0 0 ${GoodOrange})  drop-shadow(3px 3px 0 ${GoodOrange});
`