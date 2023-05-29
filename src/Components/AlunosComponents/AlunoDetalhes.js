import styled from "styled-components"
import HeaderEditar from "../FixedComponents/HeaderEditar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import dayjs from "dayjs"

export default function AlunoDetalhe({el}) {
    const [details, setDetails] = useState()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://drovemapi.onrender.com/alunos/aluno/${id}`)
        .then(res=> setDetails(res.data))
    }, [])

    function show() {
        console.log(details)
        console.log(details.length)
    }

    return (
        <AlunoDetalheContainer>
            <HeaderEditar voltar="/alunos"/>
            <DetalhesContainer>
                <h1>Registro de Estudante</h1>
                <span onClick={show}>{details && details[0].foto}</span>
                <DetalhesDadosAluno>
                    <p>{details && details[0].nome}</p>
                    <p>CPF: {details && details[0].cpf}</p>
                    <p>E-mail: {details && details[0].email}</p>
                    <p>Turmas:</p>
                </DetalhesDadosAluno>
                {details && details.map(el=>
                <DetalheTurmaContainer key={el.id}>
                    <h2>Turma {el.nomenclatura}</h2>
                    <p>Data de ingresso: {dayjs(el.dataInicio).format('YYYY/MM/DD')}</p>
                    <p>Data de saída: {el.dataFim ? dayjs(el.dataFim).format('YYYY/MM/DD') : "-"}</p>
                </DetalheTurmaContainer>)}
            </DetalhesContainer>
        </AlunoDetalheContainer>
    )

}

const AlunoDetalheContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const DetalhesContainer = styled.div`
    width: 50%;
    height: calc(100vh - 75px);
    position: fixed;
    top: 75px;
    left: 25vw;
    background-color: green;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1 { 
        height: 10%;
        font-size: 70px;
        margin: 20px 0;
    }

    span {
        width: 165px;
        height: 165px;
        border-radius: 50%;
        border: solid 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
    }
`

const DetalhesDadosAluno = styled.div`
    height: 25%;
    margin: 30px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const DetalheTurmaContainer = styled.div`
    width: 55%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    margin: 5px 0;
`