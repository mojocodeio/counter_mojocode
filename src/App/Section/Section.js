import React from 'react';

/** styles */
import styles from './Section.module.css'

export const Section = ({ children }) => {
    return (
        <section className={styles.section}>
            { children }
        </section>
    )
}

export default Section;