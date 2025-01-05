import style from "./style.section.module.css";
function HeaderSection() {
  return (
    <header className={style.stickyHeader}>
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
