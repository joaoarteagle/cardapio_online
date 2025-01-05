import style from "../style.module.css";

function WhatsappIcon(){
    return(
       
        <a href="https://wa.me/5544998006615?text=Ol%C3%A1%20Lanchonete%20Caiu%C3%A1!"  target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/whatsapp.png`} className={style.whatsapp} alt=''whatsappIcon/>
        </a>
       
    );
}

export default WhatsappIcon;