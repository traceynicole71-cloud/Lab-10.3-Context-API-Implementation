import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/ToDoContext';
import { TodoInput } from './components/ToDoInput';
import { TodoList } from './components/ToDoList';
import { useTheme } from './context/ThemeContext';
import './App.css'

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-950 p-4 transition-colors duration-300">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden p-8 border border-gray-300 dark:border-gray-800">

        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-800 dark:text-gray-100 tracking-tight">
            TO Do APP <span className="text-pink-500">(Context API)</span>
          </h1>
          <button
          onClick={toggleTheme}
          className="bg-yellow-400 hover:bg-yellow-300 dark:bg-gray-700 dark:hover:bg-gray-600 texy-gray-900 dark:text-yellow-400 font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all"
          >
            {theme ==='dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </header>

<hr className="border-gray-300 dark:border-gray-800 mb-8" />

<TodoInput />

<div className="flex justify-center gap-3 mb-8">
  <button className="bg-pink-500 text-white px-4 py-2 rounded-md">All</button>
  <button className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md">Active</button>
  <button className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md">Completed</button>
</div>

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