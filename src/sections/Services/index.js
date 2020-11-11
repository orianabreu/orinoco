import React from 'react';
import WindowSection from "../../components/WindowSection";
import ServicesContainer from '../../components/ServicesContainer';
import * as S from './styles';

export default function Services(){
    return (
        <WindowSection id='services'>
            <S.SectionContainer>
                <S.SectionTitle>
                    Nuestros Servicios
                </S.SectionTitle>

                <ServicesContainer />
            </S.SectionContainer>
            
        </WindowSection>
    )
}