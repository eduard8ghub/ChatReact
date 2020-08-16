import React, {useContext} from 'react';
import {Form, Input, Button} from 'antd';

import './Login.sass';
import {Link} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";


const Login = () => {
    const auth = useContext(AuthContext);
    const {request, error, clearError} = useHttp();
    const onFinish = async values => {
        try {
            const data = await request('/api/auth/login', 'POST', {...values});
            auth.login(data.token, data.userId, data.name);
        } catch (e) {
            console.log(e);
        }

    };

    const validator = async () => {
        if(error) {
            clearError();
        }
    };


    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <span>Пожалуйста, войдите в свой аккаунт</span>
            </div>
            <Form
                name="normal_login"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                            {type: 'email', required: true, message: 'Please input your email!'},
                            {validator}
                            ]}
                    hasFeedback
                >
                    <Input placeholder="E-Mail" size='large' id="success"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[
                        {passwordError: true, required: true, message: 'Please input your password!'},
                        {validator}
                        ]}
                >
                    <Input.Password placeholder="Пароль" size='large' id="success" />
                </Form.Item>
                { error && <p style={{color: 'red'}}>{error}</p> }
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ВОЙТИ В АККАУНТ
                    </Button>
                </Form.Item>
            </Form>
            <Link to='/signup' className='link_to_change_auth'>Зарегистрироваться</Link>
        </>
    );
};

export default Login;
