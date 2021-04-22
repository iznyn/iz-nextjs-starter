/**
 * pages/index.js
 */
import Seo from '@components/seo';
import Layout from '@includes/layout/main';
import styles from '@styles/Home.module.css';

const Home = () => (
  <Layout>
    <Seo title="Homepage" description="Homepage" />
    <div className={styles.container}>
      <div />
    </div>
  </Layout>
);

export default Home;
