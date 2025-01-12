import Item from "../items/items.component";
import Sections from "./sections.component";

function PorcoesSection(){
    return(
        <Sections nameSection={'PORÇÕES'} id={'porcoes'} options={['Meia', 'Inteira']}>
            <Item nome={'Alcatra com Fritas'}/>

        </Sections>
    );
}

export default PorcoesSection;