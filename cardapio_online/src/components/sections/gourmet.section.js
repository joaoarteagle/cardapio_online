import Sections from "./sections.component";
import Item from "../items/items.component";
import Sub_Section from "./sub_sections.component";

function GourmetSection() {
  return (
    <Sections nameSection={"GOURMET"}>
      <Sub_Section>
        <Item
          nome={"Fabuloso"}
          descricao={"Brioche, 2 Hamburguer, 2 Cheddar, tomate, alface e bacon"}
          preco={"29,00"}
        ></Item>
        <Item
          nome={"Steak Barbecue"}
          descricao={
            "Brioche, hamburguer, Mussarela, cheddar, alface, tomate, barbecue."
          }
          preco={"26,00"}
        ></Item>
        <Item
          nome={"Triplo X"}
          descricao={"Brioche, 3 hamburguer, 3 provolone, 3 mussarela."}
          preco={"31,00"}
        ></Item>
        <Item
          nome={"Maxximus"}
          descricao={
            "Brioche, 2 hamburguer, 2 cheddar, bacon, cebola caramelizada. "
          }
          preco={"29,00"}
        ></Item>
        <Item
          nome={"Invicto"}
          descricao={
            "Brioche, 2 hamburguer, 2 mussarela, lombo, cebola roxa, tomate, rúcula."
          }
          preco={"29,00"}
        ></Item>
        <Item
          nome={"Xerife"}
          descricao={
            "Brioche, 2 hamburguer, 2 provolone, tomate, rúcula, cebola caramelizada."
          }
          preco={"26,00"}
        ></Item>
        <Item
          nome={"Mega"}
          descricao={
            "Brioche, molho especial, hamburguer, alface, tomate, cheddar."
          }
          preco={"20,00"}
        ></Item>
        <Item
          nome={"Texas"}
          descricao={"Brioche, molho especial, hamburguer, mussarela"}
          preco={"20,00"}
        ></Item>
      </Sub_Section>
    </Sections>
  );
}

export default GourmetSection;
