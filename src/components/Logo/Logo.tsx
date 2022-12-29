import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    const Logo1 = 'https://i.ibb.co/CwM5pLz/Screenshot-from-2022-12-29-19-50-38-removebg-preview-1.png'
    const Logo2 = 'https://i.ibb.co/tHjzKHq/Screenshot-from-2022-12-29-19-51-32-removebg-preview.png'
    return (
        <div>
            <Link to={'/'}>
                <Image preview={false} src={Logo2} width={200} />
            </Link>
        </div>
    )
}

export default Logo