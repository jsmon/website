import React from 'react';

const Links = (): React.ReactElement<{
    id: 'where-to-find-me';
    className: string;
}, 'section'> => (
    <section id="where-to-find-me" className="p-2">
        <h2 className="font-bold text-2xl">Where to Find Me</h2>
        <ul>
            <li>My website: <a className="text-blue-600 hover:underline focus:underline" href="https://jsmon.vercel.app/" target="_blank" rel="noopener noreferrer">jsmon.vercel.app</a></li>
            <li>GitHub: <a className="text-blue-600 hover:underline focus:underline" href="https://github.com/jsmon" target="_blank" rel="noopener noreferrer">@jsmon</a></li>
            <li>LinkedIn: <a className="text-blue-600 hover:underline focus:underline" href="https://www.linkedin.com/in/james-simon-a19baa206" target="_blank" rel="noopener noreferrer">James Simon</a></li>
            <li>Twitter: <a className="text-blue-600 hover:underline focus:underline" href="https://twitter.com/jsmondev" target="_blank" rel="noopener noreferrer">@jsmondev</a></li>
            <li>StackOverflow: <a className="text-blue-600 hover:underline focus:underline" href="https://stackoverflow.com/users/15100869" target="_blank" rel="noopener noreferrer">James Simon</a></li>
            <li>npm: <a className="text-blue-600 hover:underline focus:underline" href="https://www.npmjs.com/~jsmon1" target="_blank" rel="noopener noreferrer">jsmon1</a></li>
            <li>Pluralsight: <a className="text-blue-600 hover:underline focus:underline" href="https://app.pluralsight.com/profile/james-simon-20" target="_blank" rel="noopener noreferrer">James Simon</a></li>
            <li>Email me: <a className="text-blue-600 hover:underline focus:underline" href="mailto:jsmon.dev@gmail.com" target="_blank" rel="noopener noreferrer">jsmon.dev@gmail.com</a></li>
        </ul>
    </section>
);

export default Links;
