import React from 'react';

import {  IoIosBug, IoIosCloudyNight, IoIosContrast, IoIosFlame, 
  IoIosFlash, IoIosFlask, IoIosPaw, IoIosSettings, IoIosWater,
  IoMdSnow } from "react-icons/io";
import {  FaGhost, FaDragon, FaFeather, FaFistRaised, FaFrog, FaHatWizard,
  FaMountain, FaQuestion, FaSeedling, FaBrain } from "react-icons/fa";

export const Types = {
  "normal": <FaFrog title="Normal"></FaFrog>,
  "fire": <IoIosFlame title="Fire"></IoIosFlame>,
  "fighting": <FaFistRaised title="Fighting"></FaFistRaised>,
  "flying": <FaFeather title="Flying"></FaFeather>,
  "poison": <IoIosFlask title="Poison"></IoIosFlask>,
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