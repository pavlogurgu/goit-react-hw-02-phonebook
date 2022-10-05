import { Container, Title, Info, Value } from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  PositiveFeedbackPercentage,
}) => {
  return (
    <Container>
      <Title>Statistics</Title>
      <Info>
        Good: <Value>{good > 0 && good}</Value>
      </Info>
      <Info>
        Neutral: <Value>{neutral > 0 && neutral}</Value>
      </Info>
      <Info>
        Bad: <Value>{bad > 0 && bad}</Value>
      </Info>
      <Info>
        Total: <Value>{totalFeedback > 0 && totalFeedback}</Value>
      </Info>
      <Info>
        Positive feedbacks:
        <Value>
          {PositiveFeedbackPercentage > 0 && `${PositiveFeedbackPercentage}%`}
        </Value>
      </Info>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  PositiveFeedbackPercentage: PropTypes.number.isRequired,
};