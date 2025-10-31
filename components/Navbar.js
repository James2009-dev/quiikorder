"use client"
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";



export function Navbar() {
        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);// !-- negation operator means not,and is an opposite for menu open
        }
    return (
    <main className="bg-gray-100 shadow shadow-gray-400 w-full sticky top-0 z-10">
     <div className="flex justify-between items-center h-[50px] pt-3 px-5 ">
        <h1 className="text-2xl font-bold text-blue-500">QwiikOrder</h1>
         <div>
         <ul className="hidden md:flex gap-10 md:font-semibold md:cursor-pointer">
            <Link href="/"><li>Home</li></Link>
            <Link href="/dashboard/new-order"><li>New-Order</li></Link>
            <Link href="/dashboard/order-list"><li>OrderList</li></Link>
             <Link href="/dashboard/order-summary"><li>Summary</li></Link>
        </ul>
        </div>
        <div className="hidden md:flex gap-3">
            <Link href="/auth/login"><button className="w-[60px] h-[30px] rounded cursor-pointer text-white bg-blue-500">Login</button></Link>
            <Link href="/dashboard/profile"><CgProfile className="text-2xl cursor-pointer"/></Link>
        </div>
        <div className="block md:hidden">
            <RxHamburgerMenu className="text-2xl text-blue-500 mt-2" onClick={toggleMenu}/>
        </div>
     </div>
     {menuOpen &&( //this makes it show only when clicked
     <div className="px-5 pb-1 flex flex-col gap-2 md-hidden">
        <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/dashboard/new-order"><li>Orders</li></Link>
            <Link href="/dashboard/order-list"><li>OrderList</li></Link>
            <Link href="/dashboard/order-summary"><li>Summary</li></Link>
        </ul>
         <Link href="/auth/login"><button className="w-[60px] h-[30px] rounded cursor-pointer text-white bg-blue-500">Login</button></Link>
           <Link href="/dashboard/profile"> <CgProfile className="text-2xl cursor-pointer"/> </Link>
     </div>
     )} 
    </main>
  );
}
