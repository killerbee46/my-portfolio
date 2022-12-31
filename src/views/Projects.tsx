import React from 'react'
import ProjectCardContainer from '../components/ProjectsCard/ProjectCardContainer'
import Container from '../container/Container'
import Layout from '../container/Layout'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <ProjectCardContainer />
            </Container>
        </Layout>
    )
}

export default Projects