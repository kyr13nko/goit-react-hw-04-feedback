import { Wrapper, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <p>
        Good: <Value>{good}</Value>
      </p>
      <p>
        Neutral: <Value>{neutral}</Value>
      </p>
      <p>
        Bad: <Value>{bad}</Value>
      </p>
      <p>
        Total: <Value>{total}</Value>
      </p>
      <p>
        Positive feedback: <Value>{positivePercentage}%</Value>
      </p>
    </Wrapper>
  );
};

export default Statistics;
