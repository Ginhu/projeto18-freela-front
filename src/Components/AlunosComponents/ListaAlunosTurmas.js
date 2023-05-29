import styled from "styled-components"
import Header from "../FixedComponents/Header"
import SidebarAlunos from "../FixedComponents/SideBarAlunos"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"


export default function AlunosPorTurma ({turmas, turmaInicial, setTurmaInicial, infoTurma, setInfoTurma}) {
    let navigate = useNavigate()
    

    useEffect(()=>{
        axios.get(`https://drovemapi.onrender.com/alunos/turma/${turmaInicial}`)
        .then(res=>{
            setInfoTurma(res.data)
        })
        .catch(err => console.log(err.response.data))       
    }, [turmaInicial])

    function goDetails(id) {
        navigate(`/alunos/${id}`)
    }

    function show(el) {
        console.log(el)        
    }
     
    return (
        <AlunosContainer>
            <Header/>
            <SidebarAlunos turmas={turmas} setTurmaInicial={setTurmaInicial}/>
            <ListaContainer>

                {infoTurma && infoTurma.map((el)=>
                    <AlunoDetailDiv key={el.id} el={el} onClick={()=>goDetails(el.idAluno)}>                                   
                        <span>{el.foto}</span>
                        <p>{el.nome}</p>
                    </AlunoDetailDiv>)}

            </ListaContainer>
        </AlunosContainer>
    )
}

const AlunosContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ListaContainer = styled.div`
    width: 85vw;
    height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 75px; 
    left: 15vw;
    background-color: #cccccc;

`

const AlunoDetailDiv = styled.div`
    width: 75%;
    height: 50px;
    background-color: grey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    margin: 8px 0;

    span {
        margin: 0 20px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: solid 1px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        margin-left: 45px;
        font-size: 25px;
    }
`