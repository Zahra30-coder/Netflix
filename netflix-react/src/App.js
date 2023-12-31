import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./R";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      {/*Nav*/}
      {/*Banner*/}
      <h1>Hey, Clever Programmer</h1>
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals}/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
