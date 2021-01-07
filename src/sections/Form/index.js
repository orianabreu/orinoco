import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';
import Button from '../../components/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DateAndTimePicker from '../../components/DatePicker';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '30ch',
      },
    },
  }),
);

export default function ConsultancyForm() {

    const isMobile = useMediaQuery('(max-width:484px)');

    const classes = useStyles();

    return (
        <WindowSection id='myform'>

            <S.OnboardingContainer isMobile={isMobile}>
            
                <S.SectionTitle>
                    ¡Bienvenido al mundo digital! 
                </S.SectionTitle>

                <S.SeccionText>
                    Has dado el primer paso para hacer crecer tu negocio y con ello tus ganancias.<br/>Te damos las gracias por permitirnos acompañarte en el proceso. 
                    <br/>
                    <br/>
                    Comenzar es muy sencillo. Solo tienes que rellenar el siguiente formulario, escoger el horario de tu preferencia y agendar tu cita.<br/>¡Estamos ansiosos por conocerte!
                </S.SeccionText>

                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Nombre y Apellido'
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Teléfono'
                        helperText='Incluye el código de tu país'
                        />

                        <TextField 
                        id='filled-size-small'
                        variant='filled'
                        size='small'
                        label='Email'
                        />
                    </div>
                </form>
            
            </S.OnboardingContainer>

            

            {/* <S.FormContainer1 isMobile={isMobile}> */}

                    {/* <S.InputArea>
                        <S.Question>
                            Nombre y Apellido:
                        </S.Question>
                        <Input 
                            label='Ej: Oriana Abreu'
                        />
                    </S.InputArea>
                    
                    <S.InputArea>
                        <S.Question>
                            Teléfono:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Con el código de tu país'
                        />
                    </S.InputArea>
                    
                    <S.InputArea>
                        <S.Question>
                            Email:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: info@turpialdigital.com'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            Nombre de tu negocio:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: Turpial Digital'
                        />
                    </S.InputArea> */}

            {/* </S.FormContainer1> */}

            <S.FormContainer2 isMobile={isMobile}>
                    <S.InputArea>
                        <S.Question>
                            ¿A qué se dedica tu negocio?
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: Somos una agencia de marketing digital'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            ¿Qué te gustaría lograr con esta asesoría?
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: Tener una idea clara de cómo debo gestionar mi presencia digital para aumentar mis ventas'
                        />
                    </S.InputArea>

                    <S.InputArea>
                        <S.Question>
                            Si tu negocio tiene página web y redes sociales, déjanoslas aquí:
                        </S.Question>
                        <S.BigInput
                            className="bigColumn"
                            isMobile={isMobile} 
                            placeholder='Ej: turpialdigital.com / @turpialdigital_agencia'
                        />
                    </S.InputArea>

                    
                        <S.Question>
                            Selecciona la fecha y hora de tu preferencia.
                        </S.Question>
                        <S.SeccionText>
                            <br/>
                            Podemos contactarte los días lunes, miércoles y viernes entre las <b>18:00 y las 20:00 (hora España).</b> La llamada tendrá una duración de 30 minutos.
                        </S.SeccionText>

                        
                            <S.Container>
                                <DateAndTimePicker />
                            </S.Container>

                            <S.Container>
                                <Button styleType='callToAction'>
                                    AGENDAR
                                </Button>
                            </S.Container>
                    

            </S.FormContainer2>        
            

        </WindowSection>
    )
}