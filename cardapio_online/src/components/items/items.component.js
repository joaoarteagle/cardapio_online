import style from "../style.module.css";

function Item({ nome, descricao, preco }){
  return (
    <div className={style.item}>
      <div className={style.nomeItemPreco}>
        <p className={style.nomeItem}>{nome}</p>
      <p className={style.descricao}>{descricao}</p>
      </div>
        <p className={style.preco}>R${preco}</p>
    </div>
  );
}

export default Item;
