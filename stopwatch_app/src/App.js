import React, { Component } from 'react';
import './App.css';
import TimeDisplay from './TimeDisplay'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentTime: 0,
      isTimePaused: true,
      test: null,
      restart: false
    }
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state.restart);
    if (this.state.restart){
      setTimeout(this.reset, 100)
    }
  }

  reset(){
    this.setState({
      restart: false,
      currentTime: 0
    })
  }

  increase(){
    this.setState({
      currentTime: this.state.currentTime + 1
    })
    if(this.state.isTimePaused){
      clearInterval(this.interval);
    }
  }

  startTimer(){
    if(this.state.isTimePaused){
      this.interval = setInterval(this.increase, 100)
      this.setState({
        isTimePaused: false
      })
    }
  }


  pauseTimer(){
    this.setState({
      isTimePaused: true
    })
  }

  resetTimer(){
    this.setState({
      isTimePaused: true,
      restart: true
    })
  }

  render() {
    return (
      <div className="App">
        {/* load everything */}

        <TimeDisplay currentTime={this.state.currentTime} />
        <button onClick={this.startTimer}> Start </button>
        <button onClick={this.pauseTimer}> Pause </button>
        <button onClick={this.resetTimer}> Reset </button>

      </div>
    );
  }
}

export default App;
