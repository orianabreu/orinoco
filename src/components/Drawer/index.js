import React, {useState} from 'react';
import * as S from './styles';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrFormClose} from 'react-icons/gr';

export default function Drawer(){
    const [isOpen,setIsOpen] = useState(false);
    return (
        <S.IconContainer>
            <GiHamburgerMenu onClick={()=>setIsOpen(true)}/>
            <S.Overlay isOpen={isOpen} onClick={()=>setIsOpen(false)} />
            <S.OptionsContainer isOpen={isOpen}>
                <S.Row justify='flex-end'>
                    <GrFormClose onClick={()=>setIsOpen(false)}/>
                </S.Row>
                <S.Row><a href='#home'>Home</a></S.Row>
                <S.Row><a href='#services'>Servicios</a></S.Row>
                <S.Row><a href=''>Quienes somos</a></S.Row>
            </S.OptionsContainer>
        </S.IconContainer>
    )
}