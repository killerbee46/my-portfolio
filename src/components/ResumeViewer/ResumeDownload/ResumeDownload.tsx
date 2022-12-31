import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const ResumeDownload = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Sugam_Bhandari_Resume.pdf').then(response => {
            console.log(response)
            // return false
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sugam_Bhandari_Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div>
            <Button className='button__success' onClick={onButtonClick}>
                Download Resume <DownloadOutlined />
            </Button>
        </div>
    )
}

export default ResumeDownload