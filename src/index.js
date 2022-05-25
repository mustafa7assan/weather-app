'use strict';

import './assets/css/style.css';
import img from './assets/img/1.jpg';
import { getWeatherFor } from './modules/weather';

const weatherImage = document.querySelector('.weather__image');
weatherImage.src = img;
getWeatherFor('Khartoum');
