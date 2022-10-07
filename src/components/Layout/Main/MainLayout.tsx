import styles from './styles.module.css';

function MainLayout({ children }) {
  return <section className={styles.layout}>{children}</section>;
}

export default MainLayout;
