import styles from './styles.module.css';

interface InputProps {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  isRequire?: boolean;
}

function Input(props: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.inputForm}
        id={props.name}
        name={props.name}
        type={props.type ?? 'text'}
        required={props.isRequire ?? true}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
