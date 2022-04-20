import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  min-height: 1000px;
  display: grid;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  grid-template-columns: 320px 30fr 1fr;
  /* border: 1px solid red; */
`;

export const FiltersWrapper = styled.aside`
  width: 320px;
  /* border: 1px solid red; */
  height: 600px;
  padding: 20px 40px;
`;

export const ProductsWrapper = styled.section`
  min-height: 700px;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-left: 20px;
  padding-bottom: 30px;
`;

export const Text = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 5px 0 15px 0;
`;

export const CategoriesWrapper = styled.ul`
  /* border: 2px solid red; */
  list-style: none;
`;

export const CategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin: 8px 0 4px 0;
  display: flex;
  /* border: 1px solid green; */
  height: 22px;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  span {
    padding-left: 5px;
    padding-right: 4px;
  }
`;

export const SubCategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  text-decoration: none;
  padding-left: 27px;
  display: block;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const MenuNavigationWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
  padding-left: 20px;
`;

export const MenuNavigationLink = styled(CategoryLink)`
  display: inline-block;
`;
