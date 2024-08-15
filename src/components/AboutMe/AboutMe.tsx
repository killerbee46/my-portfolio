import { Col, Image, Row } from 'antd'
import meImage from "../../assets/sugam.png"
import { colors } from '../../themes/colors'
import IAM from '../IAM/IAM'
import ContactDetails from '../ContactPage/ContactDetails'

const AboutMe = () => {
  return (
    <div style={{margin:'40px auto'}}>
        <Row gutter={30} align={'top'} justify={'center'}>
            <Col lg={8} xs={12} style={{aspectRatio:'1/1',objectPosition:'top', overflow:'hidden', border:`2px solid ${colors?.primary}`}}>
            <Image preview={false} src={meImage} style={{width:'100%', cursor:'pointer'}} />
            </Col>
            <Col lg={16} xs={24}>
            <div style={{paddingLeft:20}}><IAM /></div>
            <ContactDetails half />
            </Col>
        </Row>
    </div>
  )
}

export default AboutMe