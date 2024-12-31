import "./App.css";
import GourmetSection from "./components/sections/gourmet.section";
import PrensadosSection from "./components/sections/prensados.section";
import CategoriesContainer from "./components/sections/categories/categories.container";
function App() {
  return (
    <div>
    <CategoriesContainer/>
    <GourmetSection/>
    <PrensadosSection id="lanchesPrensados"/>
    </div>
  );
}

export default App;
