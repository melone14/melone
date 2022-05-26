import styled from 'styled-components';
import { CategoryLink } from 'views/styles/Products.style';

export const MenuNavigationWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
  padding-left: 20px;
`;

export const MenuNavigationLink = styled(CategoryLink)`
  display: inline-block;
`;
