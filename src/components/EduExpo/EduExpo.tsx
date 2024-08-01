import { Col, Row } from 'antd'
import EduExpoItem from './EduExpoItem'
import dayjs from 'dayjs'

const EduExpo = () => {
    const experience = [
        {startDate:"2021-10-07", endDate:"2023-12-08", title:"Jr Developer"},
        {startDate:"2023-01-07", endDate:dayjs(), title:"Mid Level Developer"}
    ]
    const education = [
      {endDate:"2016-03-10", title:"SLC",description:''},
      {startDate:"2016-06-18", endDate:'2018-04-12', title:"+2",description:'Science (Physical)'},
      {startDate:"2018-06-06", endDate:'2024-08-20', title:"Bachelors",description:'BCA'}
  ]
  return (
    <div>
        <Row>
            <Col sm={24} md={12}>
            <EduExpoItem title="Experience" data={experience} />
            </Col>
            <Col sm={24} md={12}>
            <EduExpoItem title="Education" data={education} />
            </Col>
        </Row>
    </div>
  )
}

export default EduExpo