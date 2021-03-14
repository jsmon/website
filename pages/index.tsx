import React, { useState, useEffect } from 'react';

import { IProject as Project } from '../models/project';

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
        setTheme((localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')) as 'light' | 'dark');
        if (process.env.NODE_ENV === 'production' && !['jsmon.vercel.app', 'jsmon-preview.vercel.app'].includes(window.location.hostname)) {
            window.location.replace('https://jsmon.vercel.app/');
        }
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
    const res = await fetch(process.env.NODE_ENV === 'production' ? 'https://jsmon.vercel.app/api/projects' : 'http://localhost:3000/api/projects');
    const data = await res.json() as Project[];

    return {
        props: {
            projects: data
        }
    };
};

export default Home;
