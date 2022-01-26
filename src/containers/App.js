import React,{useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import Banner from '../components/Banner'
import ErrorBoundary from '../components/ErrorBoundary'
import Quote from '../components/Quote'
import './App.css'

function App() {

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const [quotes, setQuotes] = useState([]);
	

const fetchQuote=()=>{
	fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((quote) => {setQuotes(quote)});
}
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {setRobots(users)});
  
	}, [])
	
	useEffect(() => {
		const interval = setInterval(() => {
			fetchQuote()
		}, 10000);
		fetchQuote();
		return () => clearInterval(interval);
	},[])


const onSearchChange = (event)=> {
	setSearchfield(event.target.value)
}



	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return !robots.length ?
		<h1 className='tc f1'>Loading</h1> : 	
		(
			<div className ='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {onSearchChange}/>
				<Banner/>
				<Quote quotes={quotes}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>	



	);



}

export default App;