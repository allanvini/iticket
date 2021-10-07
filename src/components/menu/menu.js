import { useUserContext } from '../../context/userContext';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';
import ticketIcon from '../../assets/icons/ticket.svg';

export default function Menu() {

    const { userContext, setUserContext } = useUserContext();

    return (
        <nav className={styles['menu-bar']}>
            <div className={styles['logo-container']}>
                <img src={ticketIcon} width={50} height={50} fill="white" />
                <h3>iTicket</h3>
            </div>
            {
                (userContext.isLoggedIn) ?
                    <div className={styles['menu-buttons-container']}>

                        <Link href="/painel">
                            <button className={styles['menu-button']}>
                                Olá, {userContext.username}
                            </button>
                        </Link>

                        <Link href="/sobre">
                            <button className={styles['menu-button']}>
                                Sobre
                            </button>
                        </Link>

                        <button className={styles['menu-button']}>
                            Logout
                        </button>

                    </div>
                    :
                    <div className={styles['menu-buttons-container']} >
                        b
                    </div>
            }
        </nav>
    )
}