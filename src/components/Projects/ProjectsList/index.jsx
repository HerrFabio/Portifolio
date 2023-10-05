import { projects } from "../../../data/projects";
import styles from "./style.module.css";
import gitIcon from "../../../assets/git-icon.png";

export const ProjectsList = () => {
    return (
        <ul className={styles.render}>

            {projects.map(projectRender => {
                return (
                    <li className={styles.renderList} key={projectRender.name}>
                        <h3 className={styles.renderName}>{projectRender.name}</h3>
                        <p className={styles.renderText}>{projectRender.description}</p>
                        <a className={styles.renderLink} href="" target="_blank">Saiba Mais</a>
                        <img className={styles.renderImage} src={gitIcon} alt="Github Ícone" />
                    </li>
                );
            })}
        </ul>
    );
}