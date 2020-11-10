import styled from 'styled-components';

export const SectionContainer = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-color: ${({theme})=> theme.palette.dark};
    text-align: center;
`;

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.primary};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*7}px`};
    text-transform: uppercase;
    margin-top: ${({theme})=> theme.scale.base*8}px;
`;