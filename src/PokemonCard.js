import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Card, 
          CardContent, 
          CardMedia, 
          Typography,
          LinearProgress } from '@material-ui/core';
import { Types } from './types'

const styles = {
  cardColumn:{
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: 128,
    '&:last-child': {
      paddingBottom: 10,
    }
  },
  lastRow:{
    flexGrow: 1,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  media:{
    flex: 1
  },
  name:{
    fontWeight: 'bold'
  },
  parameter:{
    fontSize: 11
  },
  root:{
    display: 'flex',
    flexDirection: 'row',
    height: 144,
  },
}

// const IconType = (props) => {

// }

//add keys!


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
      baseExperience: null,
      imageUrl: "https://www.focus.pl/uploads/media/default/0001/30/b93bfc47ea2848d3cbdc6777a19de3116cf91e43.jpeg",
      types: []
    }
  }

  fetchPokemonData(){
    fetch(this.pokemonUrl)
      .then(response => response.json())
      .then(data => {
        const nameToSet = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        const typesToSet = data.types.map(elem => elem.type.name)
        this.setState({
          name: nameToSet,
          height: data.height,
          weight: data.weight,
          baseExperience: data.base_experience,
          types: typesToSet,
          isLoading: false,
          raised: false
        })
      })
      .then(this.setState({isLoading: false}))
  }

  onMouseOver = () => this.setState({ raised: true});
  onMouseOut = () => this.setState({ raised: false});

  componentDidMount(){
    this.fetchPokemonData()
  }

  render(){
    const { isLoading, name, height, weight, imageUrl, baseExperience, types } = this.state
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
        <Card className={this.classes.root}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              raised={this.state.raised}>
          <CardMedia className={this.classes.media} image={imageUrl}></CardMedia>
          <CardContent className={this.classes.cardColumn}>
            <Typography className={this.classes.name}>{name}</Typography>
            <Typography className={this.classes.parameter}>Height: {height}</Typography>
            <Typography className={this.classes.parameter}>Weight: {weight}</Typography>
            <Typography className={this.classes.parameter}>Base experience: {baseExperience}</Typography>
            <div className={this.classes.lastRow}>
              {types.map(type => {
                return (Types[type])
              })}
            </div>
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