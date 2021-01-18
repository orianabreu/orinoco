import { useState, useEffect } from 'react';

const useForm = (submit, validateForm) => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
        email: '',
        businessname: '',
        sector: '',
        meetgoal: '',
        businessweb: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);
    
    
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
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit();
        }
    }, [errors]);

    useEffect(() => {}, []);

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;