import { moment3, moment4 } from '../../../assets/images';
import Carousel from '../../Carousel/Carousel';
import CarouselItem from '../../CarouselItem/CarouselItem';
import styles from './styles.module.css';

function AuthLayout(props: any) {
  const sliderContents = [
    {
      image: moment3,
    },
    {
      image: moment4,
    },
    {
      image: moment3,
    },
    {
      image: moment4,
    },
  ];

  return (
    <section className={styles.modal}>
      <div className={styles.container}>
        <div className="col2">
          <div className={styles.slide}>
            <Carousel hiddenDirection={true} autoChange={true}>
              {sliderContents.map((item, index) => (
                <CarouselItem key={index}>{item}</CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col2">{props.children}</div>
      </div>
    </section>
  );
}

export default AuthLayout;
