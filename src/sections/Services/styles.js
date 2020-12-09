import styled from 'styled-components';

export const SectionContainer = styled.div`
    background-color: ${({theme})=> theme.palette.dark};
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100vw;
    min-height:100vh;
    padding: 0 ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
`;

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.primary};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*7}px`};
    text-transform: uppercase;
    width: 100vw;
    text-align: center;
    padding: ${({theme})=>theme.scale.base*8}px;

`;

export const ServicesContainer = styled.div`
    display:flex;
    flex-direction: ${({isMobile})=> isMobile ? 'column' : 'row'};
    align-items: center;
    justify-content: ${({isMobile})=> isMobile ? 'center' : 'space-between'};
`;

export const ButtonContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: ${({theme})=>theme.scale.base*2}px;
    margin-top: ${({theme, isMobile})=> isMobile ? 0 : `${theme.scale.base*7}px`};
    margin-bottom: ${({theme, isMobile})=> isMobile ? `${theme.scale.base*5}px` : 0};
`;