import "./App.css";
import Sections from "./components/sections/sections.component";
import Item from "./components/items/items.component";
import Sub_Section from "./components/sections/sub_sections.component";
import GourmetSection from "./components/sections/gourmet.section";
import PrensadosSection from "./components/sections/prensados.section";
function App() {
  return (
    <div>
    <GourmetSection/>
    <PrensadosSection/>
    </div>
  );
}

export default App;
