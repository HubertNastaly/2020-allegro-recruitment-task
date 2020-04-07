import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Card, 
          CardContent, 
          CardMedia, 
          Typography,
          LinearProgress } from '@material-ui/core';
import {  IoIosBug, IoIosCloudyNight, IoIosContrast, IoIosFlame, 
          IoIosFlash, IoIosFlask, IoIosPaw, IoIosSettings, IoIosWater,
          IoMdSnow } from "react-icons/io";
import {  FaGhost, FaDragon, FaFeather, FaFistRaised, FaFrog, FaHatWizard,
          FaMountain, FaQuestion, FaSeedling, FaBrain } from "react-icons/fa";

const styles = {
  cardColumn:{
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: 128
  },
  lastRow:{
    flexGrow: 1,
    padding: 0
  },
  media:{
    flex: '1'
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
  }
}

// const IconType = (props) => {

// }

const Types = {
  "normal": <FaFrog title="Normal"></FaFrog>,
  "fire": <IoIosFlame title="Fire"></IoIosFlame>,
  "fighting": <FaFistRaised title="Fighting"></FaFistRaised>,
  "flying": <FaFeather title="Flying"></FaFeather>,
  "posion": <IoIosFlask title="Poison"></IoIosFlask>,
  "gorund": <IoIosPaw title="Ground"></IoIosPaw>,
  "rock": <FaMountain title="Rock"></FaMountain>,
  "bug": <IoIosBug title="Bug"></IoIosBug>,
  "ghost": <FaGhost title="Ghost"></FaGhost>,
  "steel": <IoIosSettings title="Steel"></IoIosSettings>,
  "water": <IoIosWater title="Water"></IoIosWater>,
  "grass": <FaSeedling title="Grass"></FaSeedling>,
  "electric": <IoIosFlash title="Electric"></IoIosFlash>,
  "psychic": <FaBrain title="Psychic"></FaBrain>,
  "ice": <IoMdSnow title="Ice"></IoMdSnow>,
  "dragon": <FaDragon title="Dragon"></FaDragon>,
  "dark": <IoIosCloudyNight title="Dark"></IoIosCloudyNight>,
  "fairy": <FaHatWizard title="Fairy"></FaHatWizard>,
  "unknown": <FaQuestion title="Unknown"></FaQuestion>,
  "shadow": <IoIosContrast title="Shadow"></IoIosContrast>
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
          isLoading: false
        })
      })
      .then(this.setState({isLoading: false}))
  }

  componentDidMount(){
    this.fetchPokemonData()
  }

  render(){
    const { isLoading, name, height, weight, imageUrl, baseExperience, types } = this.state
    return(
      <div>
        {isLoading ? <LinearProgress></LinearProgress> :
        <Card className={this.classes.root}>
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