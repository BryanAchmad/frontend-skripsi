import React, { Component, useEffect, useState } from 'react'
import { Button, Card, Col, Divider, Row, Table, Typography, Collapse, Modal, Form, Input, Select, Tabs } from 'antd'
import ProkerService from '../../Services/ProkerService';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import TambahProker from '../TambahProker';

const { Option } = Select
const { Title } = Typography
const { Panel } = Collapse

const { TabPane } = Tabs

function callback(key) {
    console.log(key);
}

const ProgramKerja = () => {
    const [prokers, setProkers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        retrieveProker();
    }, []);

    const retrieveProker = () => {
        ProkerService.getAll()
            .then(response => {
                setProkers(response.data);
                console.log(response.data);
                localStorage.setItem("prokers", response.data)
            })
            .catch(e => {
                console.log(e);
                let collection = localStorage.getItem("prokers");
                setProkers(collection);
            })
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };


    return (
        <Col>
            <Title level={2}>Program Kerja</Title>
            <Card>

                <Button type="primary" onClick={showModal}>Tambah Program Kerja</Button>

                <Modal title="Tambah Data Proker" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Submit
                        </Button>
                    ]}>
                    <Card>

                        <Form {...layout} name="nest-messages" onFinish={onFinish} >
                            <Form.Item name={['proker', 'judul']} label="Judul" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['proker', 'divisi']} label="Divisi">
                                <Select defaultValue="lucy" style={{ width: '500' }}>
                                    <Option value="jack">PDD</Option>
                                    <Option value="lucy">Pendidikan</Option>
                                    <Option value="Yiminghe">Sosbud</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name={['proker', 'deskripsi']} label="Deskripsi">
                                <Input.TextArea />
                            </Form.Item>
                            {/* <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Form.Item> */}
                        </Form>
                    </Card>
                </Modal>
                <Divider />
                <Col>
                    <Title level={3}>Daftar Program Kerja</Title>
                    <Card>

                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Pendidikan dan Keagamaan" key="1">
                            <Collapse onChange={callback}>
                                {prokers.data &&
                                    prokers.data.map((proker, index) => (
                                        <Panel header={proker.judul} key={index}>
                                            <p>{proker.deskripsi}</p>
                                        </Panel>
                                    ))}
                            </Collapse>
                        </TabPane>
                        <TabPane tab="Sosial dan Budaya" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Kesehatan dan Lingkungan" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="PDD" key="4">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Lain-lain" key="5">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                            </Card>

                </Col>
            </Card>
        </Col>

    )
}

export default ProgramKerja
