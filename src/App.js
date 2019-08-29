import React from 'react';
import './App.css';

const CardList = (props) => (
	<div>
  	{props.CardData.map(profile => <Card testData={profile}/>)}
	</div>
);

class Card extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.testData);
    // this.name = this.props.testData.name;
    // this.avatar_url = props.testData.avatar_url;
    // this.company = props.testData.company;
    this.state = {
      testData: this.props.testData
    };

  }


  render() {
    console.log(this,this.props.testData);
    return (<div className="github-profile">
      <img src={this.state.testData.avatar_url} style={{ width: '75px' }} />
      <div className="info">
        <div className="name">{this.state.testData.name}</div>
        <div className="company">{this.state.testData.company}</div>
      </div>
    </div>
    );
  }
}

class Form extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.getGitHubUser();
  }
  constructor(props) {
    super(props);
  }

  getGitHubUser = async () => {
    //console.log("called");
    let response = await fetch('https://api.github.com/users/' + this.state.useNameInput);
    let profile = await response.json()
    this.props.onSubmit(profile);
  };
  //useNameInput=React.createRef();
  state = { useNameInput: '' };
  render() {
    return (
      <form action="" onSubmit={this.handleClick}>
        <input
          type="text"
          placeholder="Github uersmae"
          value={this.state.useNameInput}
          onChange={event => this.setState({ useNameInput: event.target.value })}
          required
        >
        </input>
        <button>Add New Card</button>
      </form>
    )
  }
}

class App extends React.Component {
  // testData = [
  //   { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  //   { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  //   { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
  // ];

  constructor(props) {
    super(props);
    this.state = {
      testData: []
    }
  }

  getUsers = (profile) => {
    this.setState({ 
      testData: this.state.testData.concat([profile])
    })
    console.log(this.state.testData);
  }

  render() {
    console.log(this.state.testdata);
    return (
      <div>
        <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.getUsers}></Form>
        <CardList CardData={this.state.testData} />
      </div>
    );
  }
}

export default App;
