import styles from '../styles/registrar.module.css';
import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import ContentContainer from '../components/contentContainer/contentContainer';
import MainLogo from '../assets/icons/mainLogo';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Cadastro() {
    const history = useHistory();

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { userContext, setUserContext } = useUserContext();

    function inputHandler(event) {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })
    }

    async function submitForm() {
        await axios.post('http://localhost:8080/users/create', registerData).then((response)=>{

            if(response.status == 201){
                alert('Cadastro realizado com sucesso');
                history.push('/login');
            }
            
        }).catch((err)=>{
            console.log(err);
            alert('Ocorreu um erro, por favor tente novamente mais tarde');
            history.push('/home')
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
                <h1>Cadastro</h1>
                <input placeholder="Nome de usuário" className={styles['input-field']} name="username" value={registerData.username} onChange={inputHandler} />
                <input placeholder="Email" className={styles['input-field']} name="email" value={registerData.email} onChange={inputHandler} />
                <input placeholder="Senha" className={styles['input-field']} name="password" type="password" value={registerData.password} onChange={inputHandler} />
                <button className={styles['submit-user']} onClick={submitForm}>Cadastrar</button>
                <div className={styles['form-footer']}>
                    <MainLogo fill="#fff" width={50} height={50} style={{ marginLeft: '15px', marginRight: '15px' }} />
                    <h1>iTicket</h1>
                </div>
            </div>
        </ContentContainer>
    )
}