import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import Theme from '@custom-types/theme';

const NotFoundPage = (): React.ReactElement<Record<string, never>, 'main'> => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isSystemTheme, setIsSystemTheme] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('theme')) setIsSystemTheme(false);

        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')) as Theme);
    }, []);

    useEffect(() => {
        if (!isSystemTheme) localStorage.setItem('theme', theme);

        document.querySelector('html')?.classList.add(theme);
        document.querySelector('html')?.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }, [theme, isSystemTheme]);

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
