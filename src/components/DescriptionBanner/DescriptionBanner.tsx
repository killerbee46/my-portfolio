import { Col, Row } from 'antd'
import React from 'react'
import MyDescription from './MyDescription'
import PictureAndSocials from './PictureAndSocials'

const DescriptionBanner = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Row>
                <Col span={16}>
                    <div style={{ marginLeft: '20%' }}>
                        <MyDescription />

                    </div>
                </Col>
                <Col span={8}>
                    <PictureAndSocials />
                </Col>
            </Row>
        </div>
    )
}

export default DescriptionBanner