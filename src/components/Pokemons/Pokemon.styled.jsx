import styled from "styled-components";

export const Search = styled.input`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    &:focus{
        outline: none;
    }
`
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
`
export const SearchBtn = styled.button`
    padding: 0;
    background: none;
    border: none;
    height: 40px;
`
export const Card = styled.div`
    text-align: center;
    width: min-content;
    background: #ffffff;
    border-radius: 30px;
    margin-top: 20px;
    font-size: 32px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 8px 10px 20px;
`