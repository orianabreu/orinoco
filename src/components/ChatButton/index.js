import React from 'react';
import * as S from './styles';
import { FaWhatsappSquare } from 'react-icons/fa'

export default function ChatButton() {
    return (
        <S.ChatIconContainer>
            <div className='overlay' />
            <FaWhatsappSquare />
        </S.ChatIconContainer>
    )
}