console.log('hi there');
fetch('http://localhost:3000/api')
.then(r => r.json())
.then(r => console.log(r));