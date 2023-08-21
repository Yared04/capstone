import "./App.css";
import { CardContainer } from "./components/CardContainer";
import Herosection from "./components/Herosection";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Herosection />
      <CardContainer />
    </div>
  );
}

export default App;
