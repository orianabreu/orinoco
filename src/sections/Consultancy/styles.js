import styled from 'styled-components';

export const SectionContainer = styled.div`
    width: ${({isMobile})=>isMobile?100:47}%;
    height: 100vh;
    padding: ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
    margin-bottom: ${({theme, isMobile})=>isMobile ? theme.scale.base*8 : null}px;
    float: left;

    & button {
    width: ${({isMobile})=> isMobile? '100%' : 'auto'};
    position:relative;
    padding:${({theme})=>theme.scale.base*2}px;
    margin-top: ${({theme})=>theme.scale.base*6}px;
  }
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
    width:100%;
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
    width: 50%;
    height: 100vh;
    padding: ${({theme})=>theme.scale.base*4}px;
    float: right; 
    text-align: center;   
`;

export const IphoneImage = styled.img`
    width: 45%;
    transform: rotate(20deg);
    margin-top: ${({theme})=>theme.scale.base*6}px;
`;