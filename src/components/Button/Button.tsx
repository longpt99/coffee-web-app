import classNames from 'classnames';
import styles from './styles.module.css';

interface ButtonProps {
  children: string;
  link?: string;
  type?: 'button' | 'submit';
  className?: string;
}

function Button(props: ButtonProps) {
  return props.link ? (
    <a className={styles.btn} href={props.link}>
      {props.children}
    </a>
  ) : (
    <button
      className={classNames(styles.btn, styles[props.className ?? ''])}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  );
}

export default Button;
