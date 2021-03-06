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
    background: rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 1250px) {
    min-width: 45px;
    font-size: 18px;
    padding: 8px;
  }
`;
