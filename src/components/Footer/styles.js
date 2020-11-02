import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.palette.dark};
  color: ${({theme})=>theme.palette.light};
  padding: ${({theme})=>theme.scale.base*4}px;
`;

export const SocialMediaContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme})=>theme.scale.base*4}px;
`;

export const SocialMediaItem = styled.div`
  padding: 0 ${({theme})=>theme.scale.base}px;
  
  svg {
    color: ${({theme})=>theme.palette.light};
    font-size: ${({theme})=>theme.scale.h3};
    cursor:pointer;
  }
`;

export const Copyright = styled.p`
  width:100%;
  text-align:center;
  color: ${({theme})=>theme.palette.light};
  font-family: ${({theme})=>theme.fonts.secondary};
  font-size: ${({theme})=>theme.scale.paragraph};
`;