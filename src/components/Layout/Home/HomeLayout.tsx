import homeBackgroundImage from '../../../assets/images/home-8-pattern.jpg';
import MainLayout from '../Main/MainLayout';
import styles from './styles.module.css';

function HomeLayout({ children }) {
  return (
    <section
      style={{ backgroundImage: `url(${homeBackgroundImage})` }}
      className={styles.layout}
    >
      <MainLayout>{children}</MainLayout>
    </section>
  );
}

export default HomeLayout;
