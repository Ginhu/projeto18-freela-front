import styled from "styled-components";
import Header from "../FixedComponents/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CadastroAluno () {

    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [turma, setTurma] = useState()
    const [selectedTurma, setSelectedTurma] = useState("Escolha a turma")

    useEffect(()=>{
        axios.get("http://localhost:5000/turmas")
        .then(res=> setTurma(res.data))
    })

    function submit() {
        if(!nome || !cpf || !email || !foto || selectedTurma === "Escolha a turma") return alert('Todos os campos são obrigatórios')
        const body = {nome: nome, cpf: cpf, email: email, foto: foto, idTurma: selectedTurma}

        axios.post("http://localhost:5000/alunos", body)
        .then(res=>{
            setNome("")
            setCpf("")
            setEmail("")
            setFoto("")
            setSelectedTurma("Escolha a turma")
        })
        .catch(err=>console.log(err.response.data))
        
    }

    return (
        
        <CadastroContainer>
            <Header/>
            <h1>Cadastro de Alunos</h1>
            <CamposDiv>
                <InputLabelDiv>
                    <div><p>Nome:</p></div>
                    <div><input value={nome} onChange={e=>setNome(e.target.value)}></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Email:</p></div>
                    <div><input value={email} onChange={e=>setEmail(e.target.value)}></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>CPF:</p></div>
                    <div><input value={cpf} onChange={e=>setCpf(e.target.value)}></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Foto:</p></div>
                    <div><input value={foto} onChange={e=>setFoto(e.target.value)}></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Turma:</p></div>
                    <div>
                        <select value={selectedTurma} onChange={e=>setSelectedTurma(e.target.value)}>
                            <option>Escolha a turma</option>
                            {turma && turma.map(el=><option key={el.id} value={el.id}>{el.nomenclatura}</option>)}
                        </select>
                    </div>
                </InputLabelDiv>
                <button onClick={submit}>Cadastrar</button>
            </CamposDiv>
            
        </CadastroContainer>
    )
}

const CadastroContainer = styled.div`
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