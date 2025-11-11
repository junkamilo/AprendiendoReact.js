import type { C } from "node_modules/tailwindcss/dist/resolve-config-QUZ9b-Gn.d.mts";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskSkate {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { Type: 'ADD_TODO', payload: string }
    | { Type: 'TOGGLE_TODO', payload: number }
    | { Type: 'DELETE_TODO', payload: number }

export const tasksReducer = (state: TaskSkate, action: TaskAction): TaskSkate => {




    return state;
}
