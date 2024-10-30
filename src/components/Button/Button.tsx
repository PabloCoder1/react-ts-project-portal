import styles from './Button.module.css';
import { ButtonProps } from '../../types/Interfaces.ts'

const Button = (props : ButtonProps) => {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.btn} /*style={{ background: props.color }}*/>
          <p>
             {props.text}
          </p>
        </button>
      </div>
    </>
  );
};

export default Button;
