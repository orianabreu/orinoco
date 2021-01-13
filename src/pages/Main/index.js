import React, {useState} from 'react';
import MainContainer from "../../components/MainContainer";
import Footer from '../../components/Footer';
import Home from "../../sections/Home";
import Consultancy from "../../sections/Consultancy";
import Services from "../../sections/Services";
import ChatButton from '../../components/ChatButton';
import KnowUs from '../../sections/KnowUs';
import ConsultancyForm from '../../sections/Form';

export default function Main(){
    const [formIsOpen, setFormIsOpen] = useState(false);

    return (
        <MainContainer>
            {!formIsOpen && <Home/>}
            {!formIsOpen && <Consultancy setFormIsOpen={setFormIsOpen}/>}
            {!formIsOpen && <><Services/>
            <KnowUs />
            </>}
            {formIsOpen && <ConsultancyForm />}
            <ChatButton />
            <Footer/>
        </MainContainer>
    )
}