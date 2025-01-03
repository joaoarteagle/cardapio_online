import Sections from "./sections.component";
import Item from "../items/items.component";
import Sub_Section from "./sub_sections.component";

function PrensadosSection() {
  return (
    <Sections nameSection={"Lanches Prensados"}  id="prensados">
      <Sub_Section>
        <Item
          nome={"Cachorro Q. Simples"}
          descricao={"Pão, alface, tomate, batata, 2 salsichas. "}
          preco={"13,00"}
        />
        <Item
          nome={"Cachorro Q. Especial"}
          descricao={"Pão, alface, tomate, batata, 1 salsicha, hamburguer. "}
          preco={"16,00"}
        />
        <Item
          nome={"Cachorro Q. Duplo"}
          descricao={"Pão, alface, tomate, batata, 2 salsichas, hamburguer. "}
          preco={"17,00"}
        />
        <Item
          nome={"Cachorro Q. Frango"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, frango. "
          }
          preco={"19,00"}
        />
        <Item
          nome={"Cachorro Q. Bacon"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, bacon. "
          }
          preco={"20,00"}
        />
      </Sub_Section>

      <Sub_Section>
        <Item
          nome={"Cachorro Q. Caiuá"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, calabresa, bacon."
          }
          preco={"21,00"}
        />
        <Item
          nome={"Cachorro Q. Calabresa"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, calabresa."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Cachorro Q. Frango Catupiry"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, frango, catupiry."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Cachorro Q. Frango Bacon"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, frango, bacon."
          }
          preco={"21,00"}
        />
        <Item
          nome={"Cachorro Q. Frango Cheddar"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, hamburguer, frango, cheddar."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Caiuá Lombo Cheddar"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, 2 ovos, lombo, cheddar."
          }
          preco={"19,00"}
        />
      </Sub_Section>

      <Sub_Section>
        <Item
          nome={"Caiuá Maromba"}
          descricao={"Pão, alface, tomate, batata, 3 ovos, hamburguer, frango."}
          preco={"19,00"}
        />
        <Item
          nome={"Caiuá Fominha"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsi, 2 ovos, calabresa,frango, catupiry."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Caiuá Zoião"}
          descricao={
            "Pão, alface, tomate, batata, 3 ovos, 3 salsichas, 2 hamburguer."
          }
          preco={"21,00"}
        />
        <Item
          nome={"Caiuá Egg"}
          descricao={"Pão, alface, tomate, batata, 2 ovos, 2 salsichas."}
          preco={"16,00"}
        />
        <Item
          nome={"Caiuá Calabresa"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, 2 ovos, calabresa."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Caiuá Frango Catupiry"}
          descricao={
            "Pão, alface, tomate, 2 salsichas, 2 ovos, Frango, catupiry."
          }
          preco={"19,00"}
        />
        <Item
          nome={"Caiuá Frango Cheddar"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsichas, 2 ovos, frango, cheddar."
          }
          preco={"19,00"}
        />
      </Sub_Section>

      <Sub_Section>
        <Item
          nome={"X Salada"}
          descricao={"Pão, alface, tomate, batata,  hamb, presunto, mussarela."}
          preco={"18,00"}
        />
        <Item
          nome={"X Salada Duplo"}
          descricao={
            "Pão, alface, tomate, batata,  2 hamb, 2 presunto, 2 mussarela."
          }
          preco={"21,00"}
        />
        <Item
          nome={"X Egg"}
          descricao={
            "Pão, alface, tomate, batata,  hamb, presunto, mussarela, ovo."
          }
          preco={"19,00"}
        />
        <Item
          nome={"X Bacon"}
          descricao={
            "Pão, alface, tomate, batata,  hamb, presunto, mussarela, bacon."
          }
          preco={"22,00"}
        />
        <Item
          nome={"X Calabresa"}
          descricao={
            "Pão, alface, tomate, batata, hamb, presunto, mussarela, calabresa."
          }
          preco={"19,00"}
        />
        <Item
          nome={"X Burguer"}
          descricao={"Pão, batata,  hamb, presunto, mussarela."}
          preco={"17,00"}
        />
        <Item
          nome={"X Vira Lata"}
          descricao={
            "Pão, alface, tomate, batata, 2 salsicha, ovo, presunto, mussarela."
          }
          preco={"16,00"}
        />
      </Sub_Section>

      <Sub_Section>
        <Item nome={"X Caiuá"} descricao={"Pão, alface, tomate, 2 salsichas, hamb, calabresa, bacon, 2 presunto, 2 mussarela."} preco={"24,00"}/>
        <Item nome={"X Baconlesa"} descricao={"Pão, alface, tomate, hamb, calabresa, bacon, presunto, mussarela."} preco={"24,00"}/>
        <Item nome={"X Frangolesa"} descricao={"Pão, alface, tomate, hamb, calabresa, frango, presunto, mussarela."} preco={"24,00"}/>
        <Item nome={"X Frango com Bacon"} descricao={"Pão, alface, tomate, hamb, frango, bacon, presunto, mussarela."} preco={"24,00"}/>
        <Item nome={"X Caiuá"} descricao={"Pão, alface, tomate, 2 salsichas, hamb, calabresa, bacon, 2 presunto, 2 mussarela."} preco={"24,00"}/>
        <Item nome={"X Caiuá"} descricao={"Pão, alface, tomate, 2 salsichas, hamb, calabresa, bacon, 2 presunto, 2 mussarela."} preco={"24,00"}/>
        <Item nome={"X Caiuá"} descricao={"Pão, alface, tomate, 2 salsichas, hamb, calabresa, bacon, 2 presunto, 2 mussarela."} preco={"24,00"}/>
      </Sub_Section>
    </Sections>
  );
}

export default PrensadosSection;
