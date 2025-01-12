import Item from "../items/items.component";
import Sections from "./sections.component";
import SubSection from "./subSections.component";

function PizzasSection(){
    return(
        <Sections nameSection={'PIZZAS'} id={'pizzas'} options={['Grande', 'Média', 'Brotinho' ]}>
            <SubSection>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>
                <Item nome={"Gorduchinha"} descricao={"Molho, calabresa, frango, mussarela, bacon, cebola, tomate, orégano"}/>

            </SubSection>

        </Sections>
    );
}

export default PizzasSection;