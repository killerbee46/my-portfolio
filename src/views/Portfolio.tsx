import NavBanner from '../components/NavBanner/NavBanner'
import MainLayout from '../layouts/MainLayout'

const Portfolio = () => {
  return (
    <MainLayout banner={<NavBanner image={'https://imgs.search.brave.com/FuZ0jPfye0Rdq38C0N6rH8-rfvgi0sEokbqoBXuvb6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI5LzE3LzM2/LzM2MF9GXzEyOTE3/MzYwMF9Od1hpVDVV/UXk2c09NZGhFUlNZ/cVZWYVdvSlVleFhv/QS5qcGc'} />}>
        <div className="text-background">Portfolio</div>
    </MainLayout>
  )
}

export default Portfolio