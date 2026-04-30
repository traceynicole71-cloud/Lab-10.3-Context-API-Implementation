import React, { useState } from 'react';
import { useTodos } from '../context/ToDoContext';

export const TodoInput = () => {
    const [text, setText] = useState(' ');
    const { dispatch } = useTodos();

    const handleAdd = (e: React.FormEvent) => {
e.preventDefault();
if (!text.trim()) return;

//dispatch add action
    }
}
