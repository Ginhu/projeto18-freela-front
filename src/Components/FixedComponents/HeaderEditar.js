import { Link } from "react-router-dom"
import styled from "styled-components"

export default function HeaderEditar ({voltar}) {
    return (
        <HeaderDiv>
            <Link to="/"><p>Drovem</p></Link>
            <div>
                <p>Editar</p>
                <Link to={voltar}><p>Voltar</p></Link>
            </div>
            
            
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: goldenrod;

    div {
        display: flex;
    }

    p{
        font-size: 50px;
        /* text-decoration: none; */
        margin-right: 35px;
    }

    Link {
        text-decoration: none;
    }
`