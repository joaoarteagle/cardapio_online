import Item from "../items/items.component";
import Sections from "./sections.component";
import Sub_Section from "./sub_sections.component";

function PizzasSection(){
    return(
        <Sections nameSection={'PIZZAS'} id={'pizzas'}>
            <Sub_Section>
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

            </Sub_Section>

        </Sections>
    );
}

export default PizzasSection;