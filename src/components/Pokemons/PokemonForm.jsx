import { Search, SearchBtn, SearchForm } from "./Pokemon.styled"
import { IoSearchCircle } from 'react-icons/io5'

export const PokemonForm=({onNameChange})=>{
    return(
        <SearchForm onSubmit={(e)=>{
            e.preventDefault()
            onNameChange(e.currentTarget.elements.input.value)
            e.currentTarget.reset()
        }}>
            <Search type="text" name="input"></Search>
            <SearchBtn type="submit"><IoSearchCircle size='40px'/></SearchBtn>
        </SearchForm>
    )
}