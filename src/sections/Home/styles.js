import styled from 'styled-components';

export const VideoHome = styled.video`
    position: absolute;
    z-index: -1;
    height:${({isMobile})=>isMobile && '100%'};
    width:${({isMobile})=>!isMobile && '100%'};
    opacity: 0.6;
    padding-top: ${({theme})=> theme.scale.base*6.5}px;
`;

export const HomeText = styled.p`
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=> theme.scale.base*10}px;
    width: 700;
    color: ${({theme})=> theme.palette.light};
    padding: ${({theme})=> theme.scale.base*12}px;
`;