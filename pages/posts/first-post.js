import Link from 'next/link'
import Head from 'next/Head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First post head title</title>
        </Head>
        <h1>This is first post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </Layout>
    )
}