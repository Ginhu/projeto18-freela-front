import styled from "styled-components"

export default function Header () {
    return (
        <HeaderDiv>
            <a>Drovem</a>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: goldenrod;

    a{
        font-size: 50px;
    }
`