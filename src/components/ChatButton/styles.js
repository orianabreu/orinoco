import styled from 'styled-components';

export const ChatIconContainer = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 2.5vw;
    right: 2.5vw;
    z-index: 99;
    background-color: transparent;
    border-style: none;       
    width:3.5vw;
    height:3.5vw;     
    cursor:pointer;
    
    @media only screen and (max-width: 484px){
        width:12vw;
        height:12vw; 
        bottom: 2.5vw;
        right: 2.5vw;    
    }
    
    .overlay{
      width: 70%;
      height: 70%;
      position:absolute;
      top:15%;
      left:15%;
      background-color: white;
    }
    
    &:focus{
      outline: 0;
    }

    svg{         
      width:100%;
      height:100%;
      color: ${({theme})=>theme.palette.whatsapp};   
      z-index:1;
    }  
`;