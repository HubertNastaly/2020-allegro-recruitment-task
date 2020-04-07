import React from 'react';
import PokemonCard from './PokemonCard';
import { Grid } from '@material-ui/core';


export default class CardList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      pokemonsList: [],
      isLoading: true
    }
  }
  fetchPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
          this.setState({pokemonsList: data.results, isLoading: false})
      })
  }
  componentDidMount(){
    this.fetchPokemons();
  }
  render(){
    const { isLoading, pokemonsList }  = this.state
    return(
      <div>
        {isLoading ? "..." :
          <Grid container spacing={2}>
            {
              pokemonsList.map(pokemon => {
                return(
                  <Grid item xs={4} key={pokemon.url}>
                    <PokemonCard pokemonUrl={pokemon.url}></PokemonCard>
                  </Grid>
                )
              })
            }
          </Grid>
        }
      </div>
    )
  }
}