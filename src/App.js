import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CadastroAluno from "./Components/AlunosComponents/CadastroNovoAluno";
import AlunosPorTurma from "./Components/AlunosComponents/ListaAlunosTurmas";
import AlunoDetalhe from "./Components/AlunosComponents/AlunoDetalhes";
import ProjetosPorTurmas from "./Components/ProjetosComponents/ProjetosPorTurma";
import ProjetosEntrega from "./Components/ProjetosComponents/ProjetosEntrega";
import { useState } from "react"



function App() {
  const [turmas, setTurmas] = useState()
  const [turmaInicial, setTurmaInicial] = useState(1)
  const [projetoInicial, setProjetoInicial] = useState(1)
  const [infoTurma, setInfoTurma] = useState()
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home setTurmas={setTurmas} turmaInicial={turmaInicial} setInfoTurma={setInfoTurma}/>}/>
      <Route path="/cadastro" element={<CadastroAluno/>}/>
      <Route path="/alunos" element={<AlunosPorTurma turmas={turmas} turmaInicial={turmaInicial}  setTurmaInicial={setTurmaInicial}
      infoTurma={infoTurma} setInfoTurma={setInfoTurma}/>}/>
      <Route path="/alunos/:id" element={<AlunoDetalhe/>}/>
      <Route path="/projetos" element={<ProjetosPorTurmas turmaInicial={turmaInicial} setTurmaInicial={setTurmaInicial} 
      projetoInicial={projetoInicial} setProjetoInicial={setProjetoInicial}/>}/>
      <Route path="/projetos/entrega" element={<ProjetosEntrega turmas={turmas}/>}/>

    </Routes>
  </BrowserRouter>
)
}

export default App;
