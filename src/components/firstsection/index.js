import React from 'react'
import { Column, Button, Container, Section, Title } from 'rbx';
import womanimage from '../../images/capa-mulher.png'
import '../../styles/firstsection.scss'


function FirstSection(){
    return(
    
            <Section backgroundColor='light' size='small'>

                <Container>

                    <Column.Group>
                        <Column className='column-input' size={6}>
                            <Title color='light' size='1'>Suas contas, descomplicadas</Title>
                            <Title  subtitle>Usado por mais de 1 milhão de pessoas, o Finans é uma ferramenta online que vai facilitar a sua vida financeira.</Title>
                            <Button color='link' rounded className='button' size='medium'>Cadastre-se agora</Button>
                        </Column>


                        <Column className='margintop' size={6} >
                         
                               <img 
                               src={womanimage} 
                               height='350' 
                               width='450'
                               className='is-flex is-justify-content-flex-end'
                               />
                
                        </Column>

                    </Column.Group>

                </Container>
                    
            </Section>
       

        
    );
}

export default FirstSection;