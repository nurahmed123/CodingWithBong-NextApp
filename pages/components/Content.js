import React from 'react'
import Image from 'next/image'

function Content() {
    <style jsx>{
        `
            #img{
                clip-path: polygon(17% 0%, 100% 0%, 100% 100%, 0% 100%);
            }
        `
    }
    </style>
    return (
        <div className="content">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                            <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <Image
                        // className="object-cover object-center rounded-md"
                        id="img"
                        src="/pic1.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={300}
                    />
                </div>
            </section>
        </div>
    )
}

export default Content