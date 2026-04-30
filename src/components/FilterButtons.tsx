import { useFilter } from '../context/FilterContext'

export const FilterButtons = () => {
    const { filter, setFilter } = useFilter();

    //active inactive themes
    const getBtnClass = (current: string) =>
        `px-4 py-2 rounded-md font-medium transition-all ${filter === current
            ? 'bg-pink-500 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'

        }`;

    return (
        <div className="flex justify-center gap-3 mb-8">
            {/* button filter ALL*/}
            <button
                onClick={() => setFilter('all')}
                className={getBtnClass('all')}
            >
                All
            </button>
            {/*button filter ACTIVE*/}
            <button
                onClick={() => setFilter('active')}
                className={getBtnClass('active')}
            >
                Active
            </button>
            {/*button filter COMPLETED*/}
            <button
                onClick={() => setFilter('completed')}
                className={getBtnClass('completed')}
            >
                Completed
            </button>
        </div>
    );
};