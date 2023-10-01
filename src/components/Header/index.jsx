import { HeaderMenu } from "./HeaderMenu";
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.render}>
            <img src="src/assets/portfolio.png" alt="Imagem Portifólio" />
                        
            <HeaderMenu/>

            <button className={styles.renderButton} type="button">Contato</button>
        </header>
    );
}