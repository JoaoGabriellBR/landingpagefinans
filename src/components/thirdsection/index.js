import React from 'react'
import { Column, Button, Container, Section, Title } from 'rbx';
import firstimage from '../../images/facil.png'

function ThirdSection(){
    return(
    
        <Section size='large' backgroundColor='light'>

        <Container>

            <Column.Group>
         
                <Column size={7} >
                    <img width='600' height='350' src={firstimage}/>
                </Column>

                <Column size={5} >
                    <Title color='light' size='1'>Saiba para onde vai o seu dinheiro</Title>
                    <Title color='light' subtitle>Com a Finans você categoriza todos os seus lançamentos. Com gráficos simples, você sabe de onde vem e para onde vai o seu dinheiro.</Title>
                    <Button rounded color='link'>Ver mais...</Button>
                </Column>

            </Column.Group>

        </Container>
            
    </Section>

        
    );
}

export default ThirdSection;