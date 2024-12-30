import style from '../style.module.css';

function Sections({nameSection, children}){
    return(
        <section classname={style.sections}>
            <h3 classname={style.tituloSection}>{nameSection}</h3>
            {children}
        </section>

    );


}


export default Sections;