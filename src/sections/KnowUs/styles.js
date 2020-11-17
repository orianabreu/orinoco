import styled from 'styled-components';
import KnowUsImg from '../../assets/img/knowus.png'

export const SectionContainer = styled.div`
    background-color: ${({theme})=> theme.palette.primary};
    display: flex;
    flex-direction: ${({isMobile})=> isMobile ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height:100vh;
    padding: ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
`;

export const OnboardingContainer = styled.div`
    padding: ${({theme,isMobile})=>theme.scale.base*(isMobile?0:6)}px 0 ${({theme,isMobile})=>theme.scale.base*(isMobile?0:6)}px ${({theme,isMobile})=>theme.scale.base*(isMobile?0:6)}px;
    width: ${({isMobile})=> isMobile ? '100%' : '50%'};
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
`;

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*7}px`};
    text-transform: uppercase;
    margin-bottom: ${({theme})=>theme.scale.base*4}px;
    margin-top: ${({theme, isMobile})=> isMobile ? `${theme.scale.base*4}px` : 0};
`;

export const SectionParagraph = styled.p`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.secondary};
`;

export const SectionImage = styled.div`
    background-image: url(${KnowUsImg});
    background-size: contain;
    background-size: cover;
    background-position: center;
    width: ${({isMobile})=> isMobile ? '350px' : '600px'};
    height: ${({isMobile})=> isMobile ? '300px' : '450px'};
`;

