import style from "../style.module.css";

function WhatsappIcon(){
    return(
       
        <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/whatsapp.png`} className={style.whatsapp}/>
        </a>
       
    );
}

export default WhatsappIcon;