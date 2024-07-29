import { Col, Row } from 'antd'
import EduExpoItem from './EduExpoItem'

const EduExpo = () => {
    const experience = [
        {startDate:"2021-01-07", endDate:"2022-02-08", title:"Jr Frontend Developer",description:'Some Description'},
        {startDate:"2021-01-07", endDate:"2022-02-08", title:"Jr Frontend Developer",description:'Some Description'}
    ]
  return (
    <div>
        <Row>
            <Col sm={24} md={12}>
            <EduExpoItem title="Experience" data={experience} />
            </Col>
            <Col sm={24} md={12}>
            <EduExpoItem title="Education" data={experience} />
            </Col>
        </Row>
    </div>
  )
}

export default EduExpo