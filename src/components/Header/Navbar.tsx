import { Button, Col, Divider, Row } from 'antd'
import React from 'react'
import Logo from '../Logo/Logo'
import NavMenu from './NavMenu'
import './Header.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const path = window.location.href.slice(21, window.location.href.length)
    console.log(path)

    return (
        <div style={{
            height: '50px',
            // background: 'gray',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        }}>
            <Row
                style={{
                    height: '100%',
                    width: '80%'
                }}
                justify={'space-between'}
                align="middle"
            >
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <NavMenu path={path} />
                </Col>
                <Col>
                    <a href="mailto:sugamsingh10@gmail.com" target="_blank">
                        <Button className='black__border'><b>Email Me</b></Button>
                    </a>
                </Col>
                <Divider style={{ margin: "9px 0 0 0", background: 'rgba(0, 0, 0, 0.142)' }} />
            </Row>

        </div>
    )
}

export default Navbar