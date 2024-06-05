// components/Sidebar.tsx
import React from 'react';
import './Sidebar.css'
import { UserCard } from '../UserCard/UserCard';

import { Search } from 'lucide-react';
import FilterChips from '../FilterChips/FilterChips';

const Sidebar: React.FC = () => {
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
                    <UserCard classnames='active' />
                    <UserCard />
                    <UserCard />
                    <UserCard />

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;