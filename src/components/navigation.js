import React from 'react'
import { Link } from 'gatsby'
import Logo from '/assets/savage-strats-logo.svg'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/guides" activeClassName="active">
            Guides
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
      </ul>
      <div className={styles.decoration}></div>
    </div>
  </nav>
)

export default Navigation
