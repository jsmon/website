import React from 'react';

const About = (): React.ReactElement<{
    id: 'about-me';
}, 'section'> => (
    <section id="about-me">
        <h2>About Me</h2>
        <main>
            <p>I'm a full stack developer and I develop web applications in my spare time. Most of my projects use TypeScript, React.js, Node.js, and Next.js. My dream job is to be a software engineer at Google.</p>
        </main>
    </section>
);

export default About;
