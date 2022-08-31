import classNames from 'classnames';
import styles from './styles.module.css';

interface FooterProps {
  bgImage: string;
}

function Footer(props: FooterProps) {
  const locations = [
    {
      name: 'Barista coffee shop',
      address: '2606 Saints Alley Tampa, FL 33602',
    },
    {
      name: 'Barista cafe',
      address: '3497 Watson Street Camden, NJ 08102',
    },
  ];

  const latestPosts = [
    { title: 'Expand your mind, change everything', createdAt: '25.09.1999' },
    { title: 'Place to get lost', createdAt: '25.09.1999' },
    { title: 'Lewis howes', createdAt: '25.09.1999' },
    { title: 'Elevate your expectations', createdAt: '25.09.1999' },
  ];

  return (
    <footer
      className={classNames(styles.footer, 'flex')}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <article className={classNames('col4')}>
        <h3 className={styles.textHeading}>Opening hours</h3>
        <div className={styles.workingDay}>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Monday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Tuesday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Wednesday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Thursday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Friday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Saturday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
          <div className={styles.workingHour}>
            <p className={styles.textDay}>Sunday</p>
            <p className={styles.line}></p>
            <p className={styles.textHour}>9:00 - 22:00</p>
          </div>
        </div>
      </article>
      <article className={classNames('col4')}>
        <h3 className={styles.textHeading}>Latest posts</h3>
        <div className={styles.postList}>
          {latestPosts.map((post, index) => (
            <div key={index} className={styles.postContent}>
              <h4 className={styles.textTitle}>{post.title}</h4>
              <p className={styles.textTime}>{post.createdAt}</p>
            </div>
          ))}
        </div>
      </article>
      <article className={classNames('col4')}>
        <h3 className={styles.textHeading}>Contact us</h3>
        <div className={styles.contactInfo}>
          <p className={styles.textEmail}>barista@qodeinteractive.com</p>
          <p className={styles.contactPhone}>1-444-123-4559</p>
          <p className={styles.contactAddress}>
            Raymond Boulevard 224, New York
          </p>
        </div>
      </article>
      <article className={classNames('col4')}>
        <h3 className={styles.textHeading}>Other locations</h3>
        <div className={styles.locationList}>
          {locations.map((item, index) => (
            <div key={index} className={styles.locationInfo}>
              <h4 className={styles.textName}>{item.name}</h4>
              <p className={styles.textAddress}>{item.address}</p>
            </div>
          ))}
        </div>
      </article>
    </footer>
  );
}

export default Footer;
