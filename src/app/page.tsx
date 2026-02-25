import { Button } from 'antd';
import { Rocket, Share2, Search } from 'lucide-react';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Floating Badges */}
        <div className={`${styles.floatingBadge} ${styles.badge1}`}>🚀 Next.js</div>
        <div className={`${styles.floatingBadge} ${styles.badge2}`}>🎨 Ant Design</div>
        <div className={`${styles.floatingBadge} ${styles.badge3}`}>⚡ GraphQL</div>

        <div className={`${styles.floatingBadge} ${styles.badge4}`}>🔥 TypeScript</div>
        <div className={`${styles.floatingBadge} ${styles.badge5}`}>⚛️ React</div>
        <div className={`${styles.floatingBadge} ${styles.badge6}`}>🎯 Tailwind</div>
        <div className={`${styles.floatingBadge} ${styles.badge7}`}>💎 SCSS</div>

        <h1>Discover Your Next <br /> Developer Pulse.</h1>
        <p>
          A curated hub for developers to find, share, and organize
          the coolest resources on the internet. Built for the community.
        </p>
        <Button type="primary" size="large">
          Get Started — It's Free
        </Button>
      </section>
    </main>
  );
}
