import styled from "styled-components"

export default function Home() {
    return (
        <HomeContainer>
            <H1Container><h1>DROVEM</h1></H1Container>    
            <LinksContainer>
                <a>Cadastro de Alunos</a>
                <a>Projetos</a>
                <a>Entrega de Projetos</a>
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
    }
`