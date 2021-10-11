import { useUserContext } from '../../context/userContext';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';
import ticketIcon from '../../assets/icons/ticket.svg';

export default function Menu() {

    const { userContext, setUserContext } = useUserContext();

    function logout() {
        setUserContext({
            isLoggedIn: false,
            id: null,
            email: "",
            password: "",
            username: ""
        })
    }

    return (
        <nav className={styles['menu-bar']}>
            <Link to="/" className={styles['logo-container']}>
                <img src={ticketIcon} width={50} height={50} fill="white" />
                <h3>iTicket</h3>
            </Link>


            <div className={styles['menu-buttons-container']} >
                <Link to="/sobre" className={styles['menu-button']}>
                    Sobre
                </Link>
                {
                    (userContext.isLoggedIn) ?
                        <>
                            <Link to="/painel" className={styles['menu-button']}>
                                Olá, {userContext.username}
                            </Link>
                            <Link to="/" className={styles['menu-button']} onClick={logout}>
                                Logout
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/cadastro" className={styles['menu-button']}>
                                Criar conta
                            </Link>
                            <Link to="/login" className={styles['menu-button']}>
                                Login
                            </Link>
                        </>
                }
            </div>

        </nav>
    )
}
