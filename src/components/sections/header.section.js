import style from "./style.section.module.css";
import{ useEffect, useRef, useState} from "react";
function HeaderSection() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
      const handleScroll = () =>{
        
        if(window.scrollY > 50){
          setScrolled(true);
        }
        else{
          setScrolled(false)
        }
      }

      window.addEventListener("scroll", handleScroll);


      return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={scrolled ? style.scrolled : ""}>
      <div className={style.containerHeader}>
        <h3>LANCHONETE E PIZZARIA</h3>
        <h1>CAIUÁ</h1>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        className={style.logo}
        alt='logoLanchonete'
      />
     
    </header>
  );
}

export default HeaderSection;
