import Layout from '@/routes/Layout'
import Head from 'next/head'
import Header from './Header'
import Todos from './Todos'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Next Todo App</title>
            </Head>
            
            <Layout>
                <Header />
                <Todos />
            </Layout>
        </>
    )
}

export default HomePage