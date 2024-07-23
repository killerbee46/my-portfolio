import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const Portfolio = () => {
  return (
    <MainLayout banner={<NavBanner />}>
        <div className="text-background">Portfolio</div>
    </MainLayout>
  )
}

export default Portfolio