import ContactPage from '../components/ContactPage/ContactPage'
import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const Contact = () => {
  const bannerImage = 'https://imgs.search.brave.com/5H9M818GM8ro8AWKc53_WnwloRcGmH5uNZ2u5mDDuLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDMwMTI2MC9waG90/by9jb250YWN0LXVz/LXN5bWJvbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VkZw/cnJ4TElYZFF5amRj/aTNXd3VvcGt4dFZu/WUsySGliaHNpRll6/cG9VZz0'
  return (
    <MainLayout banner={<NavBanner image={bannerImage} />}>
        <ContactPage />
    </MainLayout>
  )
}

export default Contact