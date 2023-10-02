import { username } from "../../data/user.js";
import styles from "./style.module.css";
import banner from "../../assets/banner-img.png"
export const Banner = () => {
    return (
        <section className={styles.render} >

            <div className={styles.renderInfo}>

                <div>

                    <label className={styles.renderName} htmlFor="nome">{username}</label>

                    <h1 className={styles.renderTitle}>Bem vindo ao meu portifólio</h1>

                    <p className={styles.renderAbout}>Uma frase interessante sobre mim.</p>
                </div>

                <button className={styles.renderButton} type="button">Saiba Mais</button>


                <img className={styles.renderCardImage} src={banner} alt="Banner" />
            </div>


        </section>
    );
}