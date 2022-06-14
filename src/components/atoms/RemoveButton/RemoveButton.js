import { StyledRemoveButton } from './RemoveButton.style';
import PropTypes from 'prop-types';

const RemoveButton = ({ children, ...restProps }) => {
  return <StyledRemoveButton {...restProps}>{children}</StyledRemoveButton>;
};

RemoveButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RemoveButton;
