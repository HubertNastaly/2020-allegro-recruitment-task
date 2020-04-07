import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Card, 
          CardContent, 
          CardMedia, 
          Typography } from '@material-ui/core';

const styles = {
  media:{
    flex: '1'
  },
  root:{
    display: 'flex',
    flexDirection: 'row',
  }
}

class PokemonCard extends React.Component{
  constructor(props){
    super(props)
    this.classes = props.classes
    this.pokemonUrl = props.pokemonUrl
    
    this.state = {
      isLoading: true,
      name: null,
      height: null,
      weight: null,
      imageUrl: "https://www.focus.pl/uploads/media/default/0001/30/b93bfc47ea2848d3cbdc6777a19de3116cf91e43.jpeg",
      types: []
    }
  }

  fetchPokemonData(){
    fetch(this.pokemonUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          weight: data.weight,
          isLoading: false
        })
      })
      .then(this.setState({isLoading: false}))
  }

  componentDidMount(){
    this.fetchPokemonData()
  }

  render(){
    const { isLoading, name, height, weight, imageUrl } = this.state
    return(
      <div>
        {isLoading ? "..." :
        <Card className={this.classes.root}>
          <CardMedia className={this.classes.media} image={imageUrl}></CardMedia>
          <CardContent>
            <Typography>Name: {name}</Typography>
            <Typography>Height: {height}</Typography>
            <Typography>Weight: {weight}</Typography>
          </CardContent>
        </Card>}
      </div>
    )
  }
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonCard);