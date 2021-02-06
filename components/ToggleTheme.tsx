import React from 'react';

interface ToggleThemeProps {
    theme: 'light' | 'dark';
    clickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const ToggleTheme = ({ theme, clickHandler }: ToggleThemeProps): React.ReactElement<{
    src: `/images/${'sun' | 'moon'}.png`;
    alt: 'A sun, indicating if you click here you will switch to light theme.' | 'A moon, indicating if you click here you will switch to dark theme.';
    onClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    className: string;
}, 'img'> => (
    <img
        className="p-2 w-10"
        src={theme === 'dark' ? '/images/sun.png' : '/images/moon.png'}
        alt={`A ${theme === 'dark' ? 'sun' : 'moon'}, indicating if you click here you will switch to ${theme === 'dark' ? 'light' : 'dark'} theme.`}
        onClick={clickHandler}
    />
);

export default ToggleTheme;
