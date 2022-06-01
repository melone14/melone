import { StyledRemoveButton } from './RemoveButton.style';

const RemoveButton = ({ children, ...restProps }) => {
  return <StyledRemoveButton {...restProps}>{children}</StyledRemoveButton>;
};

export default RemoveButton;
