import styles from './cardContainer.module.css';

export default function CardContainer({children}){
    return (
        <div className={styles['card-container']}>
            {children}
        </div>
    )
}