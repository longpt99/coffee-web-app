import styles from './styles.module.css';

interface InputProps {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  isRequire?: boolean;
  [key: string]: any;
}

function Input(props: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input className={styles.inputForm} {...props} />
    </>
  );
}

export default Input;