
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from '../MobileNav'
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/clerk-react'

export default function Navbar() {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-4 py-3 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>

    <Image
    src='/icons/logo.svg'
    width={30}
    height={30}
    alt="yoom logo"
    className="max-sm:size-10"
       />
       <p className='text-[20px] font-extrabold text-white max-sm:hidden'>ChatBox</p>
      </Link>
      <div className='flex-between gap-5'>
            <SignedIn>
                <UserButton />
            </SignedIn>

    <MobileNav/>
      </div>

    </nav>
  )
}
