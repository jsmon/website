import React from 'react';

import MetaData from '../components/MetaData';
import Header from '../components/Header';

const Home = () => {
    const isSSR = typeof window === 'undefined';

    if (!isSSR) {
        const theme = (localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')) as 'light' | 'dark';
        localStorage.setItem('theme', theme);
        document.querySelector('html')!.dataset.theme = theme;
    }

    return (
        <div>
            <MetaData />
            <Header />
        </div>
    );
};

export default Home;
