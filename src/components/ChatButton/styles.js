import styled from 'styled-components';

export const ChatIconContainer = styled.div`
    display:flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
    

    svg{
      font-size: ${({theme})=>theme.scale.base*8}px;
      color: ${({theme})=>theme.palette.red};
      margin: 0 ${({theme})=>theme.scale.base*4}px ${({theme})=>theme.scale.base*4}px 0;
    }  
`;