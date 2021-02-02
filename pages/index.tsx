import React from 'react';

import MetaData from '../components/MetaData';
import Header from '../components/Header';
import About from '../components/About';
import Knowledge from '../components/Knowledge';
import Links from '../components/Links';

const Home = () => (
    <div>
        <MetaData />
        <Header />
        <About />
        <Knowledge />
        <Links />
    </div>
);

export default Home;
