import { FooterIcons } from "./FooterIcons";
import styles from "./style.module.css";

export const Footer = () => {
    return (
        <section className={styles.render}>
            <h2 className={styles.renderTitle}>Contato</h2>
            <p className={styles.renderText}>Todos os direitos reservados - José da Silva</p>
            <FooterIcons />
        </section>

    );
}