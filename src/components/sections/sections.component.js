import style from '../style.module.css';

function Sections({ nameSection, children, id, options = [] }) {
  return (
    <section id={id}>
      <p className={style.nomeSection}>{nameSection}

      {
        options.length > 0 && (
          <select className={style.selectOption}>
           {options.map((option, index) =>(
            <option key={index} value={option}>
              {option}
            </option>
           ))}
          </select>
         )
      }

      <a href='#categories'>
        <img src={`${process.env.PUBLIC_URL}/images/up.png`} className={style.up} alt='up-set'/>
      </a>

      </p>
      <div>{children}</div>
    </section>
  );
}

export default Sections;