import styled from 'styled-components';

export const VideoHome = styled.video`
    width: 100vw;
    opacity: 0.6;
    padding-top: ${({theme})=> theme.scale.base*6.5}px;
    position: absolute;
    z-index: -1;
`;

export const HomeText = styled.p`
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=> theme.scale.base*10}px;
    width: 700;
    color: ${({theme})=> theme.palette.light};
    padding: ${({theme})=> theme.scale.base*12}px;
`;