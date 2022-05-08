import React from 'react';
import 'rbx/index.css'
import { Title, Column, Content, Container, Footer } from 'rbx';
import { Link } from 'react-router-dom';
import '../../styles/footer.scss';
import logoimage from '../../images/logo.png';
import logoinstagram from '../../images/instagram.png';
import logotwitter from '../../images/twitter.png';
import logofacebook from '../../images/facebook.png';

function Rodape() {
    return (
        <Footer backgroundColor='dark' className='footerlinks'>
            <Container>
                <Content align='centered' textAlign="centered">
                    <Column.Group textColor='white'>
                        <Column align='start' size={3}>
                            <a href='#'>
                                <img
                                src={logoimage}
                                alt="logo Finans"
                                role="presentation"
                                width="112"
                                height="28"
                                />
                            </a>
                            
                        </Column>
                        <Column size={2}>
                            <Title className='is-flex is-justify-content-center' textColor='white' size={5}><strong>Início</strong></Title>

                            <Column.Group className='sobrenoscolumn'>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Login</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Cadastre-se</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Benefícios</a></Column>
                            </Column.Group>
                        </Column>

                        <Column size={2}>
                            <Title className='is-flex is-justify-content-center' textColor='white' size={5}><strong>Sobre nós</strong></Title>

                            <Column.Group className='sobrenoscolumn'>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Empresa</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Contato</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Blog</a></Column>
                            </Column.Group>

                        </Column>

                        <Column size={2}>
                            <Title className='is-flex is-justify-content-center' textColor='white' size={5}><strong>Suporte</strong></Title>

                            <Column.Group className='sobrenoscolumn'>
                                <Column className='is-flex is-justify-content-center'><a href='#'>FAQ</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Reportar problema</a></Column>
                                <Column className='is-flex is-justify-content-center'><a href='#'>Chat</a></Column>
                            </Column.Group>
                        </Column>

                        <Column className='is-flex is-justify-content-flex-start' size={2}>
                        <a href="#">
                                <img
                                    src={logotwitter}
                                    alt="logo Finans"
                                    role="presentation"
                                    width="50"
                                    height="28"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src={logoinstagram}
                                    alt="logo Finans"
                                    role="presentation"
                                    width="50"
                                    height="28"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src={logofacebook}
                                    alt="logo Finans"
                                    role="presentation"
                                    width="50"
                                    height="28"
                                />
                            </a>
                        </Column>
                    </Column.Group>

                    <Column.Group textColor='white'>
                        <Column size={12}>
                            <p >©Todos os direitos reservados | Finans</p>
                        </Column>
                    </Column.Group>
                </Content>
            </Container>

        </Footer>
    )
}

export default Rodape;