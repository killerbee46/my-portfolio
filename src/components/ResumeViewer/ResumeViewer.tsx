import { Col, Image, Row } from 'antd'
import React from 'react'
import ResumeDownload from './ResumeDownload/ResumeDownload'
import resumeImg from './resume.png'

const ResumeViewer = () => {
    return (
        <div className='relative'>
            <div className='absolute' style={{ right: '10px' }}>
                <ResumeDownload />
            </div>
            <Row justify={'center'}>
                <Col lg={12}>
                    <Image className='shadow' src={resumeImg} width={'100%'} />
                </Col>
            </Row>
        </div>
    )
}

export default ResumeViewer