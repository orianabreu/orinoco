import React from 'react';
import WindowSection from "../../components/WindowSection";
import * as S from './styles';
import Button from '../../components/Button';

export default function Consultancy(){
    return (
        <WindowSection id='consultancy'>
            <S.SectionText>
                <S.SectionTitle1>
                    El marketing digital
                </S.SectionTitle1>
                <S.SectionTitle2>
                    puede ser fácil a simple vista, 
                    <br />
                    pero realmente no lo es
                </S.SectionTitle2>
                <S.SectionParagraph>
                    En el mundo digital no existen fórmulas mágicas ni estandarizadas y lo que puede funcionar para un tipo de negocio, puede que para otro sea una estrategia destinada al fracaso. 
                    Una cosa es cierta: hoy, más que nunca, tener una presencia sólida en Internet es indispensable.                
                    <br />
                    Si estás empezando a descubrir lo que el marketing digital puede hacer por tu negocio y tienes dudas sobre qué camino seguir y cuáles estrategias implementar, queremos darte algunas recomendaciones y acompañarte en el proceso.
                </S.SectionParagraph>    
            </S.SectionText>

            <Button>
                QUIERO UNA ASESORÍA GRATIS
            </Button>
        </WindowSection>
    )
}