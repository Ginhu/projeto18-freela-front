import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CadastroAluno from "./Components/AlunosComponents/CadastroNovoAluno";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<CadastroAluno/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
