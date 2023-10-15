import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

const Auth = () => {

    return (
       <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight}}
        >
        <Card style={{width:600}} className='p-5'>
        <h2 className='m-auto'>Авторизация</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-2'
                    placeholder='Введите login'
                />
                 <Form.Control
                    className='mt-2'
                    placeholder='Введите пароль'
                    type='password'
                />
                <Button variant={"outline-success"} className='mt-2'>
                    Войти
                </Button>
            </Form>
        </Card>
       </Container>
    );
};

export default Auth;
