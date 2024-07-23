import { Divider } from "antd"
import { colors } from "../../themes/colors"

const MyFooter = () => {
  return (
    <div style={{color:colors?.background, paddingTop:20,background:colors?.foreground, opacity:.5}}>
      <div>
      Footer
      <Divider />
      <div style={{textAlign:"center", color:colors?.background,padding:10}}>&copy; Sugam Bhandari 2024. All rights reserved.</div>
      </div>
    </div>
  )
}

export default MyFooter