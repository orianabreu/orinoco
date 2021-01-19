import React from 'react';
import * as S from './styles';
import Logo from '../../assets/img/logo-web.png';
import Logotipo from '../../assets/img/logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from "../Drawer";

export default function Header(){
    const isMobile = useMediaQuery('(max-width:484px)');
    return (
        <S.Container>
            {isMobile ?
                    <>
                    <S.LogoContainer isMobile={isMobile}>
                        <a href='#home'>
                            <img src={Logotipo} alt='logo_turpial_2'/>
                        </a>
                    </S.LogoContainer>
                    <Drawer/>
                    </>
                    :
                    <><S.LogoContainer>
                        <a href='#home'>
                            <img src={Logo} alt='logo_turpial'/>
                        </a>
                    </S.LogoContainer>
                    <nav>
                        <S.NavList>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#services'>Servicios</a></li>
                            <li><a href='#knowus'>Quienes somos</a></li>
                        </S.NavList>
                    </nav></>
            }
        </S.Container>
    )
}