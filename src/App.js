import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Weather} from "./Weather.js"


const App = () => {
    const [joke, setJoke] = useState([]);
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {    //Funcion para cambiar valor estado y entonces cuenta otro chiste        
        setCounter(counter + 1)
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
            <Container >
            <Row className="justify-content-center">
                    <Col md={4} className="mt-5">
                    <div className="bg-light lead text-uppercase text-center border border-warning">El tiempo en Barcelona :  
                    <Weather/> </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={9} className="mt-5">
                        <Jumbotron className="bg-white text-center">
                            <h6 className="display-4">Jokes for everybody! &#128514;</h6>
                            <p className="lead">{joke}</p>
                            <Button onClick={clickHandler}>Next Joke! </Button>
                        </Jumbotron>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default App;