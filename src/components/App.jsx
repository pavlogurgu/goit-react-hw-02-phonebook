import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { RateButtons } from './RateButtons/RateButtons';
import { AppPart } from './RateButtons/RateButtons.styled';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = option => {
    this.setState(currentState => ({
      [option]: currentState[option] + 1,
    }));
  };

  countTotalVotes = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveVotes = () => {
    const { good } = this.state;
    return Number.parseInt(
      this.countTotalVotes() > 0
        ? (good / this.countTotalVotes()) * 100
        : 0
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalVotes();

    const options = Object.keys(this.state);

    const PositiveFeedbackPercentage = this.countPositiveVotes();

    return (
      <AppPart>
        <h1>Please leave the feedback</h1>
        <RateButtons
          options={options}
          onFeedback={this.onFeedback}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            PositiveFeedbackPercentage={PositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </AppPart>
    );
  }
}







