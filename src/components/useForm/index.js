import { useState } from 'react';

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
        email: '',
        businessname: '',
        sector: '',
        meetgoal: '',
        businessweb: ''
    })
    
    const [errors, setErrors] = useState({})
    
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    // const validateInfo = (values) => {

    //     let errors = {};

    //     if (!values.email) {
    //         errors.email = 'Email required';
    //       } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //         errors.email = 'Email address is invalid';
    //       }
    // }

    const handleSubmit = () => {
        console.log('Submitted');
    }

    return {
        values,
        handleChange,
        handleSubmit
    }
}

export default useForm;