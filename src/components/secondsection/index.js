import React from 'react'
import { Card, Column, Button, Container, Section, Title } from 'rbx';
import '../../styles/secondsection.scss'
import imagefirstcard from '../../images/saiba.png'
import secondfirstcard from '../../images/economize.png'
import thirdfirstcard from '../../images/suporte.png'

function SecondSection(){
    return(
    
            <Section size='medium' backgroundColor='white'>
                <Container>
                    <Title className='padding-finans' textAlign='centered'>Vantagens de trabalhar com a <span id='finansspan'>Finans</span></Title>
                    <Column.Group>
                        <Column size={4}>
                            <Card className='padding column-secondsection'>
                                    <img src={imagefirstcard} width='300' height='300' />
                                    <Title className='padding-conteudo' size={4}>Fácil de usar</Title>

                                    <Title className='padding-conteudo' textAlign='centered' subtitle>A Finans vai além do básico e permite que você faça controles incríveis, essenciais para suas finanças. Simples como tem que ser!</Title>
                            </Card>
                        </Column>

                        <Column size={4}>
                            <Card className='padding column-secondsection'>
                                    <img src={secondfirstcard} width='300' height='300' />
                                    <Title className=' padding-conteudo' size={4}>Economize seu tempo</Title>

                                    <Title className='padding-conteudo' textAlign='centered' subtitle>Tempo é dinheiro! Em segundos você tem tudo sob controle e conseguirá aproveitar o seu tempo com o que realmente importa para você.</Title>
                            </Card>
                        </Column>

                        <Column size={4}>
                            <Card className='padding column-secondsection m-5'>
                                    <img src={thirdfirstcard} width='300' height='300' />
                                    <Title className='padding-conteudo' size={4}>Suporte amigo</Title>

                                    <Title className='padding-conteudo' textAlign='centered' subtitle>Dúvidas? Perguntas? Nosso suporte ajuda você! Nós estamos aqui para resolver seus problemas e tornar a sua vida mais fácil!</Title>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>     
            </Section>
        
    );
}

export default SecondSection;