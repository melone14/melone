import { useState } from 'react';
import { categoriesData } from 'data';
import DisplayProducts from 'components/organisms/DisplayProducts/DisplayProducts';
import MenuNavigation from 'components/molecules/MenuNavigation/MenuNavigation';
import {
  FiltersWrapper,
  Wrapper,
  SubCategoryLink,
  Text,
  CategoriesWrapper,
  CategoryLink,
} from './styles/Products.style';

const Products = () => {
  const [subnav, setSubnav] = useState(false);

  const handleCateogryClick = () => setSubnav(!subnav);

  return (
    <>
      <MenuNavigation />
      <Wrapper>
        <FiltersWrapper>
          <Text>Kategorie</Text>
          <CategoriesWrapper>
            {categoriesData.map((category, index) => (
              <li key={index}>
                <CategoryLink to={category.path} onClick={handleCateogryClick}>
                  {category.icon}
                  <span>{category.title}</span>
                  {`(${category.quantity})`}
                </CategoryLink>
                {subnav &&
                  category.subMenu.map((item, index) => (
                    <SubCategoryLink to={item.path} key={index}>
                      {item.title}
                    </SubCategoryLink>
                  ))}
              </li>
            ))}
          </CategoriesWrapper>
          <Text>Cena</Text>
          <hr />
          <Text>Kolor</Text>
          <Text>Rozmiar</Text>
        </FiltersWrapper>

        <DisplayProducts />
      </Wrapper>
    </>
  );
};

export default Products;
