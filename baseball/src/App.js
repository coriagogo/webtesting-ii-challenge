import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
    };
  }

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
    });
  };

  strike = () => {
    if (this.state.strikes >= 2) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
      });
    } else {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        };
      });
    }
  };
  
  foul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        };
      });
    };
  }

  ball = () => {
    if (this.state.balls >= 3) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
      });
    } else {
      this.setState(prevState => {
        return {
          balls: prevState.balls + 1
        };
      });
    };
  }

  render() {
    return(
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard hit={this.hit} strike={this.strike} foul={this.foul} ball={this.ball} />
      </div>
    )
  }

}

export default App;
