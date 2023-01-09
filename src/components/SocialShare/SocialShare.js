import { Button, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import { FacebookOutlined } from '@ant-design/icons';

const SocialShare = () => {


    // const fileURL = window.URL.createObjectURL(blob);
    // // Setting various property values
    // let alink = document.createElement('a');
    // alink.href = fileURL;
    // alink.download = 'Sugam_Bhandari_Resume.pdf';
    // alink.click();

    const [url, setUrl] = useState("")

    useEffect(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            const subElement = canvas
            var img = subElement.toDataURL("image/png");
            let alink = document.createElement('a');
            alink.href = img;
            // alink.download = 'player-id-card.png';
            // alink.click();
            // console.log(img)
            setUrl(img)
        });
    }, [])

    console.log(url)


    return (
        <div>


            <div style={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                <Typography.Text strong style={{ fontSize: '20px' }}>Share on:</Typography.Text>
                <FacebookShareButton title='Hello' url={url} children={<FacebookOutlined style={{ fontSize: '30px', color: 'blue' }} />} />
                <FacebookShareButton title='Hello' url={url} children={<FacebookOutlined style={{ fontSize: '30px', color: 'blue' }} />} />
                <FacebookShareButton title='Hello' url={url} children={<FacebookOutlined style={{ fontSize: '30px', color: 'blue' }} />} />

            </div>
        </div>
    )
}

export default SocialShare