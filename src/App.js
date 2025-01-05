import "./App.css";
import GourmetSection from "./components/sections/gourmet.section";
import PrensadosSection from "./components/sections/prensados.section";
import CategoriesContainer from "./components/sections/categories/categories.container";
import HeaderSection from "./components/sections/header.section";
import PorcoesSection from "./components/sections/porcoes.section";
import PizzasSection from "./components/sections/pizzas.section";
import EsfihasSection from "./components/sections/esfihas.section";
import BebidasSection from "./components/sections/bebidas.section";
import WhatsappIcon from "./components/items/whatsapp.icon";
function App() {
  return (
    <div>
    <HeaderSection/>
    <CategoriesContainer/>
    <GourmetSection/>
    <PrensadosSection/>
    <PorcoesSection/>
    <PizzasSection/>
    <EsfihasSection/>
    <BebidasSection/>
    <WhatsappIcon/>
    </div>
  );
}

export default App;
