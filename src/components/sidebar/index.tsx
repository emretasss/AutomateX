"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {}

const MenuOptions = (props: Props) => {

    const pathName =usePathname()

  return (
    <nav>

    </nav>
  )
}
export default MenuOptions