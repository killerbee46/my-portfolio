import { Button } from 'antd'
import React from 'react'
import html2canvas from 'html2canvas'

const ImageDownloader = () => {


    // const fileURL = window.URL.createObjectURL(blob);
    // // Setting various property values
    // let alink = document.createElement('a');
    // alink.href = fileURL;
    // alink.download = 'Sugam_Bhandari_Resume.pdf';
    // alink.click();

    const OnButtonClick = () => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            const subElement = document.body.appendChild(canvas)
            var img = subElement.toDataURL("image/png");
            let alink = document.createElement('a');
            alink.href = img;
            alink.download = 'player-id-card.png';
            alink.click();
            console.log(img)
        });
    }

    return (
        <div>
            <div id="capture">
                <h4>Hello world!</h4>
            </div>

            <Button onClick={() => OnButtonClick()}>Download</Button>
        </div>
    )
}

export default ImageDownloader