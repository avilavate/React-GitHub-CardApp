import React from 'react';
import logo from './logo.svg';
import './App.css';




const CardList =(props)=> {
 return(
   <div>
 <Card/>
 <Card/>
 <Card />
 </div>
 );
}

class Card extends React.Component {

testData = [
      {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ];
  
	render() {
    const profile=this.testData[0];
  	return (<div className="github-profile">
    	  <img src={ profile.avatar_url } style={{width:'75px'}}/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
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
        <CardList />
    	</div>
    );
  }	
}

export default App;
