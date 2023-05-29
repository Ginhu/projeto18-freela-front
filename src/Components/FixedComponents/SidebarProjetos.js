import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function SidebarProjetos ({projetoInicial, turmaInicial, setTurmaInicial, setProjetoInicial}) {
    const [turmas, setTurmas] = useState()
    const [projetos, setProjetos] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:5000/projetos`)
        .then(res=>{
            setProjetos(res.data)
            axios.get(`http://localhost:5000/turmas`)
            .then(res=>{
                setTurmas(res.data)
            })
            .catch(err=>console.log(err.response.data))
        })
        .catch(err=>console.log(err.response.data))
    },[])

    function setTurma (id) {
        setTurmaInicial(id)
    }

    function setProjeto (id) {
        setProjetoInicial(id)
    }

    return (
        <SidebarDiv>
            <div>
                {turmas && turmas.map(el=> <p key={el.id} onClick={()=>setTurma(el.id)}>{el.nomenclatura}</p>)}
                <p>...</p>
            </div>

            <div>
                {projetos && projetos.map(el=> <p key={el.id} onClick={()=>setProjeto(el.id)}>{el.titulo}</p>)}
                <p>...</p>
            </div>
            
        </SidebarDiv>

        
    )
}

const SidebarDiv = styled.div`
    width: 15vw;
    height: calc(100vh - 75px);
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 75px;
    left: 0;
    padding-top: 50px;

    div {
        margin-bottom: 75px;
    }

    p {
        margin: 7px 0;
        font-size: 25px;
    }

`