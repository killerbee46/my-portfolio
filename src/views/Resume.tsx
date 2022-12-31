import React from 'react'
import ResumeViewer from '../components/ResumeViewer/ResumeViewer'
import Container from '../container/Container'
import Layout from '../container/Layout'

const Resume = () => {
    return (
        <Layout>
            <Container>
                <ResumeViewer />
            </Container>
        </Layout>
    )
}

export default Resume