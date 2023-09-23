import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
    return (
        <header>
            <img src="./assets/portfolio.png" alt="Imagem Portifólio" />
            
            <HeaderMenu/>

            <button type="button">Contato</button>
        </header>
    );
}