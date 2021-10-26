
import React,{useState} from 'react';
const App=()=>{
	const [search,setSearch] = useState('');
	const YOUR_APP_ID = "8aecf864";
	const YOUR_APP_KEY ="b460ca299374805ea2ad4be4f6ea081a";
	const submitHandler= e=>{
		e.preventDefault();
		fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
			Response=>Response.json()
		).then(
                 console.log('data')
	 	)
		
	}
	return(
	<div>
		<center>
                  <h4>Food Recipe APP</h4><br/>
		  <form onSubmit={submitHandler}>
			<input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br/>
			 <input type="submit" className='btn btn-primary' value="Search" /><br/>
			  
		  </form>
		</center>
	</div>
	)
}
export default App;
