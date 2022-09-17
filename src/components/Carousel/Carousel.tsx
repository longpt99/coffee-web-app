import React, { useEffect, useState } from 'react';
import { arrowLeftIcon, arrowRightIcon } from '../../assets/icons';
import styles from './styles.module.css';

interface CarouselProps {
  children: any;
  hiddenDirection?: boolean;
}

function Carousel({ children, hiddenDirection }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (index: number) => {
    if (index < 0) {
      index = React.Children.count(children) - 1;
    } else if (index >= React.Children.count(children)) {
      index = 0;
    }
    setActiveIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 5000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  return (
    <section className={styles.sectionContent}>
      <div className={styles.carousel}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            display: activeIndex === index ? 'block' : 'none',
          });
        })}
        {!hiddenDirection && (
          <div className={styles.direction}>
            <a
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
              href="#0"
            >
              <img
                src={arrowLeftIcon}
                alt="arrow_left"
                className={styles.directionIcon}
              />
            </a>
            <a
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              href="#0"
            >
              <img
                src={arrowRightIcon}
                alt="arrow_right"
                className={styles.directionIcon}
              />
            </a>
          </div>
        )}

        <div className={styles.indicators}>
          {React.Children.map(children, (child, index) => {
            return (
              <button
                style={{ backgroundColor: activeIndex === index ? '#fff' : '' }}
                onClick={() => updateIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
