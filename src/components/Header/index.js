import React from 'react';
import * as S from './styles';
import Logo from '../../assets/img/logo-turpial-solo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from "../Drawer";

export default function Header(){
    const isMobile = useMediaQuery('(max-width:484px)');
    return (
        <S.Container>
            <S.LogoContainer>
                <img src={Logo} alt='logo_turpial'/>
            </S.LogoContainer>
            {
                isMobile ?
                    <Drawer/>
                    :
                    <nav>
                        <S.NavList>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#services'>Servicios</a></li>
                            <li><a href=''>Quienes somos</a></li>
                        </S.NavList>
                    </nav>
            }
        </S.Container>
    )
}