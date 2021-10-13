import styles from '../styles/sobre.module.css';
import ContentContainer from '../components/contentContainer/contentContainer';

import MainLogo from '../assets/icons/mainLogo';

export default function Sobre() {
    return (
        <ContentContainer>
            <h1 className={styles['logo-container']}>
                Sobre o
                <MainLogo fill="#000" width={50} height={50} style={{ marginLeft: '15px', marginRight: '15px' }} />
                iTicket
            </h1>
            <p>
                o iTicket é uma plataforma para compartilhamento de promoções de ingressos, aqui você pode encontrar uma promoção pro seu filme
                e também compartilhar seus achados com outros usuários
            </p>
        </ContentContainer>
    )
}