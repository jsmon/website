import React from 'react';

import styles from '../styles/Header.module.css';

const Header = (): React.ReactElement<{}, 'header'> => (
    <header className={styles.mainHeader}>
        <h1>Hello, I'm James Simon</h1>
    </header>
);

export default Header;
