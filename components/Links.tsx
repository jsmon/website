import React from 'react';

const Links = (): React.ReactElement<{
    id: 'where-to-find-me';
}, 'section'> => (
    <section id="where-to-find-me">
        <h2>Where to Find Me</h2>
        <p>My website: <a href="https://jsmon.github.io" target="_blank" rel="noopener noreferrer">jsmon.github.io</a></p>
        <p>GitHub: <a href="https://github.com/jsmon" target="_blank" rel="noopener noreferrer">jsmon</a></p>
        <p>StackOverflow: <a href="https://stackoverflow.com/users/15100869" target="_blank" rel="noopener noreferrer">James Simon</a></p>
        <p>npm: <a href="https://www.npmjs.com/~jsmon1" target="_blank" rel="noopener noreferrer">jsmon1</a></p>
        <p>Pluralsight: <a href="https://app.pluralsight.com/profile/james-simon-20" target="_blank" rel="noopener noreferrer">James Simon</a></p>
    </section>
);

export default Links;
