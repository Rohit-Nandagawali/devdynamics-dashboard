import React, { useState } from 'react';
import './Sidebar.css'
import UserCard from '../UserCard/UserCard';
import { NavLink } from 'react-router-dom';

import { Search } from 'lucide-react';

interface SidebarProps {
    developerNames: string[],

}

const Sidebar: React.FC<SidebarProps> = ({ developerNames }) => {

    const [searchInput, setSearchInput] = useState('');
    const [filteredDeveloperNames, setFilteredDeveloperNames] = useState(developerNames);


    // search 
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchInput(value);

        const filteredNames = developerNames.filter(name =>
            name.toLowerCase().includes(value)
        );
        setFilteredDeveloperNames(filteredNames);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Developers
            </div>

            <div className="search-bar">
                <Search size={24} className="search-icon" />
                <input
                    type="search"
                    placeholder="Search..."
                    className="search-input"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </div>

            <hr className='divider' />

            <nav className="sidebar-nav">
                {
                    filteredDeveloperNames.length ? (
                        <ul>

                            {filteredDeveloperNames.map((name, key) => (
                                <NavLink key={key} to={name}>
                                    <UserCard
                                        developerName={name}
                                    />
                                </NavLink>
                            ))}


                        </ul>)
                        :
                        <h1>No user found</h1>
                }

            </nav>
        </div>
    );
};

export default Sidebar;