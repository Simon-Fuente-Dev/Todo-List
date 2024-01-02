import { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton } from "./TodoFilters.components"
import { FILTERS } from "../consts/filters";

const TodoFilters = ({
        total, 
        activeFilter, 
        showAllTodos, 
        showActiveTodos, 
        showCompletedTodos, 
        handleClearComplete}) => {

    const { ALL, ACTIVE, COMPLETED } = FILTERS;

    return (
        <FiltersContainer>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter={ALL} />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter={ACTIVE} />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter={COMPLETED} />
            </FilterButtonContainer>
            <button
                onClick={() => handleClearComplete()}
                className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FiltersContainer>

    )
}

export { TodoFilters }