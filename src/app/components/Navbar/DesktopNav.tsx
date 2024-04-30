import Link from "next/link"
import { IoChevronDownSharp } from "react-icons/io5";

const DesktopNav: React.FC = () => {
    return (
        <div className="hidden md:flex justify-between gap-8 items-center font-bold relative">
        <div className="relative group flex items-center">
          <Link href="" className="">About</Link>
          <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 " />
          <div className="absolute opacity-0 bg-gray-50  z-[1000]  top-full left-0 group-hover:opacity-80 border border-gray-300 shadow-md mt-2 p-4 rounded-md w-[400px] h-[200px] transition-opacity duration-300">
            <div className="flex flex-col space-y-4 ">
              <ul className="text-sm space-y-2">
              <li>Vision</li>
               <li>Team</li>
              </ul>
            </div>
        
          </div>
        </div>

        <Link href="/pricing" className="">
          Pricing
        </Link>
        <Link href="/contact" className="">
          Contact Us
        </Link>
        <Link href="/login" className="">
          Login
        </Link>
        <Link href="/signup" className="border border-purple-500 rounded-full px-4 py-1">
          Get Started
        </Link>
      </div>
    )
}

export default DesktopNav;