import style from './styleCategory.module.css'

function Category({categoria, imagem, id}){
    return(
            <a href={id} className={style.category}>

             <img className={style.categoryImage} src={`${process.env.PUBLIC_URL}/images/${imagem}`} alt="categorias"/>
             <p>{categoria}</p>

            </a>

    );
}

export default Category;