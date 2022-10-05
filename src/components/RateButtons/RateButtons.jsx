import { ButtonList, Button, ButtonLi } from './RateButtons.styled';
import { PropTypes } from 'prop-types';

export const RateButtons = ({ options, onFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <ButtonLi key={index}>
            <Button type="button" onClick={() => onFeedback(option)}>
              {option}
            </Button>
          </ButtonLi>
        );
      })}
    </ButtonList>
  );
};

RateButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedback: PropTypes.func.isRequired,
};