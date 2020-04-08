import React from 'react';
import PokemonCard from './PokemonCard';
import FiltersPaper from './FiltersPaper';
import { Grid, LinearProgress } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  pagination:{
    marginTop: 30,
    marginBottom: 30
  },
  root:{
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
}

class CardList extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.state = {
      currentPage: 1,
      pages: 0,
      width: props.width,
      pokemonsList: [],
      selectedTypes: [],
      isLoading: true
    }
    this.fetchPokemons = this.fetchPokemons.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }
  componentDidMount(){
    this.fetchPokemons(this.state.currentPage);
  }
  fetchPokemons(page){
    const limit = 20
    const offset = (page - 1) * limit
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
          const pages = Math.ceil(data.count / limit)
          this.setState({
            currentPage: page,
            pages: pages,
            pokemonsList: data.results, 
            isLoading: false
            })
      })
  }
  updateTypes(types){
    this.setState({
      selectedTypes: types
    })
  }
  handlePageClick(event, value){
    event.preventDefault()
    console.log(value)
    if(value === this.state.currentPage)
    {
      return
    }
    this.setState({
      isLoading: true
    }, this.fetchPokemons(value))
  }
  render(){
    const { isLoading, pokemonsList, pages, currentPage }  = this.state
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
          <div className={this.classes.root}>
            <FiltersPaper></FiltersPaper>
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
                        page={currentPage}
                        siblingCount={1}
                        onChange={this.handlePageClick}>
            </Pagination>
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
