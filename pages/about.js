import React from 'react'
import Navbar from './components/navbar'
import Head from 'next/head'
import Footer from './components/Footer'

function about() {
    return (
        <>
            <Head>
                <title>About | CodingWithBongProgramiz</title>
                <meta name="description" content="About | CodingWithBongProgramiz" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <div className='container px-5 py-24 mx-auto flex flex-wrap'>This is a about page</div>
            <Footer />
        </>
    )
}

export default about