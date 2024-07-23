import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const Contact = () => {
  return (
    <MainLayout banner={<NavBanner />}>
        <div className="text-background">Contact</div>
    </MainLayout>
  )
}

export default Contact