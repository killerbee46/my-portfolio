import { Col, Row, Typography } from 'antd'
import NavBanner from '../components/NavBanner/NavBanner'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Container from '../container/Container'
import MainLayout from '../layouts/MainLayout'
import { projects } from '../utils/projects'

const Portfolio = () => {
  return (
    <MainLayout banner={<NavBanner image={'https://imgs.search.brave.com/FuZ0jPfye0Rdq38C0N6rH8-rfvgi0sEokbqoBXuvb6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI5LzE3LzM2/LzM2MF9GXzEyOTE3/MzYwMF9Od1hpVDVV/UXk2c09NZGhFUlNZ/cVZWYVdvSlVleFhv/QS5qcGc'} />}>
        <Container>
          <div className='white'>
          <Typography.Title level={3} style={{marginBottom:50}}>Projects</Typography.Title>
          <Row gutter={[30,30]}>
          {
            projects?.map((p:any,i:number)=> {
              return <Col style={{height:'100%'}} lg={6} xs={24} sm={12} md={8}>
              <ProjectCard data={p} />
              </Col>
            })
          }
          </Row>
          </div>
        </Container>
    </MainLayout>
  )
}

export default Portfolio