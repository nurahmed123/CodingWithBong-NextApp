import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (

        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image
                            src="/favicon.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            className="cursor-pointer w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        />
                    </a></Link>
                    <span className="ml-3 text-xl ">Programming With BongProgramiz</span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"}><a className="cursor-pointer mr-5 hover:text-gray-900">Home</a></Link>
                        <Link href={"/blog"}><a className="cursor-pointer mr-5 hover:text-gray-900">Blog</a></Link>
                        <Link href={"/about"}><a className="cursor-pointer mr-5 hover:text-gray-900">About</a></Link>
                        <Link href={"/contact"}><a className="cursor-pointer mr-5 hover:text-gray-900">Contact Us</a></Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">User
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar