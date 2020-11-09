import styled, {css} from 'styled-components';

export const buttonTypes = {
    callToAction:css`
      border-radius: 4px;
      background-color: ${({theme})=>theme.palette.primary};
      
      &:hover {
        background-color: ${({theme})=>theme.palette.red};
        color: ${({theme})=>theme.palette.light};
    }`,

    freeConsultancy:css`
        border-radius: 4px;
        background-color: ${({theme})=>theme.palette.primary};
        font-size: ${({theme})=>theme.scale.paragraph}; 
        margin-top: ${({theme})=>theme.scale.base*3}px;    
      
      &:hover {
        background-color: ${({theme})=>theme.palette.red};
        color: ${({theme})=>theme.palette.light}; 
    `
}

export const Button = styled.button`
    color: ${({theme})=>theme.palette.dark};   
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: ${({theme})=>theme.scale.h5};  
    font-weight: 700;
    cursor: pointer;
    border: none;
    padding: ${({theme})=>theme.scale.base}px ${({theme})=>theme.scale.base*2}px;
    position: absolute;
    
    ${({styleType})=> styleType && buttonTypes[styleType]};
`;