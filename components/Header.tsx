import React from 'react';

const Header = (): React.ReactElement<{
    className: string;
}, 'header'> => (
    <header className="text-5xl text-center font-bold p-3.5">
        <h1>Hello, I'm James Simon</h1>
    </header>
);

export default Header;
