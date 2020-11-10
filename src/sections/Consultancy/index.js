import React from 'react';
import WindowSection from "../../components/WindowSection";
import * as S from './styles';
import Button from '../../components/Button';
import Iphone from '../../assets/img/iphone.png';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Consultancy(){
    const isMobile = useMediaQuery('(max-width:484px)');
    return (
        <WindowSection id='consultancy'>
            <S.SectionContainer isMobile={isMobile}>
                <S.SectionTitle1 isMobile={isMobile}>
                    El marketing digital
                </S.SectionTitle1>
                <S.SectionTitle2 isMobile={isMobile}>
                    puede ser fácil a simple vista, 
                    pero realmente no lo es
                </S.SectionTitle2>
                <S.SectionParagraph>
                    En el mundo digital <b>no existen fórmulas mágicas</b> ni estandarizadas y lo que puede funcionar para un tipo de negocio, puede que para otro sea una estrategia destinada al fracaso. 
                    Una cosa es cierta: hoy, más que nunca, <b>tener una presencia sólida en Internet es indispensable.</b>                
                    <br />
                    <br />
                    Si estás empezando a descubrir lo que el marketing digital puede hacer por tu negocio y <b>tienes dudas sobre qué camino seguir</b> y cuáles estrategias implementar, queremos darte algunas recomendaciones y acompañarte en el proceso.
                </S.SectionParagraph>   
                <Button styleType='callToAction'>
                    QUIERO UNA ASESORÍA GRATIS
                </Button> 
            </S.SectionContainer>
            {isMobile ?
                null :
                <S.ImageContainer>
                    <S.IphoneImage src={Iphone} alt='iphone-img'/>
                </S.ImageContainer>
            }
                
        </WindowSection>
    )
}