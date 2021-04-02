import React, { Component } from 'react'
import { Col, Card, Form, Input, InputNumber, Button, Image, Row, Descriptions, Typography, Divider } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './style.css';
const { Title } = Typography

const data = {
    nama: "Bryan",
    kelompok: "20"
}
class Home extends Component {

    // const onFinish = (values) => {
    //     console.log(values);
    // };

render(){


    return (
        <Col>
            <Title>Selamat Datang, {data.nama} </Title>
            <Card>
                <Row>
                    <Col xl={4} xs={24}>
                        <LazyLoadImage
                            alt='naruto'
                            height='200'
                            effect="blur"
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" // use normal <img> attributes as props
                            width='200' />
                        {/* <span>{image.caption}</span> */}
                        {/* <Image width={'auto'} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /> */}

                    </Col>
                    <Col xl={20} xs={24}>
                        <Col offset={1}>
                            <Title level={2}>Profil</Title>
                            <Card>
                                <Row>
                                    <Col xl={12}>
                                        <Title level={4}>KELOMPOK {data.kelompok} </Title>
                                    </Col>
                                    <Col xl={12}>
                                        <Title style={{ float: 'right', color: 'gray' }} level={5}>KKN Tahun 2019/2020</Title>
                                    </Col>
                                </Row>
                                <Divider />
                                <Descriptions title="Biodata" layout="vertical">
                                    <Descriptions.Item label="Nama" labelStyle={{ fontWeight: 'bold' }}>Bryan Aulya Achmad Istighfara</Descriptions.Item>
                                    <Descriptions.Item label="Nim" labelStyle={{ fontWeight: 'bold' }}>201610370311041</Descriptions.Item>
                                    <Descriptions.Item label="Jurusan" labelStyle={{ fontWeight: 'bold' }}>Teknik Informatika</Descriptions.Item>
                                    <Descriptions.Item label="Fakultas" labelStyle={{ fontWeight: 'bold' }}>Fakultas Teknik</Descriptions.Item>
                                    <Descriptions.Item label="No Telp" labelStyle={{ fontWeight: 'bold' }}>
                                        081232620494
                                    </Descriptions.Item>
                                </Descriptions>
                            </Card>
                        </Col>
                    </Col>
                </Row>
            </Card>
        </Col>
        // <Col xs={24} xl={12} >
        //     <Card>
        //         <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

        //             <Form.Item
        //                 name={['user', 'name']}
        //                 label="Name"
        //                 rules={[
        //                     {
        //                         type: 'text',
        //                     },
        //                 ]}
        //             >
        //                 <Input />
        //             </Form.Item>
        //             <Form.Item
        //                 name={['user', 'email']}
        //                 label="Email"
        //                 rules={[
        //                     {
        //                         type: 'email',
        //                     },
        //                 ]}
        //             >
        //                 <Input />
        //             </Form.Item>
        //             <Form.Item
        //                 name={['user', 'age']}
        //                 label="Age"
        //                 rules={[
        //                     {
        //                         type: 'number',
        //                         min: 0,
        //                         max: 99,
        //                     },
        //                 ]}
        //             >
        //                 <InputNumber />
        //             </Form.Item>
        //             <Form.Item name={['user', 'website']} label="Website">
        //                 <Input />
        //             </Form.Item>
        //             <Form.Item name={['user', 'introduction']} label="Introduction">
        //                 <Input.TextArea />
        //             </Form.Item>
        //             <Form.Item>
        //                 <Button block style={{alignContent: 'center'}} type="primary" htmlType="submit">
        //                     Submit
        // </Button>
        //             </Form.Item>
        //         </Form>
        //     </Card>
        // </Col>


    )
}
}

export default Home

