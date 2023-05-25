import styled from "styled-components";
import Header from "../FixedComponents/Header";

export default function CadastroAluno () {
    return (
        
        <CadastroContainer>
            <Header/>
            <h1>Cadastro de Alunos</h1>
            <CamposDiv>
                <InputLabelDiv>
                    <div><p>Nome:</p></div>
                    <div><input></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Email:</p></div>
                    <div><input></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>CPF:</p></div>
                    <div><input></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Foto:</p></div>
                    <div><input></input></div>
                </InputLabelDiv>
                <InputLabelDiv>
                    <div><p>Turma:</p></div>
                    <div><input></input></div>
                </InputLabelDiv>
                <button>Cadastrar</button>
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
`

const CamposDiv = styled.div`
    width: 75%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: green;
`

const InputLabelDiv = styled.div`
    width: 90%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    }

    input {
        width: 100%;
    }
`