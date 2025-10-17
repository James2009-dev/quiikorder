import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export  function  Footer () { //this follows paschal-casing i.e first letter of each word is capitalized 
  return (
    <footer className="grid grid-cols-1 bg-gray-400 md:grid-cols-3 lg:grid-cols-4 lg:px-20 lg:py-5">
     <div>
        <p className="text-3xl font-bold text-blue-500">QwiikOrder</p>
        <p className="font-thin">About us</p>
        <p className="font-thin">Contact us</p>
        <p className="font-thin">Location</p>
     </div>
     <div>
        <p className="text-2xl font-bold text-blue-500">Legal</p>
        <p className="font-thin">Privacy Policy</p>
        <p className="font-thin">Terms of use</p>
     </div>
        <div>
        <p className="text-2xl font-bold text-blue-500">Customer</p>
        <p className="font-thin">Customer Tracking</p>
        <p className="font-thin">Order Management</p>
        </div>
        <div>
            <p className="text-2xl font-bold text-blue-500">Socials</p>
            <div className="flex space-x-4">
            <Link href="#"><FaFacebookF className="text-xl text-blue-200"/></Link>
            <Link href="#"><FaInstagram className="text-xl text-blue-200"/></Link>
            <Link href="#"><FaLinkedinIn className="text-xl text-blue-200" /></Link>
        </div>

        </div>
    </footer>
  );
}