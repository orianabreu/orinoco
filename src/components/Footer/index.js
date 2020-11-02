import React from 'react';
import * as S from './styles';
import {AiOutlineInstagram, AiOutlineFacebook}  from 'react-icons/ai';

export default function Footer(){
    return (
        <S.Footer>
            <S.SocialMediaContainer>
                <S.SocialMediaItem>
                    <a href='https://www.facebook.com/Turpialdigitalmadrid/' target='_blank' rel="noreferrer"><AiOutlineFacebook/></a>
                </S.SocialMediaItem>
                <S.SocialMediaItem>
                    <a href='https://www.instagram.com/turpialdigital_agencia/' target='_blank' rel="noreferrer"><AiOutlineInstagram/></a>
                </S.SocialMediaItem>
            </S.SocialMediaContainer>
            <S.Copyright>© Copyright turpialdigital.com 2020 | All rights reserved</S.Copyright>
        </S.Footer>
    );
}