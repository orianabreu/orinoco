import styled from 'styled-components';

export const OnboardingContainer = styled.div`
    padding: ${({isMobile}) => isMobile ? 20 : 7}% ${({isMobile}) => isMobile ? 10 : 17}% ${({isMobile}) => isMobile ? 5 : 2}%;
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

export const SectionText = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=> theme.scale.paragraph};
    text-align: justify;
    margin: ${({theme})=> theme.scale.base*3}px ${({theme})=> theme.scale.base*2}px ${({theme})=> theme.scale.base*5}px;
`;

export const SeccionText2 = styled.p`
    font-family: ${({theme})=>theme.fonts.secondary};
    font-size: ${({theme})=> theme.scale.paragraph};
    text-align: center;
    margin: ${({theme})=> theme.scale.base}px auto;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 40px;

    & button {
        margin-top: 20px;
    }
`;

