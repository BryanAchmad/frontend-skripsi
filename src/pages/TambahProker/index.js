import React from 'react'
import {Col, Row, Form, Card, Divider} from 'antd'
import { useParams } from 'react-router'

const TambahProker = () => {

    let {ProgramKerja} = useParams();
    return (
        <Col>
        <p>{ProgramKerja}</p>
        </Col>
    )
}

export default TambahProker
