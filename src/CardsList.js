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
    alignItems: 'center'
  },
}

class CardList extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.pokemonDetails = []
    this.state = {
      selectedTypes: new Set(),
      currentPage: 1,
      pages: 0,
      width: props.width,
      isLoading: true
    }
    this.fetchPokemons = this.fetchPokemons.bind(this)
    this.fetchPokemonDetails = this.fetchPokemonDetails.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.updateTypes = this.updateTypes.bind(this)
  }
  componentDidMount(){
    this.fetchPokemons(this.state.currentPage);
  }
  fetchPokemons(page){
    const limit = 20
    const offset = (page - 1) * limit
    this.pokemonDetails = []
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
          const pages = Math.ceil(data.count / limit)
          Promise.all(data.results.map(pokemon => this.fetchPokemonDetails(pokemon.name, pokemon.url)))
            .then(() => {
              this.setState({
              pages: pages,
              currentPage: page,
              isLoading: false
              })
            })
      })
  }
  fetchPokemonDetails(pokemonName,pokemonUrl){
    return fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        const types = data.types.map(elem => elem.type.name)
        const parameters = {
          name: name,
          types: types,
          height: data.height,
          weight: data.weight,
          baseExperience: data.base_experience
        }
        this.pokemonDetails.push(parameters)
      })
  }
  createCard(parameters){
    const imageUrl = "https://cdn.images.express.co.uk/img/dynamic/143/590x/Pokemon-Sword-and-Shield-celebration-1230942.webp?r=1579540256528"
    return(
      <PokemonCard  name={parameters.name} 
                    types={parameters.types} 
                    height={parameters.height} 
                    weight={parameters.weight} 
                    baseExperience={parameters.baseExperience} 
                    imageUrl={imageUrl}></PokemonCard>
    )
  }
  displayFilteredPokemons(){
    return(
      <Grid container spacing={2}>{
        this.pokemonDetails.map(pokemon => {
          return(((this.state.selectedTypes.size === 0) || (pokemon.types.filter(type => this.state.selectedTypes.has(type)).length > 0)) &&  
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemon.name}>
              {this.createCard(pokemon)}
            </Grid>)
        })
      }
      </Grid>
    )
  }
  updateTypes(event){
    const checked = event.target.checked
    const name = event.target.name
    if(checked){
      this.setState(prevState => {
        const newSet = new Set(prevState.selectedTypes)
        newSet.add(name)
        return({
          selectedTypes: newSet
        })
      })
    }
    else{
      this.setState(prevState => {
        const newSet = new Set(prevState.selectedTypes)
        newSet.delete(name)
        return({
          selectedTypes: newSet
        })
      })
    }
  }
  handlePageClick(event, value){
    event.preventDefault()
    if(value === this.state.currentPage)
    {
      return
    }
    this.setState({
      isLoading: true
    }, this.fetchPokemons(value))
  }
  render(){
    const { isLoading, pages, currentPage } = this.state
    console.log(this.state.selectedTypes)
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
          <div className={this.classes.root}>
            <FiltersPaper updateTypes={this.updateTypes}></FiltersPaper>
            {this.displayFilteredPokemons()}
            <Pagination className={this.classes.pagination} 
                        count={pages} 
                        page={currentPage}
                        siblingCount={1}
                        hideNextButton={true}
                        hidePrevButton={true}
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
