import styled from "styled-components"
import HeaderVoltar from "../FixedComponents/HeaderVoltar"
import SidebarProjetos from "../FixedComponents/SidebarProjetos"
import Icon from "../../Assets/icon.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { isDisabled } from "@testing-library/user-event/dist/utils"

export default function ProjetosPorTurmas ({turmaInicial, projetoInicial, setTurmaInicial, setProjetoInicial}) {
    
    const [projetos, setProjetos] = useState()
    const [modal, setModal] = useState(false)
    let idProjeto
    const [idProj, setIdProj] = useState()
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/projetos/${turmaInicial}/${projetoInicial}`)
        .then(res=>{
            setProjetos(res.data)
        })
        .catch(err=>console.log(err.response.data))
    }, [turmaInicial, projetoInicial, modal])

    function show(id) {
        setModal(true)
        setIdProj(id)
    }

    function escolhernota(idNota) {
        const body = {id: idProj, idNota: idNota}
        axios.put("http://localhost:5000/projetos", body)
        .then(res=>{
            alert('Nota atualizada')
            setModal(false)
        })
        .catch(res=>console.log(res.response.data))
    }


    return (
        <ProjetosContainer>
            <HeaderVoltar/>
            <SidebarProjetos turmaInicial={turmaInicial} projetoInicial={projetoInicial} setTurmaInicial={setTurmaInicial} setProjetoInicial={setProjetoInicial}/>

            <ListaContainer>
                {projetos && projetos.map(el=> 
                <ProjetosDetailDiv key={el.id} onClick={el.nota === "Sem Nota" ? ()=>show(el.id) : isDisabled}>
                    <AlunoDetailsDiv>
                        <span>{el.foto}</span>
                        <p>{el.nome}</p>
                    </AlunoDetailsDiv>
                    <NotaDiv>
                        <p>{el.nota}</p>
                        <img src={Icon} /* nota={el.nota === "Sem Nota" && "ok"} *//>
                    </NotaDiv>
                </ProjetosDetailDiv>)}
            </ListaContainer>
            <ModalDiv modal={modal}>
                <h1>Escolha a nota</h1>
                <NovaNotaDiv onClick={()=>escolhernota(1)}>Abaixo das Expectativas</NovaNotaDiv>
                <NovaNotaDiv onClick={()=>escolhernota(2)}>Dentro das Expectativas</NovaNotaDiv>
                <NovaNotaDiv onClick={()=>escolhernota(3)}>Acima das Expectativas</NovaNotaDiv>

            </ModalDiv>
        </ProjetosContainer>
    )
}

const ProjetosContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const ProjetosDetailDiv = styled.div`
    width: 75%;
    height: 50px;
    background-color: grey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    margin: 8px 0;

    
`

const AlunoDetailsDiv = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;

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

const NotaDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 25px;

    img {
        width: 30px;
        height: 30px;
        margin: 0 10px;
        /* visibility: ${props=>props.nota === "ok" ? "visible" : "hidden"}; */
    }
`

const ModalDiv = styled.div`
    width: 50%;
    height: 40vh;
    position: fixed;
    top: 30vh;
    left: 25vw;
    background-color: #ffffff;
    display: ${props=>props.modal ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h1 {
        font-size: 25px;
        margin: 15px 0;
    }
`

const NovaNotaDiv = styled.div`
    width: 80%;
    height: 40px;
    background-color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-size: 20px;
`