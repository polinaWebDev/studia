import React from 'react';
import styles from './NavFilter.module.css';
import Button from '../Button/Button';

const FilterMocs = [
    {
        id: 1,
        name: "All",
    },     {
        id: 2,
        name: "Architectural Design",
    },    {
        id: 3,
        name: "Residential Interiors",
    },    {
        id: 4,
        name: "Commercial Interior",
    }
]


function NavFilter() {
    return (
        <nav className={styles.nav}>
                {FilterMocs.map((filter, index) => (
                    <React.Fragment key={filter.id}>
                        <Button theme={"dark"}>{filter.name}</Button>
                        {index !== FilterMocs.length - 1 && (
                            <div className={styles.divider} />
                        )}
                    </React.Fragment>
                ))}
        </nav>
    );
}

export default NavFilter;