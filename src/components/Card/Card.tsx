import styles from './Card.module.css'
import CardPeople1 from '../../assets/Cards/CardPeople1.png'
import CardPeople2 from '../../assets/Cards/CardPeople2.png'
import CardPeople3 from '../../assets/Cards/CardPeople3.png'
import { CardsProps } from '../../types/Interfaces'

export default function (props : CardsProps) {

    const imagens: string[] = [CardPeople1, CardPeople2, CardPeople3];
    const numero: number = +props.img; 

    return (
        <>
            <div className={styles.card}>
                <div className={styles.img}><img src={imagens[numero]} /></div>
                <div className={styles.text}>
                    <h1>{props.texth1}</h1>
                    <p>{props.textp}</p>
                </div>
                <footer className={styles.footer}><a>{props.texta}</a></footer>
            </div>
        </>
    )
    
}