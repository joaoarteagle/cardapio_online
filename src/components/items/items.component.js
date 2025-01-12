import style from "../style.module.css";

function Item({ nome, descricao, preco }){
  


  return (
    <div className={style.item}>
      <div className={style.nomeItemDescricao}>
        <p className={style.nomeItem}>{nome}</p>
      <p className={style.descricao}>{descricao}</p>
      </div>
      <div className={style.precoConteiner}>
        <p className={style.sifrao}>R$</p>
        <p className={style.preco}>{preco}</p>
      </div>
    </div>
  );
}

export default Item;
