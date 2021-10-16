import styles from './panelCard.module.css';
import { Link } from 'react-router-dom';

import EditIcon from '../../assets/icons/editIcon';
import DeleteIcon from '../../assets/icons/deleteIcon'

export default function PanelCard({ movie, deleteFunction }) {

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

                <div className={styles['card-buttons']}>
                    <Link to={`/painel/editar/${movie.id}`} className={styles['edit-button']}>
                        <EditIcon style={{marginRight: '5px'}} fill="white" width={25} heigth={25} />
                        <p>Editar publicação</p>
                    </Link>

                    <a onClick={()=>{deleteFunction(movie)}} className={styles['exclude-button']}>
                        <DeleteIcon fill="white" width={25} heigth={25} />
                        <p>Excluir publicação</p>
                    </a>
                </div>

            </div>
        </div>
    )
}