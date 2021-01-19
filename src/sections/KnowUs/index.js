import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function KnowUs() {
    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='knowus'>

            <S.SectionContainer isMobile={isMobile}>
                <S.SectionImage isMobile={isMobile}/>

                <S.OnboardingContainer isMobile={isMobile}>
                <S.SectionTitle isMobile={isMobile}>
                    HELLO WORLD!
                </S.SectionTitle>
                <S.SectionParagraph>
                    Somos una <b>Agencia de Marketing Digital</b> ubicada en Madrid, fundada por dos creativos y apasionados de la comunicación, las ideas y el marketing digital. Tenemos <b>cinco años de experiencia</b> conectando marcas con clientes ideales y haciendo del branding el atractivo principal.
                    <br/>
                    <br/>
                    Nuestra misión: <b>apoyarte en el crecimiento de tu negocio</b>, construyendo una marca sólida, atractiva y con un enorme potencial.
                </S.SectionParagraph>
                </S.OnboardingContainer>
            </S.SectionContainer>

        </WindowSection>
    )
}