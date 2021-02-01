import React, { useEffect, useState } from "react";

const App = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    }) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      // hacemos la petición get
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJoke(res.joke);
      }); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  return (
    <div>
        <h3>¿Preparado para reir?</h3>
        <p>{joke}</p>
        <button>Ves al siguiente chiste</button>
    </div>
);
};
export default App;

/* 
export default () => {
    return 
}; */

/* 
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://icanhazdadjoke.com',
  headers: { 
    'Accept': 'application/json', 
    'Cookie': '__cfduid=d8e85047d95e7244efe8ef79a220984411611706678'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 */
