import Category from "./category";
import style from "./styleCategory.module.css";

function CategoriesContainer(){
    return(
       <div className={style.categoriesContainer}>
        <Category categoria={"Gourmet"} imagem={"lancheGourmet2.png"} to={'gourmet'}/>
        <Category categoria={"Prensados"} imagem={"prensado2.png"} to={'prensados'}/>
        <Category categoria={"Porções"} imagem={"porções2.png"} to={'porcoes'}/>
        <Category categoria={"Pizzas"} imagem={"pizza2.png"} to={'pizzas'}/>
        <Category categoria={"Esfihas"} imagem={"esfiha2.png"} to={'esfihas'}/>
        <Category categoria={"Bebidas"} imagem={"bebidas.png"} to={'bebidas'}/>
       </div> 
    );

}

export default CategoriesContainer;