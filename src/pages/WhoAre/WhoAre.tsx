import styles from './WhoAre.module.css'
import WhoArePerson from '../../assets/WhoArePerson.png'

export default function () {
    return (
        <>
            <div className={styles.WhoAre}><img src={WhoArePerson} /></div>

        </>
    )
}