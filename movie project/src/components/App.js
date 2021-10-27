import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from'./Moviecard';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div class="main">
    <div class="tabs">
     <div className="tab">Movies</div>
     <div className="tab">Favourites</div>

    </div>
      <div className="list">
        {data.map(movie=>(
          <Moviecard movie={movie}/>
        ))}

      </div>

    </div>
    </div>
  );
}

export default App;
