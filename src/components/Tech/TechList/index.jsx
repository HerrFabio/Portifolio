import { technologies } from "../../../data/technologies";
import styles from "./style.module.css";


export const TechList = () => {
    return (
        <ul className={styles.render}>
            {technologies.map((TechRender) => {
                return (
                    
                        <li className={styles.renderList} key={TechRender.img}>
                            <h3 className={styles.renderName}>{TechRender.name}</h3>
                            <img className={styles.renderImage} src={TechRender.img} alt={`Ícone ${TechRender.name}`} />

                        </li>
                    
                );
            })}

        </ul>


    );
}