import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from'./Moviecard';
import movies from '../reducers';
class App extends React.Component {
  componentDidMount(){
   // make an api call
   // dispatch action
   this.props.store.dispatch({
     type:'ADD_MOVIES',
     movies: data
   });
   console.log('STATE' ,this.props.store.getState());
  }
  render(){
  const movies= this.props.store.getState(); // using getState we cam get state in store//
  return (
    <div className="App">
    <Navbar/>
    <div class="main">
    <div class="tabs">
     <div className="tab">Movies</div>
     <div className="tab">Favourites</div>

    </div>
      <div className="list">
        {movies.map((movie,index)=>(
          <Moviecard movie={movie} key={`movies-${index}`}/>//to make uniq key prop //
        ))}

      </div>

    </div>
    </div>
  );
        }
}

export default App;
