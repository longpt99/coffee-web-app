import styles from './styles.module.css';

interface ButtonProps {
  children: string;
  link?: string;
}

function Button(props: ButtonProps) {
  return (
    <a className={styles.btn} href={props.link}>
      {props.children}
    </a>
  );
}

export default Button;
