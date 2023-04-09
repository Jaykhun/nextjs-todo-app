import { TodoState } from '@/models/todoModel'
import create from 'zustand'
import { TodoActions } from './../models/todoModel'

export const useTodoStore = create<TodoState & TodoActions>((set) => ({
    todos: [],
    currentTodo: 0,

    addTodo: (todo) => set((state) => ({
        todos: [...state.todos, todo]
    })),

    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),

    completeTodo: (id) => set((state) => ({
        todos: state.todos.map(todo => ({
            ...todo, completed: todo.id === id ? !todo.completed : todo.completed
        }))
    })),

    updateTodo: (id, task) => set((state) => ({
        todos: state.todos.map(todo => ({
            ...todo, task: todo.id === id ? task : todo.task
        }))
    }))
}))