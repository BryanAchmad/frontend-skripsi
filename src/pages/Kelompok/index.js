import React from 'react'
import { Col, Table, Card, Typography } from 'antd'

const { Title } = Typography

const columns = [
    {
        title: 'Name (all screens)',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age (medium screen or bigger)',
        dataIndex: 'age',
        key: 'age',
        responsive: ['md'],
    },
    {
        title: 'Address (large screen or bigger)',
        dataIndex: 'address',
        key: 'address',
        responsive: ['lg'],
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];

const Kelompok = () => {
    return (
        <Col>
            <Title level={2} >Daftar Anggota Kelompok</Title>
            <Card>

                <Table columns={columns} dataSource={data} />
            </Card>
        </Col>
    )
}

export default Kelompok
