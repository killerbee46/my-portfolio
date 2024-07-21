import { ProductOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Col, Image, Row, Space, Typography } from "antd"
import IAM from "../IAM/IAM"
import Title from "antd/es/typography/Title"

const HomepageBanner = () => {
  return (
    <Row align={'middle'} style={{background:'black',padding:20}}>  
        <Col lg={12}><Image preview={false} width={"60%"} src={'https://pngimg.com/uploads/reporter/small/reporter_PNG8.png'} /></Col>
        <Col lg={12}>
        <Title level={3} className="!text-background uppercase">Hi There!</Title>
        <IAM />
        <Typography.Paragraph className="text-background text-lg">I’m a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</Typography.Paragraph>
        <Space className="mt-10">
            <Button icon={<UserOutlined />} type="primary">More About Me</Button>
            <Button icon={<ProductOutlined />} type="dashed">Portfolio</Button>
        </Space>
        </Col>
    </Row>
  )
}

export default HomepageBanner