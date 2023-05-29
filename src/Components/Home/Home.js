import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"

export default function Home({setTurmas, setInfoTurma, turmaInicial}) {

    useEffect(()=>{
        axios.get("http://localhost:5000/turmas")
        .then(res=>setTurmas(res.data))
        .catch(err=>console.log(err.response.data))
        axios.get(`http://localhost:5000/alunos/turma/${turmaInicial}`)
        .then(res=>{
            setInfoTurma(res.data)
        })
        .catch(err => console.log(err.response.data))    
    })

    return (
        <HomeContainer>
            <H1Container><h1>DROVEM</h1></H1Container>    
            <LinksContainer>
                <Link to="/cadastro"><p>Cadastro de Alunos</p></Link>
                <Link to="/alunos"><p>Alunos</p></Link>
                <Link to="/projetos"><p>Projetos</p></Link>
                <Link to="/projetos/entrega"><p>Entrega de Projetos</p></Link>                
            </LinksContainer>    
        
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`

const H1Container = styled.div`
    width: 50%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;

    h1 {
        font-size: 55px;
        color: greenyellow;
    }
`

const LinksContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    margin-top: 150px;

    a {
        width: 70%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        margin: 25px 0;
        background-color: grey;
        text-decoration: none;
    }
`