import React from 'react';
import './App.css';

class CardList extends React.Component {
  render() {
    return (<div>
      {this.props.CardData.map(profile => <Card key={profile.id} testdata={profile} />)}
    </div>);
  }
}

class Card extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.testData);
    this.state = {
      testData: this.props.testdata
    };

  }


  render() {
    //const profile=this.testData[0];
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
