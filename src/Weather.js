import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (_) => {
  const [tiempo, setTiempo] = useState([]);
  const [icon, setIcon] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=sp&APPID=3b03b886c6752c35daf31a38d7a51f70`)
      .then((res) => {
        setTiempo(res.data.weather[0].description);
        setIcon(res.data.weather[0].icon);
        console.log(res.data.weather);
      })
  }, []);
  let iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  return <div>{tiempo},
  <img src={iconurl} /></div>;
};
export { Weather };