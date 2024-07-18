"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MenuOptions = (props: Props) => {

    const pathName =usePathname()

  return (
   <div>
    <h1>Menu Options</h1>
   </div>
  )
}
export default MenuOptions