// components/Sidebar.tsx
import React from 'react';
import './Sidebar.css'
import UserCard from '../UserCard/UserCard';
import { NavLink } from 'react-router-dom';

import { Search } from 'lucide-react';
import FilterChips from '../FilterChips/FilterChips';

interface SidebarProps {
    developerNames: string[],

}

const Sidebar: React.FC<SidebarProps> = ({ developerNames }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Developers</h3>
            </div>

            <div className="search-bar">
                <Search size={24} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>
            <FilterChips />

            <hr className='divider' />

            <nav className="sidebar-nav">
                <ul>
                    {
                        developerNames.map((name, key) => (
                            <NavLink key={key} to={name}>
                                <UserCard
                                    developerName={name}
                                />
                            </NavLink>
                        ))
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;