import React, {useState} from 'react';
import * as S from './styles';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrFormClose} from 'react-icons/gr';

export default function Drawer({setFormIsOpen}){
    const [isOpen,setIsOpen] = useState(false);
    return (
        <S.IconContainer>
            <GiHamburgerMenu onClick={()=>setIsOpen(true)}/>
            <S.Overlay isOpen={isOpen} onClick={()=>setIsOpen(false)} />
            <S.OptionsContainer isOpen={isOpen}>
                <S.Row justify='flex-end'>
                    <GrFormClose onClick={()=>setIsOpen(false)}/>
                </S.Row>
                <S.Row><a href='#home' onClick={()=> {
                    setFormIsOpen(false);
                    setIsOpen(false);
                }}>Home</a></S.Row>
                <S.Row><a href='#services' onClick={()=> {
                    setFormIsOpen(false)
                    setIsOpen(false);
                }}>Servicios</a></S.Row>
                <S.Row><a href='#knowus' onClick={()=> {
                    setFormIsOpen(false);
                    setIsOpen(false);
                }}>Quienes somos</a></S.Row>
            </S.OptionsContainer>
        </S.IconContainer>
    )
}