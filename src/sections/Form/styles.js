import styled from 'styled-components';

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*5}px`};
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${({theme})=> theme.palette.primary};
    width: 100vw;
    text-align: center;
    padding: ${({theme})=> theme.scale.base*6}px 0 ${({theme})=> theme.scale.base*6}px 0;
`;