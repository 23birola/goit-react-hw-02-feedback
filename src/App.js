import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
// import css from './Reviews.module.css';

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  };

  handleLeaveFeedback = (e) => {
    const feedback = e.target;
    console.log(feedback);
    // this.setState(prevState => ({
    //     good: prevState.good + 1,
    // }));
  };


  render() {
    const feedbackOptions = Object.keys(this.state);
    console.log(feedbackOptions);
    return (<>
      <FeedbackOptions feedbackOptions={feedbackOptions} />

      <ul>Statistics
        <li>Good</li>
        <li>Neutral</li>
        <li>Bad</li>
      </ul>
    </>
    );
  }


}
