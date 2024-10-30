import styles from "./framework.module.css";

const Framework = () => {
  return (
    <>
      <div className={styles.textTypes}>
        <div className={styles.title}>
          <h1>framework</h1>
        </div>
        <div className={styles.version}>
          <p>Versão 2023</p>
        </div>

        <div className={styles.text}>
          <p>
            O nosso <strong>framework de processos</strong> reflete todos os
            domínios da VPTI na Vivo.
          </p>
          <p>
            Experimente abaixo a ferramenta interativa em que é possível
            selecionar um processo e visualizar
          </p>
          <p>a suas propriedades, de uma forma rápida e fácil!</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.HighCollun}>
          <div className={styles.hex} id={styles.blackpurple}></div>
          <div className={styles.hex} id={styles.blackpurple}></div>
          <div className={styles.hex} id={styles.blackpurple}></div>
          <div className={styles.hex} id={styles.blackpurple}></div>
          <div className={styles.hex} id={styles.blue}></div>
        </div>

        <div className={styles.HexName}>
          <h1 className={styles.Nameblackpurple}>Estratégia & Governança</h1>
          <div className={styles.MiddleCollun}>
            <div className={styles.hex} id={styles.blackpurple}></div>
            <div className={styles.hex} id={styles.blackpurple}></div>
            <div className={styles.hex} id={styles.blackpurple}></div>
            <div className={styles.hex} id={styles.blue}></div>
          </div>
          <h1 className={styles.Nameblue}>
            Gestão <br />
            financeiro
          </h1>
        </div>

        <div className={styles.LowCollun}>
          <div className={styles.hex} id={styles.gray}></div>
          <div className={styles.hex} id={styles.gray}></div>
          <div className={styles.hex} id={styles.blue}></div>
          <div className={styles.hex} id={styles.blue}></div>
        </div>

        <div className={styles.HexName}>
          <h1 className={styles.Namegray}>
            Pessoas <br /> & Cultura
          </h1>
          <div className={styles.MiddleCollun}>
            <div className={styles.hex} id={styles.gray}></div>
            <div className={styles.hex} id={styles.gray}></div>
            <div className={styles.hex} id={styles.lightpurple}></div>
            <div className={styles.hex} id={styles.lightpurple}></div>
          </div>
          <h1 className={styles.Namelightpurple}>
            Operações <br />& infra
          </h1>
        </div>

        <div className={styles.LowCollun}>
          <div className={styles.hex} id={styles.pink}></div>
          <div className={styles.hex} id={styles.pink}></div>
          <div className={styles.hex} id={styles.lightpurple}></div>
          <div className={styles.hex} id={styles.lightpurple}></div>
        </div>

        <div className={styles.HexName}>
          <h1 className={styles.Namepink}>Arquitetura</h1>
          <div className={styles.MiddleCollun}>
            <div className={styles.hex} id={styles.pink}></div>
            <div className={styles.hex} id={styles.pink}></div>
            <div className={styles.hex} id={styles.cyan}></div>
            <div className={styles.hex} id={styles.lightpurple}></div>
          </div>
          <h1></h1>
        </div>

        <div className={styles.LowCollun}>
          <div className={styles.hex} id={styles.cyan}></div>
          <div className={styles.hex} id={styles.cyan}></div>
          <div className={styles.hex} id={styles.lightpurple}></div>
          <div className={styles.hex} id={styles.lightpurple}></div>
        </div>

        <div className={styles.HexName}>
          <h1 className={styles.Namecyan}>
            Segurança <br />& riscos
          </h1>
          <div className={styles.MiddleCollun}>
            <div className={styles.hex} id={styles.cyan}></div>
            <div className={styles.hex} id={styles.orange}></div>
            <div className={styles.hex} id={styles.lightpurple}></div>
            <div className={styles.hex} id={styles.green}></div>
          </div>
          <h1 className={styles.Namegreen}>Engenharia de Software</h1>
        </div>

        <div className={styles.HighCollun}>
          <div className={styles.hex} id={styles.orange}></div>
          <div className={styles.hex} id={styles.orange}></div>
          <div className={styles.hex} id={styles.orange}></div>
          <div className={styles.hex} id={styles.green}></div>
          <div className={styles.hex} id={styles.green}></div>
        </div>

        <div className={styles.HexName}>
          <h1 className={styles.Nameorange}>
            Projetos & <br /> Portfólio
          </h1>
          <div className={styles.MiddleCollun}>
            <div className={styles.hex} id={styles.orange}></div>
            <div className={styles.hex} id={styles.brown}></div>
            <div className={styles.hex} id={styles.brown}></div>
            <div className={styles.hex} id={styles.brown}></div>
          </div>
          <h1 className={styles.Namebrown}>Dados & BI</h1>
        </div>

      </div>

        <div className={styles.EndText}>
             <p>Para um <strong>aprofundamento maior</strong> nos processos, visite nossa
             <strong> Wiki.</strong> <br /> A experiência pode ser mais completa se você estiver
              <strong> logado na VPN da Vivo:</strong></p>
        </div>
    </>
  );
};

export default Framework;
