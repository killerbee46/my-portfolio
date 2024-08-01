import { Col, Row } from "antd"

const Container = (props:any) => {
  return (
    <Row justify={'center'} style={{margin:`${props?.space}px auto`}}>
        <Col xl={18} lg={20} md={22} sm={24} style={{padding:20}}>
        {props?.children}
        </Col>
    </Row>
  )
}

export default Container