import { useEffect, useState } from 'react'
import './IAM.css'
import Title from 'antd/es/typography/Title'
import TextTransition, { presets } from 'react-text-transition'

const IAM = () => {
    const me = [
        "Sugam Bhandari",
        "a Web Developer",
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <Title className='flex gap-3 font-bold uppercase !text-background !mt-10'> I'm <span className='text-primary'><TextTransition springConfig={presets.gentle}>{me[index % me.length]}</TextTransition></span></Title>
  )
}

export default IAM