import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.container}>
           <div className={styles.circle}></div>
           <div className={styles.circle}></div>
           <div className={styles.circle}></div>
           <div className={styles.circle}></div>
        </div>
        
    );
};

export default Sidebar