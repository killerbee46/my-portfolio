import { Image, Typography } from 'antd'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

const defaultImg = 'https://imgs.search.brave.com/UzPjTtV0Jxe7R97zhY701DUJ8nYRjT4XBaznwWBs020/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMu/Y2xvdWRpbmFyeS52/cHN2Yy5jb20vaW1h/Z2UvdXBsb2FkL2Nf/c2NhbGUsZHByX2F1/dG8sZl9hdXRvLHFf/YXV0bzpiZXN0LHRf/cHJvZHVjdFBhZ2VI/ZXJvR2FsbGVyeVRy/YW5zZm9ybWF0aW9u/X3YyLHdfYXV0by9J/bmRpYSUyMExPQi9T/aWduJTIwYW5kJTIw/cG9zdGVyL0Jhbm5l/cnMvSU5fQmFubmVy/c19IZXJvLWltYWdl/XzAy'

const NavBanner = ({ title, image = defaultImg }: any) => {
    const page = window.location.pathname.slice(1)
    
    return (
        <div style={{position:'relative'}}>
            <div style={{position:'absolute', background:'black', opacity:0.7, top:0, right:0, left:0, bottom:5,zIndex:5}}></div>
            <div style={{position:'absolute',textAlign:'center',top:0, right:0, left:0, bottom:0,display:"flex", justifyContent:'center', alignItems:'center', zIndex:6}}>
                <div>
                <Typography.Title className='!text-background uppercase' style={{fontWeight:800, fontSize:50}}>
                    {title || page}
                </Typography.Title>
                <BreadCrumb />
                </div>
            </div>
            {/* <div className="breadcrumb"></div> */}
            <Image preview={false} src={image} alt='banner-image' width={'100%'} height={300} style={{objectFit:"cover"}} />
        </div>
    )
}

export default NavBanner