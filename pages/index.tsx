import React, { useState, useEffect } from 'react';

import MetaData from '../components/MetaData';
import Header from '../components/Header';
import About from '../components/About';
import Knowledge from '../components/Knowledge';
import Links from '../components/Links';
import ToggleTheme from '../components/ToggleTheme';
const Home = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const clickHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme);
        document.querySelector('html')!.dataset.theme = theme;
    };

    useEffect(() => {
        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as 'light' | 'dark');
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html')!.dataset.theme = theme;
    }, [theme]);

    return (
        <div>
            <MetaData />
            <Header />
            <About />
            <Knowledge />
            <Links />
            <ToggleTheme theme={theme} clickHandler={clickHandler} />
        </div>
    );
};

export default Home;
