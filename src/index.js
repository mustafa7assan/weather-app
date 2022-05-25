'use strict';

import './assets/css/style.css';
import img from './assets/img/1.jpg';
import { getWeatherFor } from './modules/weather';

const weatherImage = document.querySelector('.weather__image');
const overlay = document.querySelector('.overlay');
weatherImage.src = img;
overlay.style.backgroundImage = `url('${img}')`;
