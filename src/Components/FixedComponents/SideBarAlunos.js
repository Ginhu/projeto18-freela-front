import styled from "styled-components"

export default function SidebarAlunos ({turmas, setTurmaInicial}) {

    function clickTurmas (id) {
        setTurmaInicial(id)
    }
    return (
        <SidebarDiv>
            {turmas && turmas.map((el)=><p key={el.id} onClick={()=>clickTurmas(el.id)}>{el.nomenclatura}</p>)}
            <p>...</p>
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

    p {
        margin: 7px 0;
        font-size: 25px;
    }

`