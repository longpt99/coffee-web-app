import classNames from 'classnames';
import styles from './styles.module.css';

interface CategoryProps {
  image: string;
  data: {
    title: string;
    description: string;
    logo: string;
  }[];
}

function Category(props: CategoryProps) {
  return (
    <section className={classNames('sectionContent', styles.categorySection)}>
      <p className={classNames(styles.textIntro)}>What happens here</p>
      <h2 className={classNames(styles.textHeading)}>Coffee build your base</h2>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          {props.data.slice(0, 3).map((item, index) => (
            <div key={index} className={styles.content}>
              <div>
                <h3>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
              <img src={item.logo} alt="" />
            </div>
          ))}
        </div>
        <div>
          <img src={props.image} alt="image" />
        </div>
        <div className={styles.col}>
          {props.data.slice(3).map((item, index) => (
            <div key={index} className={styles.content}>
              <div>
                <h3>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
              <img src={item.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
