import React, { useEffect } from 'react'

const MainLayout = (props:any) => {
    const location = (window.location.pathname)?.slice(1)
    useEffect(()=> {
        console.log('reload')
        document.title = `${(location.length !== 0 ? location?.toLocaleUpperCase() + " | "  : "")}` + "Sugam Bhandari"
},[])
  return (
    <div>{props?.children}</div>
  )
}

export default MainLayout