import { useEffect, useState } from 'react'
import './IAM.css'
import { colors } from '../../themes/colors'
import { Typography } from 'antd'

const IAM = () => {
    const [who, setWho] = useState(0)
    const me = [
        "Sugam Bhandari",
        "Web Developer",
    ]

    const meWho = () => {
        const interval = setInterval(() => {
            if (who < me.length-1 ) {
                setWho(who+1)
            } else {
                setWho(0)
            }
      }, 2000);
      interval
    }

    useEffect(()=> {
        meWho()
    },[who])
  return (
    <div className='font-bold uppercase'> I'm {me[who]}</div>
  )
}

export default IAM