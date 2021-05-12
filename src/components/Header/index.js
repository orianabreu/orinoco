import React from 'react';
import * as S from './styles';
import Logo from '../../assets/img/logo-web.PNG';
import Logotipo from '../../assets/img/logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from "../Drawer";

export default function Header({setFormIsOpen}){
    const isMobile = useMediaQuery('(max-width:484px)');
    return (
        <S.Container>
            {isMobile ?
                    <>
                    <S.LogoContainer isMobile={isMobile}>
                        <a href='#home' onClick={()=>setFormIsOpen(false)}>
                            <img src={Logotipo} alt='logo_turpial_2'/>
                        </a>
                    </S.LogoContainer>
                    <Drawer setFormIsOpen={setFormIsOpen}/>
                    </>
                    :
                    <><S.LogoContainer>
                        <a href='#home' onClick={()=>setFormIsOpen(false)}>
                            <img src={Logo} alt='logo_turpial'/>
                        </a>
                    </S.LogoContainer>
                    <nav>
                        <S.NavList>
                            <li><a href='#home' onClick={()=>setFormIsOpen(false)}>Home</a></li>
                            <li><a href='#services' onClick={()=>setFormIsOpen(false)}>Servicios</a></li>
                            <li><a href='#knowus' onClick={()=>setFormIsOpen(false)}>Quienes somos</a></li>
                        </S.NavList>
                    </nav></>
            }
        </S.Container>
    )
}