import { LoadCss } from './load-css';



window.onload = () => {
    LoadCss('http://localhost:3000/static/style.css');

    fetch('http://localhost:3000/api')
        .then(r => r.json())
        .then(r => console.log(r));
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/sw-test/' }).then(function(reg) {
      // регистрация сработала
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // регистрация прошла неудачно
      console.log('Registration failed with ' + error);
    });
  };