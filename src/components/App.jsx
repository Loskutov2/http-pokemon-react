import { PureComponent } from "react";
import { Global } from '../Global.styled'
import { ToastContainer } from "react-toastify";
import { PokemonForm } from "./Pokemons/PokemonForm";
import { PokemonInfo } from "./Pokemons/PokemonInfo";

export class App extends PureComponent{
  state={
    pokemon:''
  }
  
  onNameChange=(name)=>{
    this.setState({
      pokemon:name
    })  
  }
  render(){
    return(
      <>
      <PokemonForm onNameChange={this.onNameChange}/>
      <PokemonInfo name={this.state.pokemon}/>
      </>
    )
  }
}
