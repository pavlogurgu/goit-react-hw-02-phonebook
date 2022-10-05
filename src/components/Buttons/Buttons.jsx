import { ButtonList, Button,} from './Buttons.styled';
import { PropTypes } from 'prop-types';

export const Buttons = ({ options, onAddContact }) => {
  return (
    <ButtonList>
      {options.map((option) => {
        return (
          
            <Button type="button" onClick={() => onAddContact(option)}>
              {option}
            </Button>
       
        );
      })}
    </ButtonList>
  );
};

Buttons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onAddContact: PropTypes.func.isRequired,
};