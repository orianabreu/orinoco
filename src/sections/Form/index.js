import React, { useState } from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import Button from '../../components/Button';
import useForm from '../../components/useForm';
import validateForm from '../../components/validateForm/index';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '297px',
      },
    },
  }));

const otherStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '30ch',
  },
}));



export default function ConsultancyForm() {

    const isMobile = useMediaQuery('(max-width:484px)');
    const isBigScreen = useMediaQuery('(min-width:1562px)');

    const styles = useStyles();
    const classes = otherStyles();

    const {values, errors, handleChange, handleSubmit} = useForm(validateForm);

    return (
        <WindowSection id='myform'>

            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                    ¡Enhorabuena! Has dado el primer paso para hacer crecer tu negocio y, con ello, tus ganancias. Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita. ¡Estamos ansiosos por conocerte!
                </S.SectionText>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.root}>
                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        isMobile={isMobile}
                        name='username'
                        vale={values.username}
                        onChange={handleChange}
                        helperText={errors.username && <S.ErrorText>{errors.username}</S.ErrorText>}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono'
                        isMobile={isMobile}
                        name='phone'
                        vale={values.phone}
                        onChange={handleChange}
                        helperText={errors.phone && <S.ErrorText>{errors.phone}</S.ErrorText>}
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        isMobile={isMobile}
                        name='email'
                        vale={values.email}
                        onChange={handleChange}
                        helperText={errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}
                        />
                    </div>
                    
                    <div className={classes.root}>    

                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>Nombre de tu negocio</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={1}
                            variant="filled"
                            name='businessname'
                            vale={values.businessname}
                            onChange={handleChange}
                            helperText={errors.businessname && <S.ErrorText>{errors.businessname}</S.ErrorText>}
                            />
                        </FormControl>

                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>¿A qué se dedica tu negocio?</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Ej: Somos una agencia de marketing digital especializada en el sector gastronómico"
                            variant="filled"
                            name='sector'
                            vale={values.sector}
                            onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>¿Qué te gustaría lograr con la asesoría?</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Ej: Tener una idea clara de cómo debo gestionar mi presencia digital para aumentar mis ventas"
                            variant="filled"
                            name='meetgoal'
                            vale={values.meetgoal}
                            onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl fullWidth className={classes.margin} variant="filled">
                            <InputLabel>Si tu negocio tiene página web y redes sociales, déjanoslas aquí. En caso contrario, escribe N/A</InputLabel>
                            <FilledInput 
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            variant="filled"
                            name='businessweb'
                            vale={values.businessweb}
                            onChange={handleChange}
                            helperText={errors.businessweb && <S.ErrorText>{errors.businessweb}</S.ErrorText>}
                            />
                        </FormControl>
                    </div>
                </form>
            
                    <S.SectionText isBigScreen={isBigScreen} isMobile={isMobile}>
                        <b>Selecciona la fecha y hora de tu preferencia.</b>
                        <br/>
                        Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                    </S.SectionText>

                <S.DateContainer isMobile={isMobile}>
                    <DateAndTimePicker/>
                </S.DateContainer>

            </S.OnboardingContainer>

                    <S.ButtonContainer isMobile={isMobile}>
                        <Button styleType='callToAction' onClick={handleSubmit}>
                            AGENDAR
                        </Button>
                    </S.ButtonContainer>

        </WindowSection>
    )
}