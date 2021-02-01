import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [joke, setJoke] = useState([]);
  const [counter, setCounter] = useState(0);

    const clickHandler=()=>{    //Funcion para cambiar valor estado y entonces cuenta otro chiste        
        setCounter(counter+1)
    }

  useEffect(() => {
    axios
      .get(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setJoke(res.data.joke);
      })
  }, [counter]); //al variar valor estado 'contar' se actualiza la petición de nuevo chiste

  return (
    <div>
        <h3>Jokes for everybody!</h3>
        <p>{joke}</p>
        <button onClick={clickHandler}>Next Joke!</button>
    </div>
);
};
export default App;