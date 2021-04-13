import React, { useState, useEffect } from 'react';

import { IProject as Project } from '@models/project';

import Theme from '@custom-types/theme';

import MetaData from '@components/MetaData';
import Header from '@components/Header';
import About from '@components/About';
import Knowledge from '@components/Knowledge';
import Links from '@components/Links';
import ToggleTheme from '@components/ToggleTheme';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

const Home = ({ projects }: { projects: Project[] }): React.ReactElement<{
    children: React.ReactNode;
}, 'div'> => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isSystemTheme, setIsSystemTheme] = useState(true);

    const clickHandler = () => {
        setIsSystemTheme(false);
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

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
        <div>
            <MetaData />
            <Header />
            <ToggleTheme theme={theme} clickHandler={clickHandler} />
            <About />
            <Knowledge />
            <Projects theme={theme} projects={projects} />
            <Links />
            <Contact />
        </div>
    );
};

export const getServerSideProps = async (): Promise<{
    props: {
        projects: Project[];
    };
}> => {
    const res = await fetch(process.env.NODE_ENV === 'production' ? 'https://jsmon.dev/api/projects' : 'http://localhost:3000/api/projects');
    const data = await res.json() as Project[];

    return {
        props: {
            projects: data
        }
    };
};

export default Home;
