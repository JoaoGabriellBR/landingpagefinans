import React from 'react';
import 'rbx/index.css'
import { Navbar, Button, Container } from 'rbx';
import {Link} from 'react-router-dom';
import '../../styles/header.scss';
import logoimage from '../../images/logo.png';


function Header(){
    return(
            <Navbar color='link'>

                <Container>
                    <Navbar.Brand>
                        <Navbar.Item href="#">
                            <img
                                src={logoimage}
                                alt="logo Finans"
                                role="presentation"
                                width="112"
                                height="28"
                            />
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>

                    <Navbar.Menu>

                        <Navbar.Segment align="end">

                            <Navbar.Item className='navbar-items'>Home</Navbar.Item>
                            <Navbar.Item className='navbar-items'>Benefícios</Navbar.Item>

                            <Navbar.Item dropdown>
                                <Navbar.Link className='navbar-items'>Mais</Navbar.Link>
                                <Navbar.Dropdown>
                                    <Navbar.Item>Sobre</Navbar.Item>
                                    <Navbar.Item>Contato</Navbar.Item>
                                    <Navbar.Item>Blog</Navbar.Item>
                                    <Navbar.Divider />
                                    <Navbar.Item>Reportar problema</Navbar.Item>
                                </Navbar.Dropdown>
                            </Navbar.Item>

                            <Navbar.Item>
                                <Button.Group>
                                    <Button color="light">
                                        Cadastre-se
                                    </Button>
                                    <Button color="light">
                                        Login
                                    </Button>
                                </Button.Group>
                            </Navbar.Item>

                        </Navbar.Segment>
                    </Navbar.Menu>
                </Container>
            </Navbar>
    )
}

export default Header;