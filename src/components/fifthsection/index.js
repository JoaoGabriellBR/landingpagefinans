import React from 'react'
import { Column, Title, Button, Container, Section, Control, Field, Input, Icon } from 'rbx';
import { faLock, faUser, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fifthsection.scss';
import '../../index.css';

function FifthSection(){
    return(
    
            <Section textAlign='centered' size='small' backgroundColor='grey-lighter'>

                <Container  className='section-form'>

                    <Column.Group>
                        <Column size={12} >
                            <Title textColor='dark' id='title-input' color='white'>Cadastre-se Agora</Title>

                            <Field>

                                <Control iconLeft>
                                    <Input className='input' rounded size='medium' type="text" placeholder="Name" />
                                    <Icon size="small" align="left">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Icon>
                                </Control>

                            </Field>

                            <Field>
                                <Control iconLeft iconRight>
                                    <Input className='input' rounded size='medium' type="email" placeholder="Email" />
                                    <Icon size="small" align="left">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </Icon>
                                    <Icon size="small" align="right">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </Control>

                            </Field>
                            <Field>

                                <Control iconLeft>
                                    <Input className='input' rounded size='medium' type="password" placeholder="Password" />
                                    <Icon size="small" align="left">
                                        <FontAwesomeIcon icon={faLock} />
                                    </Icon>
                                </Control>

                            </Field>

                            <Field>
                                <Control>
                                    <Button className='input button-input is-link' rounded >Cadastrar</Button>
                                </Control>
                            </Field>
                        </Column>
                    </Column.Group>

                </Container>
                    
            </Section>
       

        
    );
}

export default FifthSection;