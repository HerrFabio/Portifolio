import { TechList } from "./TechList";
import styles from "./style.module.css";

export const Tech = () => {
    return (
        <section className={styles.render}>
            <h2 className={styles.renderTitle}>Tecnologias</h2>
            <TechList />
        </section>
    );
}