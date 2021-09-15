import React from 'react'

const Quote = ({quotes}) =>{
	return (
			<div className="pa2 flex items-center bg-lightest-blue navy">
			<img className="f2 w-10" alt="avatar" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"/>
			<h2 className="f3 w-90 b--dashed br4 pa0 ma0 ">{quotes['value']}</h2>
			</div>
	);
}

export default Quote;