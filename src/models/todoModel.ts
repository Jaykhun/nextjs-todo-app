export type Todo = {
    id: number,
    task: string,
    completed: boolean
}

export type TodoState = {
    todos: Todo[]
    currentTodo: number
}

export type TodoActions = {
    addTodo: (todo: Todo) => void,
    removeTodo: (id: number) => void,
    completeTodo: (id: number) => void
    updateTodo: (id: number, task: string) => void
}