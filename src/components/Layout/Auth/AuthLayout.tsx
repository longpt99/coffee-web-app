import { moment3, moment4 } from '../../../assets/images';
import Carousel from '../../Carousel/Carousel';
import CarouselItem from '../../CarouselItem/CarouselItem';
import styles from './styles.module.css';

function AuthLayout(props: any) {
  const sliderContents = [
    { image: moment3 },
    { image: moment4 },
    { image: moment3 },
    { image: moment4 },
  ];

  return props.shown ? (
    <section
      className={styles.modal}
      onClick={() => {
        // close modal when outside of modal is clicked
        props.close();
      }}
    >
      <div
        className={styles.container}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
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
  ) : null;
}

export default AuthLayout;
