"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {

const pathname = usePathname();

  return (
  <section className='sticky left-0 top-0 flex h-screen  w-fit flex-col justify-between
  bg-dark-1 p-4 pt-20 text-white max-sm:hidden lg: w-[264px]'> 
  <div className='flex flex-1 flex-col gap-4'>
{sidebarLinks.map((link)=>{
const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

return (
    <Link 
     href={link.route} 
      key={link.label} 
      className={cn('flex gap-5 items-center p-2 rounded-lg justify-start',{
        'bg-blue-1': isActive,
      })}
      >
       <img src={link.imgUrl} alt={link.label
       
       }  width ={15}
        height={15}/>
        <p className='text-md font-semibold max-lg:hidden'>
            {link.label}
        </p>
    </Link>

)


})}
  </div>
  </section>
  )
}
