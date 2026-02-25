"use client";

import { Button } from 'antd';
import styles from './Navbar.module.scss';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Dev<span>Pulse</span>
      </div>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Explore</Link>
        <Link href="/" className={styles.link}>Trending</Link>
        <Link href="/" className={styles.link}>Showcase</Link>
      </div>

      <div className={styles.authButtons}>
        <Button type="text" className={styles.loginBtn}>
          Log in
        </Button>
        <Button type="primary" className={styles.signupBtn}>
          Join Free
        </Button>
      </div>
    </nav>
  );
};