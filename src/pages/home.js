import { useState, useEffect } from "react";
import axios from 'axios';

import ContentContainer from "../components/contentContainer/contentContainer";
import SearchBar from "../components/searchBar/searchBar";

import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";

export default function Home() {

    const [movieList, setMovieList] = useState([]);

    useEffect(async()=>{
        await axios.get(`http://localhost:8080/tickets`).then((response)=>{
            setMovieList(response.data)
        }).catch((err)=>{
            console.log(err);
            setMovieList([]);
        })
    },[])

    return (
        <ContentContainer>
            <h2>Busca por titulo</h2>
            <SearchBar onClick={setMovieList} />
            <h2>Últimas promoções</h2>
            <CardContainer>
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </CardContainer>
        </ContentContainer>
    )
}