import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json';
import WebpackLogo from './assets/webpack-logo';
import xml from '@/assets/data.xml';
import csv from './assets/data.csv';


const post = new Post('Webpack Post Title', WebpackLogo);

console.log('POst to string: ', post.toString());

// удивительно но webpack  в консоль выведет уже объект распарсенный а
// не json  - webpack автоматически превращает json --> js
console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);


