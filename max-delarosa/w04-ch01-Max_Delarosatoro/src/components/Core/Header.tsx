import React from 'react';
import { Nav } from './Nav';

export function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Tour of Heroes</h1>
            <Nav />
        </header>
    );
}
