import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';


export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (e) => {
    const feedback = e.target.value;
    this.setState((prevState) => { return { [feedback]: prevState[feedback] + 1 } })
  };


  render() {
    const feedbackOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round(good * 100 / total) : 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackOptions={feedbackOptions} onClick={this.handleLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} /> : <Notification message="No feedback given" />}
        </Section>
      </>
    );
  }


}
