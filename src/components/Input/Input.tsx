import { forwardRef } from 'react';
import styles from './styles.module.css';

interface InputProps {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  isRequire?: boolean;
  [key: string]: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      {!props.hidden && (
        <label className={styles.label} htmlFor={props.name}>
          {props.label}
        </label>
      )}
      <input className={styles.inputForm} ref={ref} {...props} />
    </>
  );
});

export default Input;
