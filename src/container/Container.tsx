import { Col, Row } from 'antd'
import React from 'react'

const Container = (props: any) => {
    return (
        <div className='flex center' style={{ margin: '40px 0' }}>
            <div style={{ width: '80%' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Container