import React from 'react';
import * as S from './styles';
import WindowSection from '../../components/WindowSection';

export default function ConsultancyForm() {
    return (
        <WindowSection id='myform'>

            <S.SectionTitle>
                ¡Bienvenido al mundo digital! 
            </S.SectionTitle>

            <S.FormContainer>
                {/* <form> */}
                    <S.InputArea>
                        <S.Question>
                            Nombre y Apellido:
                        </S.Question>
                        <S.NewInput 
                            placeholder='Ej: Oriana'
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
                    </S.InputArea>

                    
                {/* </form> */}
            </S.FormContainer>

        </WindowSection>
    )
}