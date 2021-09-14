import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import Banner from '../components/Banner'
import ErrorBoundary from '../components/ErrorBoundary'
import Quote from '../components/Quote'
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots: [],
			quotes:[],
			searchfield:''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {this.setState({robots:users})});
  fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((quote) => {this.setState({quotes:quote})});
  // console.log(this.state.quotes);
}


onSearchChange = (event)=> {
	this.setState({searchfield: event.target.value})
}


render(){
	const {robots,quotes, searchfield} = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return !robots.length ?
		<h1 className='tc f1'>Loading</h1> : 	
		(
			<div className ='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
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

}

export default App;