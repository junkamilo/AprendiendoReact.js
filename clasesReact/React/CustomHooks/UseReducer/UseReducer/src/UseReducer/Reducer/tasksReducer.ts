//utilizamos el zod para validar que la data que se encuentra en la localstore o sesion store no viene manipulado y venga con los datos que se requiere
import * as z from "zod/v4";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };


//validamos datos con zod, tomamos los datos que ya se suentran y lo validamos aca estamos validando los datos de TodoScheme
const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

//validamos datos con zod, tomamos los datos que ya se suentran y lo validamos aca estamos validando los datos de TaskScheme
const TaskScheme = z.object({
    //aca le deceimso que el valor todos es de tipo array lo cual ese array va a recibir valores de tipo TodoSchema
    todos: z.array(TodoSchema),
    length: z.number(),
    completed:z.number(),
    pending: z.number(),
});

//creamos nuestros estado inicial del UseReducer
export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('tasks-state');
    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
    }

    //validamos que los damos que entran con zod
    const result = TaskScheme.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
        
    }

    return result.data;

}

export const tasksReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            const todos = [...state.todos, newTodo];
            return {
                ...state,
                todos,
                length: todos.length,
                completed: todos.filter(t => t.completed).length,
                pending: todos.filter(t => !t.completed).length,
            };
        }

        case 'TOGGLE_TODO': {
            const todos = state.todos.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            return {
                ...state,
                todos,
                completed: todos.filter(t => t.completed).length,
                pending: todos.filter(t => !t.completed).length,
            };
        }

        case 'DELETE_TODO': {
            const todos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos,
                length: todos.length,
                completed: todos.filter(t => t.completed).length,
                pending: todos.filter(t => !t.completed).length,
            };
        }

        default:
            return state;
    }
};

