import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const About = () => {

  return (
    <MainLayout banner={<NavBanner title={"About Me"} subtitle={"This page is about me"} image={'https://imgs.search.brave.com/ukX-ggQZbKwqvNwaZ0flj41p6n7k7BYTZu2JXHHydsI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hdXR1/bW4tZmFsbC1uYXR1/cmUtc2NlbmUtYXV0/dW1uYWwtcGFyay1i/ZWF1dGlmdWwtNzc4/NjkzNDMuanBn'} />}>
      <div className="text-background">About</div>
    </MainLayout>
  )
}

export default About