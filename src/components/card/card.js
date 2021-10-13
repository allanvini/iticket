import { Link } from 'react-router-dom';
import styles from './card.module.css';

import TicketsIcon from '../../assets/icons/ticketsIcon';

export default function Card({ movie }) {
    return (
        <div className={styles['card-container']}>
            <img className={styles['movie-cover']} src={movie.movieCover} />
            <div className={styles['movie-details']}>
                <div className={styles['movie-data']}>
                    <h1>{movie.movie}</h1>
                    <span><b>Cinema: </b>{movie.cinema}</span>
                    <span><b>Preço meia: R$ </b>{movie.meia}</span>
                    <span><b>Preço inteira: R$ </b>{movie.inteira}</span>
                </div>
                <a href={movie.link} target="_blank" className={styles['buy-button']}>
                    <TicketsIcon width={50} height={50} />
                    Comprar
                </a>
            </div>
        </div>
    )

}