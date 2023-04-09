import { useTodoStore } from '@/store/store'
import TodoItem from './TodoItem'

const Todos = () => {
    const todos = useTodoStore(state => state.todos)

    return (
        <div className='todo__body my-5'>
            {todos.length
                ? todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
                : <div className='text-red-600 m-4 text-left'>There are no tasks</div>
            }
        </div>
    )
}

export default Todos