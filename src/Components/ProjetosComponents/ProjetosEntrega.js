import styled from "styled-components"
import HeaderVoltar from "../FixedComponents/HeaderVoltar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProjetosEntrega({turmas}) {

    const [selectedTurma, setSelectedTurma] = useState(1)
    const [nome, setNome] = useState()
    const [selectedNome, setSelectedNome] = useState()
    const [projeto, setProjeto] = useState()
    const [selectedProjeto, setSelecetdProjeto] = useState()
    const [linkProjeto, setLinkProjeto] = useState("")

    useEffect(()=>{
        axios.get("https://drovemapi.onrender.com/projetos")
        .then(res=>setProjeto(res.data))
        .catch(err=>console.log(err.response.data))

        axios.get(`https://drovemapi.onrender.com/alunos/turma/${selectedTurma}`)
        .then(res=>setNome(res.data))
        .catch(err=>console.log(err.response.data))
    }, [])

    function getNomes () {
        axios.get(`https://drovemapi.onrender.com/alunos/turma/${selectedTurma}`)
        .then(res=>setNome(res.data))
        .catch(err=>console.log(err.response.data))
    }
        
   function submit() {

    if(!selectedTurma || !selectedNome || !selectedProjeto || linkProjeto === "")  {
        setSelectedTurma("")
        setSelectedNome("")
        setSelecetdProjeto("")
        setLinkProjeto("")
        return alert('Todos os campos são obrigatórios')
    }

    const body = {idAluno: selectedNome, idTurma: selectedTurma, idProjeto: selectedProjeto, link: linkProjeto}

    axios.post("https://drovemapi.onrender.com/projetos", body)
    .then(res=> {
        setSelectedTurma("")
        setSelectedNome("")
        setSelecetdProjeto("")
        setLinkProjeto("")
        alert('Projeto entregue. Agora é aguardar a avaliação xD')
    })
    .catch(err=>console.log(err.response.data))
    }

    return (
        <EntregasContainer>
            <HeaderVoltar/>
            <h1>Entrega de Projeto</h1>
            <CamposDiv>
                <InputLabelDiv>
                    <div><p>Turma:</p></div>
                    <div>
                        <select value={selectedTurma} onChange={e=>setSelectedTurma(e.target.value)} onClick={getNomes}>
                            {/* <option value="" disabled selected hidden>Escolha a turma</option> */}
                            {turmas.map(el=><option key={el.id} value={el.id}>{el.nomenclatura}</option>)}
                        </select>
                    </div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Nome:</p></div>
                    <div>
                        <select value={selectedNome} onChange={e=>setSelectedNome(e.target.value)}>
                            <option value="" disabled selected hidden>Escolha seu nome</option>
                            {nome && nome.map(el=><option key={el.idAluno} value={el.idAluno}>{el.nome}</option>)}
                        </select>
                    </div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Projeto:</p></div>
                    <div>
                        <select value={selectedProjeto} onChange={e=>setSelecetdProjeto(e.target.value)}>
                            <option value="" disabled selected hidden>Selecione o Projeto</option>
                            {projeto && projeto.map(el=><option key={el.id} value={el.id}>{el.titulo}</option>)}
                        </select>
                    </div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Link:</p></div>
                    <div><input value={linkProjeto} onChange={e=>setLinkProjeto(e.target.value)}></input></div>
                </InputLabelDiv>
                <button onClick={submit}>Entregar</button>
            </CamposDiv>
        </EntregasContainer>
    )
}

const EntregasContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 40px 0;
        font-size: 45px;
    }
`

const CamposDiv = styled.div`
    width: 75%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: green;
    
    button {
        width: 65%;
        height: 35px;
        margin: 20px 0;
        font-size: 20                                                                                                                                                                                                                           px;
    }
`

const InputLabelDiv = styled.div`
    width: 90%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        font-size: 22px;
    }

    input {
        width: 100%;
        height: 30px;
    }

    select {
        width: 100%;
        height: 30px;
    }
`