import React from 'react';
import './App.css';




const CardList =(props)=> {

 
 return(
   <div>
     <Form></Form>
 <Card {...props.testData[0]}/>
 <Card {...props.testData[1]}/>
 <Card {...props.testData[2]}/>
 </div>
 );
}

class Card extends React.Component {

  constructor(props){
    super(props);
    this.name=props.name;
    this.avatar_url=props.avatar_url;
    this.company=props.company;

  }

  
	render() {
    //const profile=this.testData[0];
  	return (<div className="github-profile">
    	  <img src={ this.avatar_url } style={{width:'75px'}}/>
        <div className="info">
          <div className="name">{this.name}</div>
          <div className="company">{this.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component{
  render(){
    return(
      <form action="">
        <input type="text" placeholder="Github uersmae"></input>
        <button>Add New Card</button>
      </form>
    )
  }
}

class App extends React.Component {
  testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
	render() {
  	return (
    	<div>
    	  <div className="header">The GitHub Cards App</div>
        <CardList  testData={this.testData}/>
    	</div>
    );
  }	
}

export default App;
