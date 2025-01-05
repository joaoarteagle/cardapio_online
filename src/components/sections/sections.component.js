import style from '../style.module.css';

function Sections({ nameSection, children,id }) {
  return (
    <section id={id}>
      <p className={style.nomeSection}>{nameSection}

      <a href='#categories'>
        <img src={`${process.env.PUBLIC_URL}/images/up.png`} className={style.up}/>
      </a>

      </p>
      <div>{children}</div>
    </section>
  );
}

export default Sections;