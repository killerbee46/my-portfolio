import { Col, Row, Typography } from 'antd'
import ContactForm from '../Forms/ContactForm'
import ContactDetails from './ContactDetails'
import Container from '../../container/Container'
import { colors } from '../../themes/colors'

const ContactPage = () => {
  return (
    <Container space={40}>
        <Row>
        <Col lg={8}>
        <Typography.Title style={{color:colors?.primary, marginBottom:30}} level={3} >Contacts</Typography.Title>
        <ContactDetails />
        </Col>
        <Col lg={16}>
        <Typography.Title style={{color:colors?.primary, marginBottom:30}} level={3}>Send a message</Typography.Title>
        <ContactForm />
        </Col>
    </Row>
    </Container>
  )
}

export default ContactPage