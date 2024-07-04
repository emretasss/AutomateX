import React from 'react'

type Props = {}

const Navbar = async (props: Props) => {
  return (
            <header 
            className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between"
            >
                <aside className="flex items-center gap-[2px]"></aside>
            </header>

            
  )
}

export default Navbar