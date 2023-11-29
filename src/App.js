import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Addmovie from './Components/Addmovie';
import Detail from "./Components/Detail";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative">

      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/addmovie" element={<Addmovie/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
