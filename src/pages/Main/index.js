import React from 'react';
import MainContainer from "../../components/MainContainer";
import Footer from '../../components/Footer';
import Home from "../../sections/Home";
import Consultancy from "../../sections/Consultancy";
import Services from "../../sections/Services";
import ChatButton from '../../components/ChatButton';
import KnowUs from '../../sections/KnowUs';

export default function Main(){
    return (
        <MainContainer>
            <Home/>
            <Consultancy/>
            <Services/>
            <KnowUs />
            <ChatButton />
            <Footer/>
        </MainContainer>
    )
}