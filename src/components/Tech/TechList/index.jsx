import {technologies} from "../../../data/technologies";

export const TechList = () => {
    return (
        <ul>
            {technologies.map((TechRender) => {
                return(
                    <li key={TechRender.img}>
                        
                            {TechRender.name} 
                            
                            <img src={TechRender.img} alt={`Ícone ${TechRender.name}`} />
                            
                        
                    </li>
                );
            })}
            
        </ul>

        
    );
}