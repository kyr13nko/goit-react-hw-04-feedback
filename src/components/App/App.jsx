import { useState } from 'react';

import Container from './App.styled';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const onLeaveFeedback = option => {
  //   switch (option) {
  //     case 'good':
  //       setGood(prevGood => prevGood + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevNeutral => prevNeutral + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevBad => prevBad + 1);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...feedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
