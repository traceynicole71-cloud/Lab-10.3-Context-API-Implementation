import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/ToDoContext';
import { TodoInput } from './components/ToDoInput';
import { TodoList } from './components/ToDoList';
import { FilterProvider } from './context/FilterContext';
import { useTheme } from './context/ThemeContext';
import './App.css'

const MainApp = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-950 p-4 transition-colors duration-300">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden p-8 border border-gray-300 dark:border-gray-800">

        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100 tracking-tight">
            TO Do APP <span className="text-pink-500">(Context API)</span>
          </h1>
          <ThemeToggleButton />
          </header>

<hr className="border-gray-300 dark:border-gray-800 mb-8" />
<TodoInput />
<FilterButtons />
<TodoList />

<p className="text-center text-gray-500 dark:text-gray-400 mt-8 italic text-sm">
          No To Do's Yet! Please add one above.
          </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <MainApp />
      </TodoProvider>
    </ThemeProvider>
  )
}