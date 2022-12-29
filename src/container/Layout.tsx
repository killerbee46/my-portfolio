import React from 'react'
import Navbar from '../components/Header/Navbar'

const Layout = (props: any) => {
    return (
        <div>
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout