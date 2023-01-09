import { FacebookOutlined, GithubOutlined, GitlabOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Image, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'

const PictureAndSocials = () => {

    const myPic = "https://i.ibb.co/Phk7NM9/me.png"
    return (
        <div style={{ background: '#5cb85c', textAlign: 'center', height: '100%', position: 'relative' }}>
            <Typography.Title className='title' level={3}>My Socials</Typography.Title>
            <a href={"https://facebook.com"} target="_blank" className='socials gm'><MailOutlined /></a>
            <a href={"https://instagram.com"} target="_blank" className='socials gh'><GithubOutlined /></a>
            <a href={"https://linkedin.com"} target="_blank" className='socials gl'><GitlabOutlined /></a>
            <a href={"https://facebook.com"} target="_blank" className='socials fb'><FacebookOutlined /></a>
            <a href={"https://instagram.com"} target="_blank" className='socials ig'><InstagramOutlined /></a>
            <a href={"https://linkedin.com"} target="_blank" className='socials li'><LinkedinOutlined /></a>
            <Image style={{ opacity: '80%', width: '488px' }} preview={false} src={myPic} />
        </div>
    )
}

export default PictureAndSocials