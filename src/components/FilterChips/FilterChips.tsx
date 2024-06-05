
import './FilterChips.css'

const FilterChips: React.FC = () => {
    const filters = ['All', 'Completed', 'Pending', 'Canceled', 'In Progress'];

    return (

        <div className="filter-chips-container">
            <div className="filter-chips-scroll">
                {filters.map((filter, index) => (
                    <div key={index} className="filter-chip">
                        {filter}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default FilterChips;