import { useState } from 'react';
import styles from '../styles/login.module.css';

import ContentContainer from '../components/contentContainer/contentContainer';

import MainLogo from '../assets/icons/mainLogo';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useUserContext } from '../context/userContext';

export default function Login() {
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const { userContext, setUserContext } = useUserContext();

    function fieldChangeHandler(event) {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    async function loginUser() {
        return await axios.post('http://localhost:8080/users/login', loginData).then((response) => {
            if (response.data.id) {
                setUserContext({
                    isLoggedIn: true,
                    ...response.data
                })
                history.push('/painel');
                return;
            }
            alert('usuario ou senha incorretos');
        }).catch((error) => {
            console.log(error);
            alert('Ocorreu um erro, por favor tente novamente mais tarde');
            return;
        })

    }

    return (
        <ContentContainer style={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>

            <div className={styles['form-container']}>
                <h1>Login</h1>

                <input value={loginData.username} placeholder="username" name="username" onChange={fieldChangeHandler} className={styles['input-field']} />
                <input value={loginData.password} type="password" placeholder="password" name="password" onChange={fieldChangeHandler} className={styles['input-field']} />
                <button className={styles['login-user']} onClick={loginUser}>Cadastrar</button>

                <div className={styles['form-footer']}>
                    <MainLogo fill="#fff" width={50} height={50} style={{ marginLeft: '15px', marginRight: '15px' }} />
                    <h1>iTicket</h1>
                </div>

            </div>

        </ContentContainer>
    )
}