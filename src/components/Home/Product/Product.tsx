import classNames from 'classnames';
import styles from './styles.module.css';

export interface ProductProps {
  contents: {
    image: string;
    title: string;
    description: string;
    price: string;
    isNew?: boolean;
  }[];
}

export default function Product(props: ProductProps) {
  return (
    <section className={classNames(styles.productSection)}>
      <p className={classNames(styles.textIntro)}>What happens hear</p>
      <h2 className={classNames(styles.textHeading)}>
        Favorite coffee flavours
      </h2>
      <div className={classNames(styles.row, styles.productList, 'flex')}>
        <div className={classNames('col2')}>
          {props.contents.slice(0, 6).map((product, i) => (
            <div key={i} className={styles.productItems}>
              <div className={styles.productContent}>
                <h3 className={classNames(styles.productName, 'flex')}>
                  {product.title}
                  <span className={classNames(styles.productPrice, 'ml')}>
                    ${product.price}
                  </span>
                </h3>
                <p className={classNames(styles.productDescription, 'flex')}>
                  {product.description}
                  {product.isNew && <span>New</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classNames('col2')}>
          {props.contents.slice(6).map((product, i) => (
            <div key={i} className={styles.productItems}>
              <div className={styles.productContent}>
                <h3 className={classNames(styles.productName, 'flex')}>
                  {product.title}
                  <span className={classNames(styles.productPrice, 'ml')}>
                    ${product.price}
                  </span>
                </h3>
                <p className={classNames(styles.productDescription, 'flex')}>
                  {product.description}
                  {product.isNew && <span>New</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
