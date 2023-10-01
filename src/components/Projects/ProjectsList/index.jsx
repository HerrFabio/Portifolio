import { projects } from "../../../data/projects";
import styles from "./style.module.css";
export const ProjectsList = () => {
    return (
        <ul className={styles.render}>

            {projects.map(projectRender => {
                return (
                    <li className={styles.renderList} key={projectRender.name}>
                        <h3 className={styles.renderName}>{projectRender.name}</h3>
                        <p className={styles.renderText}>{projectRender.description}</p>
                        <a className={styles.renderLink} href="" target="_blank">Saiba Mais</a>
                        <img className={styles.renderImage} src="src/assets/git-icon.png" alt="Github Ícone" />
                        <div></div>
                    </li>
                );
            })}
        </ul>
    );
}