import styled from "styled-components"



const CoolPopup = ({popup})=> {

    return ( 
        <>
        
            <PopupContain  style={{left:popup[1],top:popup[2]}}   {...(popup[0] ?{className: "popup"}:{}) } >
            { popup[0] === true &&(
                <PopupDiv> 
                    {popup[3]} 
                </PopupDiv>
                
                )
            }
            </PopupContain>
        </>
    )  
}

const PopupContain  = styled.div`
display: inline;
left:0px;
top:0px;
position: absolute;
opacity: 0;
   transition: opacity 150ms ease-in;
   transform: translate(-50%, 0);
&.popup{
   opacity: 1;
}
`

const PopupDiv = styled.div`
color:white;
padding:4px;
font-size: 18px;
border: 2px solid white;
background-color: rgb(255,110,0);

`

export default CoolPopup