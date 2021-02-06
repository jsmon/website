import React from 'react';

const Links = (): React.ReactElement<{
    id: 'where-to-find-me';
    className: string;
}, 'section'> => (
    <section id="where-to-find-me" className="p-2">
        <h2 className="font-bold text-2xl">Where to Find Me</h2>
        <p>My website: <a className="text-blue-600 hover:underline" href="https://jsmon.github.io" target="_blank" rel="noopener noreferrer">jsmon.github.io</a></p>
        <p>GitHub: <a className="text-blue-600 hover:underline" href="https://github.com/jsmon" target="_blank" rel="noopener noreferrer">jsmon</a></p>
        <p>StackOverflow: <a className="text-blue-600 hover:underline" href="https://stackoverflow.com/users/15100869" target="_blank" rel="noopener noreferrer">James Simon</a></p>
        <p>npm: <a className="text-blue-600 hover:underline" href="https://www.npmjs.com/~jsmon1" target="_blank" rel="noopener noreferrer">jsmon1</a></p>
        <p>Pluralsight: <a className="text-blue-600 hover:underline" href="https://app.pluralsight.com/profile/james-simon-20" target="_blank" rel="noopener noreferrer">James Simon</a></p>
    </section>
);

export default Links;
