import React from 'react';

const Knowledge = (): React.ReactElement<{
    id: 'what-i-know';
    className: string;
}, 'section'> => (
    <section id="what-i-know" className="p-2">
        <h2 className="font-bold text-2xl">What I Know</h2>
        <p>I am familiar with the following technologies:</p>
        <div className="p-6 max-w-min rounded-xl shadow-md flex items-center space-x-4">
            <div>
                <ul>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gatsby.js</li>
                    <li>CRA</li>
                    <li>Express.js</li>
                    <li>Linux</li>
                    <li>npm</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>HTML/CSS</li>
                    <li>tailwindcss</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Knowledge;
