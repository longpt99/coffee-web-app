import homeBackgroundImage from '../../assets/images/home-8-pattern.jpg';
import styles from './styles.module.css';

function HomeLayout(props: any) {
  return (
    <section
      className={styles.layout}
      style={{ backgroundImage: `url(${homeBackgroundImage})` }}
    >
      {props.children}
    </section>
  );
}

export default HomeLayout;
