import React from 'react';
import * as S from './styles';
import Image from '../../assets/img/socialmedia.jpg'


export default function ServicesContainer() {
    return (
        <S.ServiceContainer>
        
            <S.ImageService src={Image}/>
            <S.TextContainer>
                <S.Title>
                    Social Media
                </S.Title>
                <S.Description>
                    esto es una descripcion
                </S.Description>
            </S.TextContainer>
            
        </S.ServiceContainer>
    )
}