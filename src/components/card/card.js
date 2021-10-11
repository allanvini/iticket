import { Link } from 'react-router-dom';
import styles from './card.module.css';

import ticketsIcon from '../../assets/icons/tickets.svg';

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
                    <img src={ticketsIcon} width={50} height={50} />
                    Comprar
                </a>
            </div>
        </div>
    )

}


/*

{
    "id": 1,
    "movie": "shang-chi",
    "link": "https://carrinho.ingresso.com/checkout/?ing_source=api&ing_medium=link-checkout&ing_campaign=kinoplex&ing_content=#/sessao/66373804/setor/4580800/assentos",
    "movieCover": "https://ingresso-a.akamaihd.net/prd/img/movie/shang-chi-e-a-lenda-dos-dez-aneis/99cd42d9-5d27-4a96-aa28-c5bf4c9b6fb5.jpg",
    "inteira": 77.51,
    "meia": 43.51,
    "userId": 1,
    "cinema": "Kinoplex dom pedro"
  }

*/