import styled from 'styled-components';

export const StyledRemoveButton = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 10px;
  right: 0;
  background: #f2f2f2;
  outline: none;
  border: none;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.grey};
  }
`;
