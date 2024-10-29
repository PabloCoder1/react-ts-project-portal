import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import styles from "./Home.module.css";
import Person from "../../assets/HomePerson.svg";
import HiveFloating50 from "../../assets/ColmeiaFloating50.png";
import DotText from "../../assets/DotIcon.svg";

const Login = () => {
  return (
    <>
      <div className={styles.topbar}>
        <Topbar />
      </div>
      <div className={styles.HomePerson}>
        <img className={styles.Hive} src={HiveFloating50} />
        <img src={Person} />
      </div>

      <img src={DotText} className={styles.DotText} />

      <div className={styles.textTypes}>
        <div className={styles.title}>
          <h1>transforme</h1> <h1>os processos</h1>
        </div>

        <div className={styles.text}>
          <p>
            Bem-vindo ao novo <strong>Portal de Processos da VPTI!</strong> Este
            portal tem como objetivo centralizar a gestão da revisão e dos novos
            processos.
          </p>
          <p>
            É um repositório central para documentar, monitorar e melhorar os
            processos. 
          </p>
          <p>
            Clique no botão abaixo para consultar todos os processos
            disponíveis.
          </p>
        </div>

        <div className={styles.containerBtn}>
          <button className={styles.btn}>
            <p>
              Conheça o nosso <strong>framework</strong>
            </p>
          </button>
        </div>
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </>
  );
};

export default Login;
