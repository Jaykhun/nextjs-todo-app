import Layout from '@/routes/Layout'
import Header from './Header'
import Todos from './Todos'

const HomePage = () => {
    return (
        <Layout>
            <Header />
            <Todos />
        </Layout>
    )
}

export default HomePage