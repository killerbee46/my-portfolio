import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const About = () => {
const bannerImage = 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://blog.snappa.com/wp-content/uploads/2021/05/Untitled-Design-49.jpg'
  return (
    <MainLayout banner={<NavBanner title={"About Me"} subtitle={"This page is about me"} image={bannerImage} />}>
      <div className="text-background">About</div>
    </MainLayout>
  )
}

export default About