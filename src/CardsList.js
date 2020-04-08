import React from 'react';
import PokemonCard from './PokemonCard';
import { Grid, LinearProgress } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';


class CardList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      width: props.width,
      pokemonsList: [],
      isLoading: true
    }
  }
  fetchPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
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
    const device = this.state.width > 600 ? this.state.width > 1280 ? 3 : 2 : 1
    console.log(device)
    const itemWidth = 12 / device
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
          <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Grid container spacing={2}>
              {
                pokemonsList.map(pokemon => {
                  return(
                    <Grid item xs={itemWidth} key={pokemon.url}>
                      <PokemonCard pokemonUrl={pokemon.url}></PokemonCard>
                    </Grid>
                  )
                })
              }
            </Grid>
          </div>
        }
      </div>
    )
  }
}

export default withWidth()(CardList);