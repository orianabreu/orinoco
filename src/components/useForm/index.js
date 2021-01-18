import { useState } from 'react';

const useForm = (validateForm) => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
        email: '',
        businessname: '',
        sector: '',
        meetgoal: '',
        businessweb: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        phone: '',
        email: '',
        businessname: '',
        businessweb: ''
    })
    
    
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateForm(values));
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;