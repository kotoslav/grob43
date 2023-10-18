import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { ADMIN_ROUTE } from '../utils/consts';
import {useHistory} from 'react-router-dom'
import { authorization } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const response = await authorization(login, password);
            user.setIsAuth(true);
            history.push(ADMIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
       <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight}}
        >
        <Card style={{width:600}} className='p-5'>
        <h2 className='m-auto'>Авторизация</h2>
            <Form className='d-flex flex-column' onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    signIn();
                }
            }}>
                <Form.Control
                    className='mt-2'
                    placeholder='Введите login'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                 <Form.Control
                    className='mt-2'
                    placeholder='Введите пароль'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                variant={"outline-success"}
                className='mt-2'
                onClick={() => signIn()}
                >
                    Войти
                </Button>
            </Form>
        </Card>
       </Container>
    );
});

export default Auth;
