import Link from "next/link"
import { IoChevronDownSharp } from "react-icons/io5";

const DesktopNav: React.FC = () => {
    return (
        <div className="hidden md:flex justify-between gap-8 items-center font-bold relative">
        <div className="relative group flex items-center">
          <Link href="" className="">About</Link>
          <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 " />
          <div className="absolute opacity-0 bg-black  z-[1000]  top-full left-0 group-hover:opacity-80 border border-gray-300 shadow-md p-4 rounded-md max-w-5xl h-[300px] transition-opacity duration-300">
            <div className="flex flex-col space-y-4 ">
              <h1 className="text-gray-500 uppercase">Projects</h1>
              <ul className="text-white space-y-2">
                <li>
                  <i className="fas fa-robot"></i>AAVE
                </li>
                <li>
                  <i className="fas fa-android"></i> 1Inch
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> Balancer
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
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