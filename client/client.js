import { LoadCss } from './load-css';



window.onload = () => {
    LoadCss('http://localhost:3000/static/style.css');

    fetch('http://localhost:3000/api')
        .then(r => r.json())
        .then(r => console.log(r));
};