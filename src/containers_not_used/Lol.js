import React from 'react';
import {createStore} from 'redux';

export default function App() {

export const Store = React.createContext();

const initialState = {}

function reducer() {}
    
const Store = createStore();

  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async () => {
    const data = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    );
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      {console.log(state)}
      <div className='header'>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
      <section className='episode-layout'>
        {state.episodes.map(episode => {
          return (
            <section key={episode.id} className='episode-box'>
              <img
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}