import React from 'react';
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";

const Registration = () => {
    const {request} = useHttp();

    const onFinish = async values => {
        try {
            const data = await request('/api/auth/register', 'POST', {...values});
            console.log(data);
        } catch (e) {

        }
        // console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <span>Для входа в чат, вам нужно зарегистрироваться</span>
            </div>
            <Form
                name="normal_login"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[{
                        type: 'email',
                        required: true,
                        message: 'Please input your email!'
                    }]}
                    hasFeedback
                >
                    <Input placeholder="E-Mail" size='large' id="success"/>
                </Form.Item>

                <Form.Item
                    name="name"
                    rules={[{required: true, message: 'Please input your name!'}]}
                    hasFeedback
                >
                    <Input placeholder="Ваше имя" size='large' id="success"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    hasFeedback
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password placeholder="Пароль" size='large' id="success"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Повторить пароль'/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ЗАРЕГИСТРИРОВАТЬСЯ
                    </Button>
                </Form.Item>
            </Form>
            <Link to='/login' className='link_to_change_auth'>Войти в аккаунт</Link>
        </>
    );
};

export default Registration;