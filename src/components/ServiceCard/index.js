import React from 'react';
import * as S from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ServiceCard({title, description, image}) {
    
    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <S.ServiceContainer isMobile={isMobile}>    
            <S.ServiceImage src={image} alt='image'/>

            <S.TextContainer>
                <S.Title>{title}</S.Title>   
                <S.Description>{description}</S.Description>
            </S.TextContainer>
        </S.ServiceContainer>
    )
}