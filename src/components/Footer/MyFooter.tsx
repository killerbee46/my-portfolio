import { Divider, Flex, Space, Typography } from "antd"
import { colors } from "../../themes/colors"
import Logo from "../Logo/Logo"
import Container from "../../container/Container"
import { Link } from "react-router-dom"
import { menus } from "../Navbar/Navbar"

const MyFooter = () => {
  return (
    <div style={{color:colors?.background, paddingTop:20,background:colors?.foreground}}>
      <Container>
      <div>
      <Space style={{gap:40}} align="start">
      <Logo />
      <Flex vertical gap={20}  className="text-xl !flex-col">
        <div>
          Links 
          <Divider style={{background:'white', margin:'5px 0'}} />
        </div>
        {
              menus?.map((menu:any)=> {
                return <Link to={menu?.value}>
                <Typography.Text className="!text-background" >{menu?.label}</Typography.Text>
                </Link>
              })
            }
        </Flex>
      </Space>
      
      <Divider />
      <div style={{textAlign:"center", color:colors?.background,padding:10}}>&copy; Sugam Bhandari 2024. All rights reserved.</div>
      </div>
      </Container>
    </div>
  )
}

export default MyFooter