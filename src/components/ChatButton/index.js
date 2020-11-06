import React from 'react';
import * as S from './styles';
import { FaWhatsappSquare } from 'react-icons/fa'

export default function ChatButton(props) {
    return (
        <S.ChatIconContainer>
            <FaWhatsappSquare />
        </S.ChatIconContainer>
    )
}