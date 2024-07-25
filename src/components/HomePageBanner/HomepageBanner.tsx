import { UserOutlined } from "@ant-design/icons"
import { Button, Col, Flex, Image, Row, Space, Typography } from "antd"
import IAM from "../IAM/IAM"
import Title from "antd/es/typography/Title"
import meImage from "../../assets/sugam.png"
// import { colors } from "../../themes/colors"

const HomepageBanner = () => {
  const description = 'I’m a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.'
  return (
    <Row align={'middle'} style={{background:'black', padding:"20px 20px 0 20px"}}>  
        <Col lg={12} xs={24}>
        <Flex justify="center">
        <Image preview={false} width={"67%"} src={meImage} alt="banner_image" />
        </Flex>
        </Col>
        <Col lg={12} xs={24}>
        <Title level={3} className="!text-background uppercase text-justify">Hi There!</Title>
        <IAM />
        <Typography.Paragraph className="text-background text-lg" style={{textAlign:'justify'}}>{description}</Typography.Paragraph>
        <Space className="mt-10">
            {/* <Button icon={<UserOutlined />} type="primary">Production</Button>
            <Button icon={<ProductOutlined />} type="dashed">Portfolio</Button> */}
            <Button type="primary" icon={<UserOutlined />}>More about me </Button>
        </Space>
        </Col>
    </Row>
  )
}

export default HomepageBanner