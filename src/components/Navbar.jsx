import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";


function Navbar() {
    const navLink = [
        {
        name:"Store",
        href:"#"
    }, 
    {
        name:"Mac",
        href:"#"
    }, 
    {
        name:"iPad",
        href:"#"
    }, 
    {
        name:"iPhone",
        href:"#"
    }, 
    {
        name:"Watch",
        href:"#"
    }, 
    {
        name:"Airpods",
        href:"#"
    }, 
    {
        name:"TV & Home",
        href:"#"
    }, 
    {
        name:"Entertainment",
        href:"#"
    }, 
    {
        name:"Accessories",
        href:"#"
    }, 
    {
        name:"Support",
        href:"#"
    }, 
    {
        icon:<IoSearch />,
        href:"#"
    }, 
    {
        icon:<FiShoppingCart />,
        href:"#"
    }, 
]
    return (
        <>
        <div>
        <nav className="bg-gray-950 text-white px-4 py-2 fixed top-0 w-full z-10">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    {/* Apple logo */}
    <h1 className="text-2xl"><i className="fab fa-apple"></i></h1>

    {/* Navigation links */}
    <ul className="hidden sm:flex gap-6 md:gap-10 text-xs text-gray-300 items-center">
      {navLink.map((link, index) => (
        <li key={index} className="flex items-center gap-1">
          <a href={link.href}>{link.name}</a>
          <a className="text-lg" href={link.href}>{link.icon}</a>
        </li>
      ))}
    </ul>

    {/* Optional: Hamburger icon for mobile */}
    <div className="sm:hidden text-xl cursor-pointer">
      ☰
    </div>
  </div>
</nav>

            <nav className="bg-zinc-800 text-white p-3 pt-16">
                <div className="container flex items-center text-center mx-auto">
                    <p className='text-xs sm:text-sm md:text-base mx-auto text-center' >Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <span className='text-blue-500'>Shop</span>
                    </p>
                </div>
                </nav>
        </div>

        
        </>
    )
}

export default Navbar
