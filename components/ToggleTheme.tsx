import React from 'react';

import Theme from '@custom-types/theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface ToggleThemeProps {
    theme: Theme;
    clickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ToggleTheme = ({ theme, clickHandler }: ToggleThemeProps): React.ReactElement<{
    children: React.ReactNode;
    className: string;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}, 'i'> => (
    <i className="text-xl cursor-pointer" onClick={clickHandler}><FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} /></i>
);

export default ToggleTheme;
