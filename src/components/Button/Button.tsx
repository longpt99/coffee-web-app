import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface ButtonProps {
  children: any;
  link?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: any;
}

function Button(props: ButtonProps) {
  return props.link ? (
    <Link to={props.link}>
      <a className={classNames(styles.btn, styles[props.className ?? ""])}>
        {props.children}
      </a>
    </Link>
  ) : (
    <button
      className={classNames(styles.btn, styles[props.className ?? ""])}
      type={props.type ?? "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
