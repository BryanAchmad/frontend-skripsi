import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Row, Col, Layout, Card, Typography, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'

const { Content } = Layout;
const { Title } = Typography;


const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Row>
            <Col xl={8}>
            </Col>
            <Col xl={8} xs={24} style={{ marginTop: '20vh', paddingLeft: 20, paddingRight: 20 }}>
                <Layout>
                    <Col>
                        <Card>
                            <Title level={2}>Login</Title>
                            <p>Please, login using your NIM and PIC</p>
                            <Divider />
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button style={{ float: 'right', width: 140 }} type="primary" htmlType="submit" className="login-form-button">
                                        <Link to="/">
                                            Log in
                                        </Link>
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Layout>
            </Col>
            <Col xl={8}>
            </Col>
        </Row>
    )
}

export default Login
