import React from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends React.Component {
	render() {
  	return (
    	<div className="github-profile">
    	  <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
    	</div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <div className="header">The GitHub Cards App</div>
        <Card />
    	</div>
    );
  }	
}

export default App;
