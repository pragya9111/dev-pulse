import { Button } from 'antd';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.heroSection}>
      <h1>Discover Your Next <br /> Developer Pulse.</h1>
      <p>
        A curated hub for developers to find, share, and organize 
        the coolest resources on the internet. Built for the community.
      </p>
      <Button type="primary" size="large" className={styles.ctaButton}>
        Get Started — It's Free
      </Button>
    </main>
  );
}