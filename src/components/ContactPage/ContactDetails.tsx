import { BuildOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Col, Row, Space, Typography } from 'antd'

const ContactDetails = ({half}:any) => {
    const phone = '+977 9861325293',
    email = "sugamsingh10@gmail.com", 
    linkedIn = 'sugam-bhandari-81672b207',
    upwork = "freelancers/~01679010df398dfcbb"
    const contacts = [
        {label:'Phone', icon:<PhoneOutlined className='primary text-lg' />, value:<a target='_blank' className='white' href={`tel:${phone}`}>{phone}</a>},
        {label:'Email', icon:<MailOutlined className='primary text-lg' />, value:<a target='_blank' className='white' href={`mailto:${email}`}>{email}</a>},
        {label:'Linked In', icon:<LinkedinOutlined  className='primary text-lg' />, value:<a target='_blank' className='white' href={`https://linkedin.com/in/${linkedIn}`}>{linkedIn}</a>},
        {label:'Upwork', icon:<BuildOutlined  className='primary text-lg' />, value:<a target='_blank' className='white' href={`https://www.upwork.com/${upwork}`}>{upwork}</a>}
    ]
  return (
    <Row gutter={30} style={{margin:'30px auto'}}>
        {
            contacts?.map((con)=> {
                return <Col span={half ? 12 : 24} className='white' style={{marginBottom:30}}>
                    <Typography.Title level={5}>{con?.label}</Typography.Title>
                    <Space>
                        {con?.icon}
                        <Typography.Text>
                            {con?.value}
                        </Typography.Text>
                    </Space>
                </Col>
            })
        }
    </Row>
  )
}

export default ContactDetails