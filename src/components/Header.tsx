import { useTodoStore } from '@/store/store'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from 'react'

const Header = () => {
    const [task, setTask] = useState('')
    const addTodo = useTodoStore(state => state.addTodo)

    const handleAdd: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (task.length > 3) {
            addTodo({ task: task, id: Date.now(), completed: false })
            setTask('')
            Notify.success('Successfully Added')
        }

        else {
            Notify.failure('The assignment must have at least four characters')
        }
    }

    return (
        <div className='todo__header'>
            <div className="title text-2xl mb-2">Todo App</div>
            <form>
                <input
                    type="text"
                    value={task}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                />
                <button
                    className='ml-3 bg-cyan-950 p-2 rounded-md'
                    onClick={handleAdd}
                >Submit</button>
            </form>
        </div>
    )
}

export default Header