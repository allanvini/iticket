import styles from './contentContainer.module.css';

export default function ContentContainer({children, style}){
    return (
        <div className={styles['container']} style={style}>
            {children}
        </div>
    )
}