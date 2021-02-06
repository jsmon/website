import React, { useState, useEffect } from 'react';

import { ProjectObj as Project } from '../components/Projects';

import MetaData from '../components/MetaData';
import Header from '../components/Header';
import About from '../components/About';
import Knowledge from '../components/Knowledge';
import Links from '../components/Links';
import ToggleTheme from '../components/ToggleTheme';
import Projects from '../components/Projects';
import Contact from '../components/Contact'

const Home = ({ projects }: { projects: Project[] }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const clickHandler = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as 'light' | 'dark');
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html')!.classList.add(theme);
        document.querySelector('html')!.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    return (
        <div>
            <MetaData />
            <Header />
            <About />
            <Knowledge />
            <Projects theme={theme} projects={projects} />
            <Links />
            <Contact />
            <ToggleTheme theme={theme} clickHandler={clickHandler} />
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(process.env.NODE_ENV === 'production' ? 'https://website.jsmon.vercel.app/api/projects' : 'http://localhost:3000/api/projects');
    const data = await res.json() as { projects: Project[] };

    return {
        props: {
            projects: data.projects
        }
    };
};

export default Home;
