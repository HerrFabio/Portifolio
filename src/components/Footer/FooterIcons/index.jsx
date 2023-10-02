import styles from "./style.module.css";
import whatsapp from "../../../assets/whatsapp-icon.png"
import linkedin from "../../../assets/linkedin-icon.png"
import github from "../../../assets/github-icon.png"

export const FooterIcons = () => {
    return(
        <div className={styles.render}>
        <img src={whatsapp} alt="Whatsapp Ícone" />
        <img src={linkedin} alt="Linkedin ícone" />
        <img src={github} alt="Github Ícone" />
        </div>

    );
}