import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-4 py-2 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={28}
          height={28}
          alt="Meet logo"
          className="max-sm:size-8"
        />
        <p className="text-[20px] font-extrabold text-white max-sm:hidden">
          Meet
        </p>
      </Link>
      <div className="flex-between gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
