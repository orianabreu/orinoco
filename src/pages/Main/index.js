import React, {useState} from 'react';
import MainContainer from "../../components/MainContainer";
import Footer from '../../components/Footer';
import Home from "../../sections/Home";
import Consultancy from "../../sections/Consultancy";
import Services from "../../sections/Services";
import ChatButton from '../../components/ChatButton';
import KnowUs from '../../sections/KnowUs';
import ConsultancyForm from '../../sections/Form';
import SnackBar from '../../components/SnackBar';

export default function Main(){
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);

    return (
        <MainContainer>
            {!formIsOpen && <Home/>}
            {!formIsOpen && <Consultancy setFormIsOpen={setFormIsOpen}/>}
            {!formIsOpen && <><Services/>
            <KnowUs />
            </>}
            {formIsOpen && <ConsultancyForm setFormIsOpen={setFormIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}/>}
            <SnackBar open={snackBarIsOpen} setOpen={setSnackBarIsOpen}/>
            <ChatButton />
            <Footer/>
        </MainContainer>
    )
}