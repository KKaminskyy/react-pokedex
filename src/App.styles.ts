import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;

`

export const Header = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    background: #c42129;
    border-radius: 15px 15px 0px 0px;

    h1 {
        text-align: center;
        color: #fff
    }
`

export const inputBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 30px;
    border-radius: 8px;
    overflow: hidden;
    

    img{
        height: 30px;
        width: 30px;
        background-color: #f4f4f4;
    }

    :hover{
        width: 250px;
        transition: all ease .2s;
    }
`



export const Main = styled.main `
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    background: #343434;
    padding-top: 50px;
`
