import React, { Component } from 'react';
import Layout from './Layout/Layout';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStat from './FeedbackStat/FeedbackStat';
//import shortid from 'shortid';
import '../App.css';


export default class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = ( option ) => {
    this.setState(
      { [option] : this.state[option] + 1}
    );
  }

  countTotalFeedback = (options) => {
    let sum = 0;
  for (let option of options) {
    sum += this.state[option];
  }
  console.log(sum)
  return sum; 
   }

  countPositiveFeedbackPercentage = (options) => {
    
  } 
  
  render() {
    const options = ['good', 'neutral', 'bad'];
    
    return (
      <>
        <Layout title="Pleas leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Layout>
        <Layout title="Statistics">
          <FeedbackStat options={options} state={this.state}/>
        </Layout>
      </>
    )
  }
}