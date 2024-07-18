import React from 'react'
import  Sidebar  from '@/components/sidebar'
type Props = { children :React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>

    <div className='w-full'> 
      <Sidebar/>
      {props.children}
    </div>

    </div>
  )
}

export default Layout 
