import React, { useEffect, Grid } from 'react'
import { Container } from 'react-dom';
import axios from 'axios'
import './App.css';
import timer from './Components/timer'



function Index() {
  return (
    useEffect(async () => {

      const baseURL = `https://api.coindesk.com/v1/bpi/currentprice.json`
      console.log('Enocta')
      await axios(baseURL).then(async data => {
        console.log(data)
      }).catch(err => console.log("Hatanız : ", err));
    }
      , [])
  );
}

export default Index


function App(props) {
    return (
      <Container justify-content="center">
      <Grid item><timer /></Grid> 
      </Container>
    );

}
