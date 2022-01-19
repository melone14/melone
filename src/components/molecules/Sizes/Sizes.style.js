import styled from 'styled-components';

export const SizesWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

export const Size = styled.div`
  padding: 10px;
  min-width: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  font-size: 22px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &.activeSize {
    color: black;
    border-color: black;
  }
`;
