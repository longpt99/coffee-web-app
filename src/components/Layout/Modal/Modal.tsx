import styles from "./styles.module.css";

export default function ModalLayout(props) {
  return (
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
        {props.children}
      </div>
    </section>
  );
}
