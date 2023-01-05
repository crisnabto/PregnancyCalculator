import React from "react";
import styles from '../css modules/Header.module.css';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={ styles.headerBox }>
                <h1>MyPregnancy</h1>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Header;