import { Todo } from '@/models/todoModel'
import { useTodoStore } from '@/store/store'
import Link from 'next/link'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { FC } from 'react'

interface TodoItemProps {
    todo: Todo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const removeTodo = useTodoStore(state => state.removeTodo)
    const completeTodo = useTodoStore(state => state.completeTodo)
    const updateTodo = useTodoStore(state => state.updateTodo)

    const handleRemove = () => removeTodo(todo.id)
    const handleComplete = () => completeTodo(todo.id)

    const handleUpdate = () => {
        const task = prompt('Change todo', todo.task)

        if (task === null) Notify.failure('Canceled')

        else if (task.length > 4) {
            updateTodo(todo.id, task)
            Notify.success('Successfully changed')
        }

        else Notify.failure('The assignment must have at least four characters')
    }

    return (
        <div className='todo__item item-todo display: flex items-center justify-between gap-3'>
            <div className="item-todo__text  display: flex items-center">
                <input type="checkbox"
                    id={String(todo.id)}
                    onChange={handleComplete}
                    checked={todo.completed}
                />

                <label htmlFor={String(todo.id)} />

                <Link href={`/${todo.id}`}>
                    <div className="item-todo__task text-xl capitalize">
                        {todo.task}
                    </div>
                </Link>
            </div>

            <div className="item-todo__delete cursor-pointer display: flex gap-3">
                <div className="item-todo__delete" onClick={handleRemove}>Delte</div>
                <div className="item-todo__delete" onClick={handleUpdate}>Edit</div>
            </div>
        </div>
    )
}

export default TodoItem