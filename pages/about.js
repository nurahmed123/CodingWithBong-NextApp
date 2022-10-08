import React from 'react'
import Head from 'next/head'

function about() {
    return (
        <>
            <Head>
                <title>About | CodingWithBongProgramiz</title>
                <meta name="description" content="About | CodingWithBongProgramiz" />
            </Head>
            <div className='container px-5 py-24 mx-auto flex flex-wrap'>This is a about page</div>
        </>
    )
}

export default about