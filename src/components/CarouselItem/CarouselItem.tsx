import Button from '../Button/Button';
import styles from './styles.module.css';

interface CarouselItemProps {
  children: {
    title: string;
    description: string;
    logo: string;
    image: string;
    link?: string;
  };
  display?: string;
}

function CarouselItem(props: CarouselItemProps) {
  return (
    <article
      style={{
        backgroundImage: `url(${props.children.image})`,
        display: props.display,
      }}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <h3>{props.children.title}</h3>
        <p>{props.children.description}</p>
        <Button link={props.children.link ?? '#'}>Read more</Button>
      </div>
    </article>
  );
}

export default CarouselItem;
