import { Image } from 'antd'
import Link from 'antd/es/typography/Link'
import meLogo from '../../assets/logo1.png'

const Logo = () => {
  return (
    <Link href='/'>
    <Image preview={false} alt="logo" src={meLogo} width={200} />
    </Link>
  )
}

export default Logo