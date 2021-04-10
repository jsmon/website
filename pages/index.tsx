import React, { useState, useEffect } from 'react';

import { IProject as Project } from '@models/project';

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
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const clickHandler = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')) as 'light' | 'dark');
        if (process.env.NODE_ENV === 'production' && !['jsmon.dev', 'preview.jsmon.dev'].includes(window.location.hostname)) {
            window.location.replace('https://jsmon.dev/');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html')?.classList.add(theme);
        document.querySelector('html')?.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

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
