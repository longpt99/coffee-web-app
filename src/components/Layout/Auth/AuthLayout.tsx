import classNames from 'classnames';
import { exitIcon } from '../../../assets/icons';
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
        props.close();
      }}
    >
      <div
        className={styles.container}
        onClick={(e) => {
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
        <div className={classNames('relative', 'col2')}>
          {props.children}
          <img
            src={exitIcon}
            alt="exit_icon"
            className={styles.exitIcon}
            onClick={() => {
              props.close();
            }}
          />
        </div>
      </div>
    </section>
  ) : null;
}

export default AuthLayout;
