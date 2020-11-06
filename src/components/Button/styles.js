import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({theme})=>theme.palette.primary};
    color: ${({theme})=>theme.palette.dark};
    border-radius: 20px;
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=>theme.scale.paragraph};
    font-weight: 400;
    cursor: pointer;
    border: none;
    padding: ${({theme})=>theme.scale.base}px ${({theme})=>theme.scale.base*2}px;
    position: absolute;

    &:hover {
        background-color: ${({theme})=>theme.palette.dark};
        color: ${({theme})=>theme.palette.light};
    }
`;