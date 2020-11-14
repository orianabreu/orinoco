import styled from 'styled-components';

export const ServiceContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: ${({isMobile})=> isMobile ? '100%' : '24%'};
    margin-bottom: ${({theme, isMobile})=> isMobile ? `${theme.scale.base*6}px` : null};
`;

export const TextContainer = styled.div`
    width: calc(100% - ${({theme})=>theme.scale.base*4}px);
    text-align: center;
    background-color: ${({theme})=> theme.palette.light};
    padding: ${({theme})=> theme.scale.base*2}px;  
    margin-top: -${({theme})=>theme.scale.base*2}px;
    height: 200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const Title = styled.h3`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=>theme.scale.h3};
    margin-bottom: ${({theme})=> theme.scale.base*2}px;
    text-decoration: underline;
    text-decoration-color: ${({theme})=> theme.palette.primary};
`;

export const Description = styled.p`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=>theme.scale.paragraph};
`;

export const ServiceImage = styled.img`
    width: 100%;
`;