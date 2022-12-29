import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const NavMenu = () => {

    const menus = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Works", path: "/works" },
        { label: "About", path: "/about" },
        { label: "Resume", path: "/resume" },
    ]
    return (
        <div>
            <Row className='nav__menu'>
                {
                    menus?.map((data: any) => {
                        return (
                            <Link to={data?.path}
                                className="manu__link"
                                style={{
                                    padding: '10px 20px',
                                    height: '100%',
                                    fontSize: '18px',
                                    color: 'black',
                                    fontWeight: 550,
                                }}>
                                <Col className='menu__item'>
                                    {data?.label}
                                </Col>
                            </Link>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default NavMenu