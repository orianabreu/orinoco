import styled from 'styled-components';

export const OnboardingContainer = styled.div`
    padding: ${({theme})=> theme.scale.base*8}px ${({theme,isMobile})=>theme.scale.base*(isMobile?4:6)}px 0 ${({theme,isMobile})=>theme.scale.base*(isMobile?4:6)}px;
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
    margin-bottom: ${({theme})=> theme.scale.base*6}px;
`;

export const SeccionText = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=> theme.scale.paragraph};
    text-align: center;
`;

export const FormContainer1 = styled.div`
    padding: ${({theme, isMobile})=>theme.scale.base*(isMobile?4:8)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?1:3)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
    display: grid;
    grid-template-columns: ${({isMobile})=> isMobile ? "300px" : "500px 500px"};
    justify-content: center;
    overflow: hidden;
`;

export const FormContainer2 = styled.div`
    padding: 0 ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px ${({theme, isMobile})=>theme.scale.base*(isMobile?4:10)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    text-align: center;
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
    width: ${({isMobile})=> isMobile ? "300px" : "500px"};
    height: 100px;
    border-radius: 4px;
    font-family: ${({theme})=>theme.fonts.secondary};
    padding: 10px 15px;
    margin: 10px auto 10px auto;
    display: block;
    text-align: center;
    font-size: ${({theme})=>theme.scale.paragraph};
    color: ${({theme})=> theme.palette.dark};
    overflow: hidden;

    &:focus {
        outline: none;
        border-color: ${({theme})=> theme.palette.primary};
    }

    &:placeholder-shown{
        text-overflow: ellipsis;
    }
`;

export default NewInput;