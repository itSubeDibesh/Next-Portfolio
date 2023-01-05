import Head from 'next/head'
import { EEmoji } from '../../components/atoms'
import { NavBar } from '../../components/organisms'

export default function Blogs() {
    return (
        <>
            <Head>
                <title>Blogs | Dibesh Raj Subedi </title>
                <meta name="description" content="A simple portfolio website with in-memory database" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='container'>
                    <NavBar activePage='blogs' emoji={EEmoji.MIND_BLOWING} />
                </div>
            </main>
        </>
    )
}
