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

export const FormContainer = styled.div`
    padding: ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
    /* display: flex; */
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 500px;
`;

export const Question = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-weight: bold;
    font-size: ${({theme})=>theme.scale.h5};
`;

export const NewInput = styled.input`
    border: 1px solid ${({theme})=> theme.palette.grey};
    background-color: ${({theme})=> theme.palette.grey};
    width: 300px;
    border-radius: 4px;
    font-family: ${({theme})=>theme.fonts.secondary};
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: ${({theme})=>theme.scale.paragraph};
    color: ${({theme})=> theme.palette.dark};

    &:focus {
        outline: none;
        border-color: ${({theme})=> theme.palette.primary};
    }
`;