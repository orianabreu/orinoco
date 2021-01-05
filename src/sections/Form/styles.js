import styled from 'styled-components';

export const OnboardingContainer = styled.div`
    padding: ${({theme})=> theme.scale.base*12}px ${({theme,isMobile})=>theme.scale.base*(isMobile?5:34)}px ${({theme,isMobile})=>theme.scale.base*(isMobile?2:3)}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SectionTitle = styled.h1`
    color: ${({theme})=> theme.palette.dark};
    font-family: ${({theme})=>theme.fonts.primary};
    font-weight: 700;
    font-size: ${({theme, isMobile})=>isMobile ? theme.scale.h2 : `${theme.scale.base*5}px`};
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${({theme})=> theme.palette.primary};
    text-align: center;
    margin-bottom: ${({theme})=> theme.scale.base*5}px;
`;

export const SeccionText = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=> theme.scale.paragraph};
    text-align: justify;
`;

export const FormContainer1 = styled.div`
    padding: ${({theme})=>theme.scale.base*4}px 0 0;
    display: grid;
    grid-template-columns: ${({isMobile})=> isMobile ? "300px" : "500px 500px"};
    
`;

export const FormContainer2 = styled.div`
    padding: 0 ${({theme, isMobile})=>theme.scale.base*(isMobile?6:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin: auto auto ${({theme})=> theme.scale.base*2}px auto;
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
    margin: 10px auto 10px auto;
    display: block;
    font-size: ${({theme})=>theme.scale.paragraph};
    color: ${({theme})=> theme.palette.dark};

    &:focus {
        outline: none;
        border-color: ${({theme})=> theme.palette.primary};
    }
`;

export const BigInput = styled.input`
    border: 1px solid ${({theme})=> theme.palette.grey};
    background-color: ${({theme})=> theme.palette.grey};
    width: ${({isMobile})=> isMobile ? "300px" : "800px"};
    height: ${({isMobile})=> isMobile ? "100px" : "auto"};
    border-radius: 4px;
    font-family: ${({theme})=>theme.fonts.secondary};
    padding: 10px 15px;
    margin: 10px auto 10px auto;
    display: block;
    font-size: ${({theme})=>theme.scale.paragraph};
    color: ${({theme})=> theme.palette.dark};
    overflow: hidden;

    &:focus {
        outline: none;
        border-color: ${({theme})=> theme.palette.primary};
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 25px 0;
`;

export default NewInput;