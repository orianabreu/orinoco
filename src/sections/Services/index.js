import React from 'react';
import WindowSection from "../../components/WindowSection";
import ServiceCard from '../../components/ServiceCard';
import * as S from './styles';
import SocialMediaImg from '../../assets/img/socialmedia.jpg';
import BrandingImg from '../../assets/img/branding.jpg';
import WebImg from '../../assets/img/web.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '../../components/Button';

export default function Services(){
    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='services'>
            <S.SectionContainer isMobile={isMobile}>
                <S.SectionTitle isMobile={isMobile}>
                    Nuestros Servicios
                </S.SectionTitle>
                
                <S.ServicesContainer isMobile={isMobile}>
                    <ServiceCard 
                        image={SocialMediaImg}
                        title='Social Media'
                        description='Consultoría en Marketing Digital, estrategia de comunicación, creación de contenido, gestión de redes sociales, campañas de Ads.'
                    />
                    <ServiceCard 
                        image={BrandingImg}
                        title='Diseño'
                        description='Diseño gráfico, branding, identidad de marca, logo, fotografía de producto.'
                    />

                    <ServiceCard 
                        image={WebImg}
                        title='Web'
                        description='Diseño y desarrollo de webs y apps (IOs - Android), blogs, e-commerce.'
                    />
               </S.ServicesContainer>

                <S.ButtonContainer>
                    <Button styleType='callToAction'>
                        QUIERO SABER MÁS
                    </Button>
                </S.ButtonContainer>
            </S.SectionContainer>
            
        </WindowSection>
    )
}