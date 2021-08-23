import React from 'react';
import navItems from '../../data/NavItems';

const NavigationItems = () => {
    const navItemGenerate = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === true && arr[i].desktop === true) {
                return (<li key={arr[i].key}>
                    <a href={arr[i].link} target="_blank" rel="noopener noreferrer" title={arr[i].name}>{arr[i].name.toUpperCase()}</a>
                </li>)
            }

        }
    }

    return (
        <ul className="nav--list">
            {navItemGenerate(navItems)}
        </ul>
    )
}

export default NavigationItems;