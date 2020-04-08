import React from 'react';
import PokemonCard from './PokemonCard';
import { Grid, LinearProgress } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root:{
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  pagination:{
    marginTop: 30,
    marginBottom: 30
  }
}

class CardList extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.state = {
      page: 1,
      pages: null,
      width: props.width,
      pokemonsList: [],
      isLoading: true
    }
  }
  fetchPokemons(){
    const limit = 20
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
          const pages = Math.ceil(data.count / limit)
          this.setState({
            pages: pages,
            pokemonsList: data.results, 
            isLoading: false
            })
      })
  }
  componentDidMount(){
    this.fetchPokemons();
  }
  render(){
    const { isLoading, pokemonsList, pages, page }  = this.state
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
          <div className={this.classes.root}>
            <Grid container spacing={2}>
              {
                pokemonsList.map(pokemon => {
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemon.url}>
                      <PokemonCard pokemonUrl={pokemon.url}></PokemonCard>
                    </Grid>
                  )
                })
              }
            </Grid>
            <Pagination className={this.classes.pagination} 
                        count={pages} 
                        page={page}
                        siblingCount={0}></Pagination>
          </div>
        }
      </div>
    )
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(CardList));
