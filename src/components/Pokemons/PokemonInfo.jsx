import { PureComponent } from "react";
import { Card } from "./Pokemon.styled";

export class PokemonInfo extends PureComponent{
    state={
        pokemon:'',
        error:null,
        status:'idle'
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.name!==this.props.name){
                this.setState({status:'pending', pokemon:null})
                    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
                    .then(res=>{
                        if(!res.ok){
                            return Promise.reject(new Error(`Покемона з іменем ${this.props.name} не знайдено`))
                        }
                        return res.json()})
                    .then(pokemon=>{this.setState({pokemon:pokemon, status:'resolved'})})
                    .catch(err=>this.setState({error:err, status:'rejected'}))
                }
  }
    render(){
        const {pokemon, status, error}=this.state
                if(status==='idle'){return <p>Введіть ім'я покемона</p>}
                if(status==='pending'){return <p>Loading...</p>}
                if(status==='rejected'){return <div>{error.message}</div>}
                if(status==='resolved'){
                    return <Card>
                                <h2>{pokemon.name.toUpperCase()}</h2>
                                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                            </Card>
                }
    }
}