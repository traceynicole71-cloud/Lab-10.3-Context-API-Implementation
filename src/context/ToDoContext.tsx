import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
//array of todo items
interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

type Action =
    | { type: 'ADD'; text: string }
    | { type: 'TOGGLE'; text: string }
    | { type: 'DELETE'; text: string }
    | { type: 'EDIT'; id: string; text: string }
    | { type: 'CLEAR_COMPLETED' }
    | { type: 'LOAD'; payload: Todo[] };

//useReducer for complex state transitions
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: crypto.randomUUID(), text: action.text, completed: false }];
        case 'TOGGLE':
            return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t);
        case 'DELETE':
            return state.filter(t => t.id !== action.id);
        case 'EDIT':
            return state.map(t => t.id === action.id ? { ...t, text: action.text } : t);
        case 'CLEAR_COMPLETED':
            return state.filter(t => !t.completed);
        case 'LOAD':
            return action.payload;
        default: return state;
    }
};

const TodoContext = createContext<any>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    //refresh state from local storage on load
    useEffect(() => {
        const saved = localStorage.getItem('lab-todos');
        if (saved) dispatch({ type: 'LOAD', payload: JSON.parse(saved) });
    }, []);

    //auto update on local storage
    useEffect(() => {
        localStorage.setItem('lab-todos', JSON.stringify(todos));
    }, [todos]);

    //memoizingcontext values to prevent re-renders
    const value = useMemo(() => ({
        todos,
        addTodo: (text: string) => dispatch({ type: 'ADD', text }),
        toggleTodo: (id: string) => dispatch({ type: 'TOGGLE', id }),
        deleteTodo: (id:string) => dispatch({ type: 'DELETE', id }),
        editTodo: (id: string, text: string) => dispatch({ type: 'EDIT', id, text }),
        clearCompleted: () => dispatch({ type: 'CLEAR_COMPLETED' })
    }), [todos]);

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
};

export const useTodos = () => useContext(TodoContext);
