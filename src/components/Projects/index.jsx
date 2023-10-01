import { ProjectsList } from "./ProjectsList";
import styles from "./style.module.css";

export const Projects = () => {
    return (
        <section className={styles.render}>
            <h2 className={styles.renderTitle}>Projetos</h2>

            <ProjectsList />

        </section>
    );
}