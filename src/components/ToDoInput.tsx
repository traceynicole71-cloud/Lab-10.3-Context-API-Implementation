import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export const TodoInput = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    const handleAdd = (e: React.FormEvent) => {
e.preventDefault();
if (!text.trim()) return;
addTodo(text);
setText('');
    };

    return (
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
            <input
            className="flex-1 p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-transparent focus:border-pink-500 outline-none"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-6 py-2 rounded transition-colors">
            Add To Do
        </button>
    </form>
    );
};