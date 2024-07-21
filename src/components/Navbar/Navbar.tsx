import { UserOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"

const Navbar = () => {
  return (
    <Flex  style={{color:"white", width:'100%'}} align="center" justify="space-between">
        <div><UserOutlined /> Sugam Bhandari</div>
        <Flex gap={10} justify="flex-end">
            <Typography.Link href="/">Home</Typography.Link>
            <Typography.Link href="/about">About</Typography.Link>
            <Typography.Link href="/portfolio">Portfolio</Typography.Link>
            <Typography.Link href="/contact">Contact</Typography.Link>
        </Flex>
    </Flex>
  )
}

export default Navbar