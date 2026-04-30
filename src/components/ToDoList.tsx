import { useTodos } from '../context/TodoContext';
import { useFilter } from '../context/FilterContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    
    const { todos } = useTodos();
    const { filter } = useFilter();

    //filter todo list based on state before rendering
    const filteredTodos = todos.filter((todo: any) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className="spaced-y-3">
            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo: any) => <TodoItem kep={todo.id} todo={todo} />)
            ) : (
                <p className="text-center text-gray-500 italic mt-4">No Tasks Found.</p>
            )}
        </div>
    );
};