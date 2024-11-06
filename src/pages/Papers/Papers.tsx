import Card from '../../components/Card'
import styles from './Papers.module.css'


export default function () {
    return (
        <>
        <div className={styles.body}>
            <div className={styles.container}>
                <Card texth1='Process Champions' textp='Executivos que representam cada diretoria no endereçamento de temas sobre processos' texta='+ CONHEÇA NOSSOS PCs' img='0'/>
                <Card texth1='Process Owners' textp='Pessoas especializadas em determinado tema e responsável pela gestão desse processo​' texta='+ CONHEÇA NOSSOS POs' img='1'/>
                <Card texth1='lean office' textp='Time responsável por desenvolver, governar e habilitar processos da VPTI' texta='+ CONHEÇA O lean office' img='2'/>
            </div>
        </div>
        </>
    )
}