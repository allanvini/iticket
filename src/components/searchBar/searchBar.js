import { useState } from 'react';
import axios from 'axios';
import styles from './searchBar.module.css';

import SearchIcon from '../../assets/icons/searchIcon';

export default function SearchBar({onClick}){

    const [search, setSearch] = useState('');
    

    function handleChange(event){
        setSearch(event.target.value);
    }

    async function setState(){
        
        let results = await axios.get(`http://localhost:8080//tickets/filter?movie=${search}`).then((response)=>{
            return response.data
        }).catch((err)=>{
            console.log(err);
            return [];
        })

        onClick(results);
    }

    return (

        <div className={styles['bar-container']}>
            <SearchIcon width={25} height={25} />
            <input onChange={handleChange} value={search} className={styles['input-field']} />
            <button onClick={setState} className={styles['search-button']}>
                Buscar
            </button>
        </div>

    )
}