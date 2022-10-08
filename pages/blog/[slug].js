import { useRouter } from 'next/router'
import Head from 'next/head'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    return <>
        <p>Post: {slug}</p>
        <Head>
                <title>{slug} | CodingWithBongProgramiz</title>
        </Head>
    </>
}

export default Post
