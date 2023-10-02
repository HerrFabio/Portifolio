import { HeaderMenu } from "./HeaderMenu";
import styles from "./style.module.css";
import portfolio from "../../assets/portfolio.png"

export const Header = () => {
    return (
        <header className={styles.render}>
            <img src={portfolio} alt="Imagem Portifólio" />
                        
            <HeaderMenu/>

            <button className={styles.renderButton} type="button">Contato</button>
        </header>
    );
}