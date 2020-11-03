import React from 'react';
import WindowSection from "../../components/WindowSection";
import * as S from './styles';
import HomeVideo from '../../assets/video/videohome.mp4';

export default function Home(){
    return (
        <WindowSection id='home'>
            <S.VideoHome loop autoPlay>
                <source src={HomeVideo} type='video/mp4'/>
            </S.VideoHome>
            <S.HomeText>Hacemos crecer tu negocio a través de marketing creativo</S.HomeText>
        </WindowSection>
    )
}