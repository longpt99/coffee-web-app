import classNames from 'classnames';
import styles from './styles.module.css';

interface MomentProps {
  img: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
}

function Moment(props: MomentProps) {
  return (
    <section className={classNames('sectionContent', styles.sectionMoment)}>
      <div className={classNames('row', styles.momentList)}>
        <div className={classNames('col2')}>
          <a href="#">
            <img src={props.img.img1} alt="" />
          </a>
        </div>
        <div className={classNames('col2', 'flex', styles.leftSide)}>
          <div className={classNames('col2')}>
            <a href="#">
              <img src={props.img.img2} alt="" />
            </a>
          </div>
          <div className={classNames('col2', '')}>
            <div className={classNames('')}>
              <a href="#">
                <img src={props.img.img3} alt="" />
              </a>
            </div>
            <div className={classNames('')}>
              <a href="#">
                <img src={props.img.img4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Moment;
