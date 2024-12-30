import style from "../style.module.css";

function Item({ nome, descricao, preco }) {
  return (
    <div className={style.item}>
      <div className={style.nomeItemPreco}>
        <p className={style.nomeProduto}>{nome}</p>
        <p>R${preco}</p>
      </div>
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
}

export default Item;
