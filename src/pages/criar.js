import { useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";
import { useHistory } from 'react-router';
import styles from '../styles/criar.module.css';

import ContentContainer from '../components/contentContainer/contentContainer';
import BackIcon from '../assets/icons/backIcon';
import CheckIcon from '../assets/icons/checkIcon';
import axios from "axios";

export default function Criar() {

    const history = useHistory();

    const { userContext, setUserContext } = useUserContext();

    const [movieData, setMovieData] = useState({
        movie: '',
        link: '',
        movieCover: '',
        inteira: '',
        meia: '',
        userId: userContext.id,
        cinema: ''
    });

    const [cinemasList, setCinemasList] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:8080/cinemas').then((response) => {
            setCinemasList(response.data)
        }).catch((error) => {
            alert('Houve um erro, por favor tente novamente mais tarde');
            setCinemasList([]);
        })
    }, []);

    async function createTicket() {
        await axios.post('http://localhost:8080/tickets', { ...movieData }).then((response) => {
            if (response.status == 201) {
                alert('Publicação criada com sucesso!');
                history.push('/painel');
            }
        }).catch((error) => {
            alert('Houve um erro, por favor tente novamente mais tarde');
            console.log(error);
        })
    }

    function handleChange(event) {
        setMovieData({
            ...movieData,
            [event.target.name]: event.target.value
        })
    }

    function discartChanges() {
        history.goBack();
    }

    return (
        <ContentContainer>
            <h1>Criar novo anúncio</h1>

            <div className={styles['create-form']}>
                <div className={styles['form-row']}>
                    <label>Filme</label>
                    <input name="movie" value={movieData.movie} onChange={handleChange} className={styles['input-field']} />
                </div>

                <div className={styles['form-row']}>
                    <label>Link da compra</label>
                    <input name="link" value={movieData.link} onChange={handleChange} className={styles['input-field']} />
                </div>

                <div className={styles['form-row']}>
                    <label>Imagem de capa</label>
                    <input name="movieCover" value={movieData.movieCover} onChange={handleChange} className={styles['input-field']} />
                </div>

                <div className={styles['form-row']}>
                    <label>Valor da inteira</label>
                    <input name="inteira" value={movieData.inteira} onChange={handleChange} className={styles['input-field']} />
                </div>

                <div className={styles['form-row']}>
                    <label>Valor da meia</label>
                    <input name="meia" value={movieData.meia} onChange={handleChange} className={styles['input-field']} />
                </div>

                <div className={styles['form-row']}>
                    <label>Cinema</label>
                    <select name="cinema" value={movieData.cinema} onChange={handleChange} className={styles['input-field']}>
                        {
                            cinemasList.map(cinema => (
                                <option>{cinema.name}</option>
                            ))
                        }
                    </select>
                </div>


                <div className={styles['buttons-container']}>
                    <button onClick={createTicket} className={`${styles['button']} ${styles['save']}`}>
                        <CheckIcon fill="white" width={25} height={25} />
                        Criar anúncio
                    </button>
                    <button onClick={discartChanges} className={`${styles['button']} ${styles['discart']}`}>
                        <BackIcon fill="white" width={25} height={25} />
                        Cancelar
                    </button>
                </div>


            </div>

        </ContentContainer>
    )
}