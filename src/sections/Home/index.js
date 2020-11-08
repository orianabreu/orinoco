import React from 'react';
import WindowSection from "../../components/WindowSection";
import Button from '../../components/Button';
import * as S from './styles';
import HomeVideo from '../../assets/video/videohome.mp4';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function Home(){

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='home'>
            <S.VideoContainer isMobile={isMobile}>
                <S.VideoHome isMobile={isMobile} loop autoPlay muted>
                    <source src={HomeVideo} type='video/mp4'/>
                </S.VideoHome>
            </S.VideoContainer>
            <S.TextOverlay isMobile={isMobile}>
                <S.HomeText isMobile={isMobile}>
                    Hacemos crecer tu negocio a través de marketing creativo
                </S.HomeText>
                <Button styleType='callToAction'>QUIERO AUMENTAR MIS VENTAS</Button>
            </S.TextOverlay>
        </WindowSection>
    )
}