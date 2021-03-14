import React from 'react';

const About = (): React.ReactElement<{
    id: 'about-me';
    className: string;
}, 'section'> => (
    <section id="about-me" className="p-2">
        <h2 className="font-bold text-2xl">About Me</h2>
        <main>
            <p>I make websites, APIs and other tools with TypeScript / JavaScript, Node.js, React.js, Next.js, and more. My dream job is to be a software engineer at Google.</p>
        </main>
    </section>
);

export default About;
