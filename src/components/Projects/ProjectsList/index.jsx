import { projects } from "../../../data/projects";

export const ProjectsList = () => {
    return (
        <ul>

            {projects.map(projectRender => {
                return (
                    <li key={projectRender.name}>
                        <h3>{projectRender.name}</h3>
                        <p>{projectRender.description}</p>
                        <img src="src/assets/git-icon.png" alt="Github Ícone" />
                        <p>Saiba Mais</p>
                    </li>
                );
            })}
        </ul>
    );
}