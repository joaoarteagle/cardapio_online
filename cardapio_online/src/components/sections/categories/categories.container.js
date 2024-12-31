import Category from "./category";
import style from "./styleCategory.module.css";

function CategoriesContainer(){
    return(
       <div className={style.categoriesContainer}>
        <Category categoria={"Gourmet"} imagem={"lancheGourmet2.png"}/>
        <Category categoria={"Prensados"} imagem={"prensado2.png"}/>
        <Category categoria={"Porções"} imagem={"porções2.png"}/>
        <Category categoria={"Pizzas"} imagem={"pizza2.png"}/>
        <Category categoria={"Esfihas"} imagem={"esfiha2.png"}/>
        <Category categoria={"Bebidas"} imagem={"bebidas.png"}/>
       </div> 
    );

}

export default CategoriesContainer;