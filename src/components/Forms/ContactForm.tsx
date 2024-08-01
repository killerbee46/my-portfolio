import { MailOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Col, Form, Input, Row, Typography } from "antd"
import { useForm } from "antd/es/form/Form"
import TextArea from "antd/es/input/TextArea"

const ContactForm = () => {
    const [form] = useForm()
  return (
    <div className="white">
        <Form style={{color:'white !important'}} form={form} onFinish={(e)=>console.log(e)} layout="vertical">
<Row gutter={[30,0]}>
    <Col lg={12}>
    <Form.Item name={'fullName'}>
    <Input placeholder="Your Message" prefix={<UserOutlined style={{color:'grey', padding:8}} />} size="large" />
</Form.Item>
    </Col>
    <Col lg={12}>
    <Form.Item name={'email'}>
    <Input placeholder="Your Email" prefix={<MailOutlined style={{color:'grey', padding:8}} />} size="large" />
</Form.Item>
    </Col>
    <Col lg={24}>
    <Form.Item name={'message'}>
    <TextArea placeholder="Your Message" size="large" style={{height:200}} />
</Form.Item>
    </Col>
    <Col span={24}>
    <Form.Item>
        <Button type="primary" icon={<MessageOutlined />}>Send Message</Button>
    </Form.Item>
    </Col>
</Row>

    </Form>
    </div>
  )
}

export default ContactForm