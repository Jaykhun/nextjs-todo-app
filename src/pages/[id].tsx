import Layout from '@/routes/Layout'
import { useTodoStore } from '@/store/store'
import Head from 'next/head'
import { useRouter } from 'next/router'

const TodoDetail = () => {
    const { query } = useRouter()
    const todos = useTodoStore(state => state.todos)
    const currentTodo = todos.find(todo => String(todo.id) === query.id)

    return (
        <>
            <Head>
                <title>{currentTodo?.task}</title>
            </Head>

            <Layout>
                <div className="todo__current current">
                    <div className="current__task text-2xl m-5 capitalize">
                        Task: {currentTodo?.task}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TodoDetail