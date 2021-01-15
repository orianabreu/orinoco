export default function validateForm(values) {

    let errors = {};

    if (!values.username) {
        errors.username = 'Requerido'
    }
    if (!values.phone) {
        errors.phone = 'Requerido'
    } else if (values.phone.length < 12) {
        errors.phone = 'Teléfono inválido'
    }
    if (!values.email) {
        errors.email = 'Requerido'
    } else if ((!/\S+@\S+\.\S+/.test(values.email))) {
        errors.email = 'Email inválido'
    }
    if (!values.businessname) {
        errors.businessname = 'Requerido'
    }
    if (!values.businessweb) {
        errors.businessweb = 'Requerido'
    }

    return errors;
}

//check if email is correct

//name required value 

//phone valid number or required 

//business name required

//business web required 