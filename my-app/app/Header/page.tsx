'use client'
import React from 'react'
import Link from 'next/link';

const Header = () => {
return(
<>
<main>
    <nav className='bg-slate-50'>
        <div className='mx-10 py-10 '>
            <ul className='flex items-center justify-between ' >
                <div>
                    <li className='font-semibold font'><Link href=""> DAL TRADERS</Link></li>
                </div>
                <div className='flex items-center justify-between font-sans text-sm  '>
               <li className='mx-6 hover:text-blue-400 '><Link href="/#">HOME</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="/#services">SERVICES</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="/#products">PRODUCTS</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="/#watches">WATCHES</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="/#sales">SALE</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="/#blogs">BLOGS</Link></li>
               <li className='mx-6 hover:text-blue-400'><Link href="">CART</Link></li>
               </div>
            </ul>
        </div>
    </nav>
</main>
</>
)
}

export default Header