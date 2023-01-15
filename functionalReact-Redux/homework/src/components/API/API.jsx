import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import logo from '../Home/logo.svg';
import { API_URL_PUBLIC } from './endPoints.js';
import { getAllGists } from '../../middlewares/apiMD.js';
import { Button, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectGists, selectGistsError, selectGistsLoading } from '../../store/Selectors/selectors.js'
import './style.css';



export const API = () => {

  /*const [gists, setGists] = useState([]);
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
  };*/

  const dispatch = useDispatch();

  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  // const gists = useSelector((state) => state.gists.gists);
  // const error = useSelector((state) => state.gists.error);
  // const loading = useSelector((state) => state.gists.loading);
  console.log(loading)



  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);
  const renderGist = (gist) => <li key={gist.id}>{gist.description}</li>;
  // console.log(renderGist);

  if (loading) {
    return <CircularProgress className='spinner' />;
  }

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


  let pageTitle = 'API';


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

