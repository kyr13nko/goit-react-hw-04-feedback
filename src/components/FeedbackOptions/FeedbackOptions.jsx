import { Button, Wrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default FeedbackOptions;
