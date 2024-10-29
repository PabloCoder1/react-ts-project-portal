import styles from './Topbar.module.css';
import VivoIcon from '../../assets/VivoIcon.png'

const Topbar = () => {
  return (
    <>
      <div className={styles.container}>
      <img src={VivoIcon} alt="Esse é o logo da vivo" className={styles.VivoIcon} />
        <div className={styles.wrapper}>
          <a href="#">home</a>
          <a href="#">framework</a>
          <a href="#">lean office</a>
          <a href="#">contato</a>
        </div>
      </div>
    </>
  );
};

export default Topbar;
