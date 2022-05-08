import React from 'react'
import { Column, Button, Container, Section, Title } from 'rbx';
import secondimage from '../../images/juros.png'

function FourthSection(){
    return(
    
            <Section size='small' backgroundColor='light'>

                <Container>

                    <Column.Group>
                        <Column size={7} >
                            <Title color='light' size='1'>Promova mudanças significativas</Title>
                            <Title color='light' subtitle>Desperte o contador que existe dentro de você.</Title>
                            <Button rounded color='link'>Ver mais...</Button>
                        </Column>

                        <Column size={5} >
                            <img width='300' height='350' src={secondimage}/>
                        </Column>
                    </Column.Group>

                </Container>
                    
            </Section>
       

        
    );
}

export default FourthSection;