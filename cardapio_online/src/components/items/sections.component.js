import style from '../style.module.css';

function Sections({ nameSection, children }) {
  return (
    <section>
      <p className={style.nomeSection}>{nameSection}</p>
      <div>{children}</div>
    </section>
  );
}

export default Sections;
