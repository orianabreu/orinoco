import styled from 'styled-components';

export const VideoContainer = styled.div`
  overflow: hidden;
  max-height: 100vh;
  max-width: 100vw;  
`;

export const VideoHome = styled.video`
    height:${({isMobile})=>isMobile && '100%'};
    width:${({isMobile})=>!isMobile && '100%'};
    opacity: 0.6;
    padding-top: ${({theme})=> theme.scale.base*6.5}px;
`;

export const TextOverlay = styled.div`
  position:absolute;
  left:0;
  top:0;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100vw;
  height:100vh;
  background-color: rgba(0,0,0,0.4);
  padding: ${({theme, isMobile})=> isMobile? theme.scale.base*3:theme.scale.base*12}px;
  
  & p{
    position:relative;
  }
  
  & button {
    width: ${({isMobile})=> isMobile? '100%' : 'auto'};
    position:relative;
  }
`;

export const HomeText = styled.p`
    font-family: ${({theme})=>theme.fonts.primary};   
    font-size: ${({theme, isMobile})=> isMobile? theme.scale.h2 :`${theme.scale.base*10}px`};
    font-weight: 800;
    color: ${({theme})=> theme.palette.light};   
    margin-bottom: ${({theme})=>theme.scale.base*4}px; 
`;