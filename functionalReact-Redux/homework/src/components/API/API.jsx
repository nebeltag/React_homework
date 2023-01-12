import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import logo from '../Home/logo.svg';
import { API_URL_PUBLIC } from './endPoints.js'
import { Button } from '@mui/material';
import './style.css';



export const API = () => {

  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const requestGists = () => {
    setError(false);
    fetch(API_URL_PUBLIC)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((result) => setGists(result))
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  useEffect(() => {
    requestGists();
  }, []);
  const renderGist = (gist) => <li key={gist.id}>{gist.description}</li>;
  // console.log(renderGist);

  if (error) {
    return (
      <div className='errorBox'>
        <h3>Error</h3>
        <Button type="button"
          variant="contained"
          onClick={requestGists}
          style={{
            margin: '0 0 25px 0', width: '219px', fontSize: '18px',
            fontWeight: '700'
          }}
        >
          Retry
        </Button>

      </div>
    );
  }


  let pageTitle = 'API'

  return (
    <div>


      <Header pageTitle={pageTitle} />

      <div className="apiMain">
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>


        <div >
          {/* if (error) {
          return (
            <>
              <h3>Error</h3>
              <button onClick={requestGists}>Retry</button>
            </>
          );
        } */}
          <ul className='apiList'>{gists.map(renderGist)}</ul>
        </div>
      </div>
    </div>
  )
};

