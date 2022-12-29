import { Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const MyDescription = () => {
    return (
        <div className='myDescription'>

            <Typography.Title className='greeting'>

                Hi! I am <div className='tag greeting__tag'>Frontend Developer</div><br />
                Sugam Bhandari
            </Typography.Title>
            <Typography.Title level={3} className='short__desc'>
                Working as a frontend developer, specializing in React based on JS and TS as well.
            </Typography.Title>
            <div className='redirection'>
                <Link to={'/projects'}>
                    <Button className="button__primary">My Projects</Button>
                </Link>
            </div>
        </div>
    )
}

export default MyDescription