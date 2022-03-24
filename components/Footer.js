import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Rodapé hora de codar 2022</p>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
        </div>
    );
}