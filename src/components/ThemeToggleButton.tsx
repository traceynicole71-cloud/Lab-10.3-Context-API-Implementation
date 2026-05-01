import { useTheme } from '../context/ThemeContext';

export  const ThemeToggleButton = () => {
    //get current theme and toggle function
    const { theme, toggleTheme } = useTheme();

    return (
        <button
        onClick={toggleTheme}
        className="bg-yellow-400 hover:bg-yellow-300 dark:bg-gray-700 dark:text-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm"
        >
{theme === 'dark' ? (
    <><span>☀️</span> Switch to Light</>
) : (
    <><span>🌙</span> Switch to Dark</>
)}
        </button>
    );
}