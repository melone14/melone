import styled from 'styled-components';

export const MainWrapper = styled.section`
  overflow-x: hidden;
  min-height: 300px;
  padding-top: ${({ paddingtop }) => (paddingtop ? '85px' : '0')};
`;
