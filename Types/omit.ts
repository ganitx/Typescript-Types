/*
    Implement the built-in `Omit<T, K>` generic without using it.

    Constructs a type by picking all properties from `T` and then removing `K`

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = MyOmit<Todo, 'description' | 'title'>

    const todo: TodoPreview = {
        completed: false,
    }
*/

type MyOmit<T, K extends keyof T> = {
    [Q in keyof T as Q extends K ? never : Q]: T[Q];
};