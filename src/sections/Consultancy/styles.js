import styled from 'styled-components';
import Iphone from '../../assets/img/iphone.png';

export const SectionContainer = styled.div`
    display:flex;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;

    & button {
        width: ${({isMobile})=> isMobile? '100%' : 'auto'};
        position:relative;
        padding:${({theme})=>theme.scale.base*2}px;
        margin-top: ${({theme})=>theme.scale.base*6}px;
    }
`;

export const OnboardingContainer = styled.div`
    max-width: ${({isOnCustomBreakpoint})=>isOnCustomBreakpoint?60:100}%;
    padding:${({theme,isMobile})=>theme.scale.base*(isMobile?4:10)}px;
`;

export const SectionTitle1 = styled.h1`
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    color: ${({theme})=>theme.palette.dark};
    text-transform: uppercase;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*7}px`};
    text-decoration: underline;
    text-decoration-color: ${({theme})=>theme.palette.primary};
    margin-bottom: ${({theme})=>theme.scale.base*2}px;
    margin-top: ${({theme})=>theme.scale.base*2}px;
`;

export const SectionTitle2 = styled.p`
    width: 100%;
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    color: ${({theme})=>theme.palette.dark};
    text-transform: uppercase;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h5 : theme.scale.h3};
    margin-bottom: ${({theme})=>theme.scale.base*6}px;
`;

export const SectionParagraph = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-weight: 400;
    font-size: ${({theme})=>theme.scale.paragraph};
    line-height: ${({theme})=>theme.scale.h4};
    letter-spacing: 0.02rem;
`;

export const ImageContainer = styled.div` 
    padding:${({theme})=> theme.scale.base*10}px;    
    display: ${({shouldShow})=>shouldShow? "flex" : "none"};
    align-items: center;
`;

export const IphoneImage = styled.div`
    background-image: url(${Iphone});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 337px;
    height: 662px;
    transform: rotate(20deg);
`;