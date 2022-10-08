import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';


function blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlogs(parsed)
            })
    }, [])

    return (
        <>
            <Head>
                <title>Blog | CodingWithBongProgramiz</title>
                <meta name="description" content="Blog | CodingWithBongProgramiz" />
            </Head>
            <div className="container m-auto">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {blogs.map((blogItem) => {
                                return <div className="py-8 flex flex-wrap md:flex-nowrap" key={blogItem.slug}>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blogItem.title}</h2>
                                        <p className="leading-relaxed mb-4">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                        <Link href={`/blog/${blogItem.slug}`}><a className="cursor-pointer px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 my-2">Read more</a></Link>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default blog