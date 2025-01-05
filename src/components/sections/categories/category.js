import style from './styleCategory.module.css'

function Category({categoria, imagem, to}){
    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
      };
    return(
            <a href={`#${to}`} onClick={handleClick} className={style.category}>

             <img className={style.categoryImage} src={`${process.env.PUBLIC_URL}/images/${imagem}`} alt="categorias"/>
             <p>{categoria}</p>

            </a>

    );
}

export default Category;