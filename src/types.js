import React from 'react';

import {  IoIosBug, IoIosCloudyNight, IoIosContrast, IoIosFlame, 
  IoIosFlash, IoIosFlask, IoIosPaw, IoIosSettings, IoIosWater,
  IoMdSnow } from "react-icons/io";
import {  FaGhost, FaDragon, FaFeather, FaFistRaised, FaFrog, FaHatWizard,
  FaMountain, FaQuestion, FaSeedling, FaBrain } from "react-icons/fa";

export const Types = {
  "normal": <FaFrog title="Normal" key="normal"></FaFrog>,
  "fire": <IoIosFlame title="Fire" key="fire"></IoIosFlame>,
  "fighting": <FaFistRaised title="Fighting" key="fighting"></FaFistRaised>,
  "flying": <FaFeather title="Flying" key="flying"></FaFeather>,
  "poison": <IoIosFlask title="Poison" key="poison"></IoIosFlask>,
  "ground": <IoIosPaw title="Ground" key="ground"></IoIosPaw>,
  "rock": <FaMountain title="Rock" key="rock"></FaMountain>,
  "bug": <IoIosBug title="Bug" key="bug"></IoIosBug>,
  "ghost": <FaGhost title="Ghost" key="ghost"></FaGhost>,
  "steel": <IoIosSettings title="Steel" key="steel"></IoIosSettings>,
  "water": <IoIosWater title="Water" key="water"></IoIosWater>,
  "grass": <FaSeedling title="Grass" key="grass"></FaSeedling>,
  "electric": <IoIosFlash title="Electric" key="electric"></IoIosFlash>,
  "psychic": <FaBrain title="Psychic" key="psychic"></FaBrain>,
  "ice": <IoMdSnow title="Ice" key="ice"></IoMdSnow>,
  "dragon": <FaDragon title="Dragon" key="dragon"></FaDragon>,
  "dark": <IoIosCloudyNight title="Dark" key="dark"></IoIosCloudyNight>,
  "fairy": <FaHatWizard title="Fairy" key="fairy"></FaHatWizard>,
  "unknown": <FaQuestion title="Unknown" key="unknown"></FaQuestion>,
  "shadow": <IoIosContrast title="Shadow" key="shadow"></IoIosContrast>
}