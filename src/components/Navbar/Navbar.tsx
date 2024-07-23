import { Flex, Typography } from "antd"
import { Link} from "react-router-dom"
import { colors } from "../../themes/colors"

const Navbar = () => {
  const menus = [
    {label:"Home", value:'/', icon:""},
    {label:"About", value:'/about', icon:""},
    {label:"Portfolio", value:'/portfolio', icon:""},
    {label:"Contact", value:'/contact', icon:""},
  ]
  return (
    <div style={{background:colors?.foreground,padding:"10px"}}>
      <Flex  style={{width:'100%'}} align="center" justify="center">
        <Flex gap={20} justify="center" className="text-xl">
        {
              menus?.map((menu:any)=> {
                return <Link to={menu?.value}>
                <Typography.Title level={5} className="!text-background !hover:opacity-60" style={{fontWeight:600}} >{menu?.label}</Typography.Title>
                </Link>
              })
            }
        </Flex>
    </Flex>
    </div>
  )
}

export default Navbar

// import { UserOutlined } from "@ant-design/icons"
// import { Flex, Typography } from "antd"

// const Navbar = () => {
//   const menus = [
//     {label:"Home", value:'/', icon:""},
//     {label:"About", value:'/about', icon:""},
//     {label:"Portfolio", value:'/portfolio', icon:""},
//     {label:"Contact", value:'/contact', icon:""},
//   ]
//   return (
//     <div className="bg-foreground w-full">
//       <Flex gap={10} style={{width:'100%'}} align="center" justify="space-evenly">
//             {
//               menus?.map((menu:any)=> {
//                 return <Typography.Link className="!text-background font-medium" href={menu?.value} >{menu?.label}</Typography.Link>
//               })
//             }
//     </Flex>
//     </div>
//   )
// }

// export default Navbar