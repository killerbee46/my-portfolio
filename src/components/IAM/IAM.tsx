import { useEffect, useState } from 'react'
import './IAM.css'
import Title from 'antd/es/typography/Title'

const IAM = () => {
    const [who, setWho] = useState(0)
    const me = [
        "Sugam Bhandari",
        "a Web Developer",
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
    <Title className='flex gap-3 font-bold uppercase !text-background !mt-10'> I'm <span className='text-primary'>{me[who]}</span></Title>
  )
}

export default IAM