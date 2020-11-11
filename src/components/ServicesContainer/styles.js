import styled from 'styled-components';

export const ServiceContainer = styled.div`
    background-color: red;
    width: 24%;
    height: 60%;
    position: absolute;
    margin: ${({theme})=> theme.scale.base*12}px ${({theme})=> theme.scale.base*4}px 0 ${({theme})=> theme.scale.base*4}px;
    text-align: center;
`;

export const TextContainer = styled.div`
    background-color: ${({theme})=> theme.palette.light};
    width: 60%;
    height: 35%;
    padding: ${({theme})=> theme.scale.base*2}px;
    display: inline-block;
`;

export const Title = styled.h3`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=>theme.scale.h3};
    margin: 0 0 ${({theme})=> theme.scale.base*3}px 0;
    text-decoration: underline;
    text-decoration-color: ${({theme})=> theme.palette.primary};
`;

export const Description = styled.p`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=>theme.scale.paragraph};
`;

export const ImageService = styled.img`
    width: 80%;
`;