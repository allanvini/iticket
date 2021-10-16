import ContentContainer from "../components/contentContainer/contentContainer";
import CardContainer from "../components/cardContainer/cardContainer";
import PlusIcon from '../assets/icons/plusIcon';
import styles from '../styles/painel.module.css';
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import PanelCard from "../components/panelCard/panelCard";

import { useEffect, useState } from "react";
import axios from 'axios';

export default function Painel() {

    const { userContext } = useUserContext();
    const [userMovies, setUserMovies] = useState([]);

    useEffect(async () => {
        await axios.get(`http://localhost:8080/tickets/mytickets?user=${userContext.id}`).then((response) => {
            if (response.status == 200) {
                setUserMovies(response.data);
            }
        }).catch((error) => {
            console.log(error);
            setUserMovies([]);
        });
    }, [deleteMovie])

    async function deleteMovie(movie) {
        await axios.delete(`http://localhost:8080/tickets/delete`, { data: movie }).then((response) => {
            if (response.status == 200) alert('Anúncio excluído com sucesso!');
        }).catch((error) => {
            alert('Ocorreu um erro, por favor tente novamente mais tarde');
        })

        return;
    }

    return (
        <ContentContainer>
            <h1>Minhas publicações</h1>
            <CardContainer>
                <Link to="/painel/criar" className={styles['create-movie-card']}>
                    <PlusIcon fill="#00000040" height={149} width={149} />
                    <h2>Criar nova publicação</h2>
                </Link>

                {
                    userMovies.map(movie => (
                        <PanelCard movie={movie} deleteFunction={deleteMovie} />
                    ))
                }

            </CardContainer>
        </ContentContainer>
    )
}