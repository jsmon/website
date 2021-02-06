import React, { useState, useEffect } from 'react';

import Head from 'next/head';

const NotFoundPage = (): React.ReactElement<{}, 'main'> => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as 'light' | 'dark');
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html')!.classList.add(theme);
        document.querySelector('html')!.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    return (
        <main>
            <Head>
                <title>404 | Not Found</title>
            </Head>
            <header className="text-5xl text-center font-bold p-3.5">
                <h1>404 Page Not Found</h1>
            </header>
            <p className="p-2">The page you are looking for cannot be found. Click <a className="text-blue-600 hover:underline" href="/">here</a> to return to the home page.</p>
        </main>
    );
};

export default NotFoundPage;
