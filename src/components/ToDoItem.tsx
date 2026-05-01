import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

interface ToDoItemProps {
    todo: {
        id: string;
        text: string;
        completed: boolean;
    };
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {
    const { toggleTodo, deleteTodo, editTodo } = useTodos();
    //local state for edit mode within each item
    const [isEditing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    //functionality of editTodo
    const handleSave = () => {
        if (newText.trim()) {
            editTodo(todo.id, newText);
            setIsEditing(false);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-md transition-colors">
            <div className='flex items-center gap-3 flex-1'>
                {/*toggle completed status*/}
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 accent-green-500 cursor-pointer"
                />

                {isEditing ? (
                    <input
                        className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-1 border border-pink-500 rounded outline-none"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                        autoFocus
                    />
                ) : (
                    <span
                    className={`flex-1 cursor-pointer transition-all ${
                    todo.completed
                    ? 'line-through text-gray-400 dark:text-gray-500'
                    : 'text-gray-800 dark:text-gray-200,
                }`}
onClick={() => setIsEditing(true)}
>
    {todo.text}
</span>
                )}
            </div>

            <div className="flex items-center gap-2 ml-4">
                {/*remove items from list*/}
                <button
                onClick={() => deleteTodo(todo.id)}
                className="text-ponk-600 hover:text-pink-400 font-bold p-2 transition-colors"
                title="Delete Task"
                >
                    ❌
                </button>
            </div>
        </div>
    );
};
