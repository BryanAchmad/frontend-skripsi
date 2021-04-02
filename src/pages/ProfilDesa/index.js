import { Alert, Card, Col, Divider, Typography } from 'antd'
import React from 'react'

const messageWarning = `
 File dokumen harus berformat .pdf1
 `; 

 const descriptionWarning = 'Contoh nama file Profil_Desa_KKN_KELOMPOK_1.pdf'

const ProfilDesa = () => {
    return (
        <Col>
            <Typography.Title level={2}>Profil Desa</Typography.Title>
            <Card>
                <Alert message={messageWarning} description={descriptionWarning} type="warning" />
                <Divider />
                <Alert message="asdma,sda" descriptio="asdasd" type="success" />
            </Card>
        </Col>
    )
}

export default ProfilDesa
