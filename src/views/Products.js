import { useState } from 'react';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';
import { categoriesData, testProducts } from 'data';
import {
  MenuNavigationWrapper,
  MenuNavigationLink,
  ProductsWrapper,
  FiltersWrapper,
  Wrapper,
  SubCategoryLink,
  Text,
  CategoriesWrapper,
  CategoryLink,
} from './styles/Products.style';

const MenuNavigation = () => {
  const { pathname } = useLocation();
  const url = pathname.split('/');

  return (
    <MenuNavigationWrapper>
      <MenuNavigationLink to="/">Strona główna</MenuNavigationLink>
      {' / '}
      <MenuNavigationLink to={`/${url[1]}`}>
        {url[1] === 'mezczyzni'
          ? 'mężczyźni'
          : url[1] === 'wyprzedaz'
          ? 'wyprzedaż'
          : `${url[1]}`}
      </MenuNavigationLink>
      {url.length > 2 ? (
        <>
          {' / '}{' '}
          <MenuNavigationLink
            to={`/${url[1]}/${url[2]}`}
          >{`${url[2]}`}</MenuNavigationLink>{' '}
        </>
      ) : null}
    </MenuNavigationWrapper>
  );
};

const DisplayProduct = () => {
  return (
    <ProductsWrapper>
      {testProducts.map((product) => (
        <ProductCard slider="yes" product={product} key={product.gid} />
      ))}
    </ProductsWrapper>
  );
};

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
              <div key={index}>
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
              </div>
            ))}
          </CategoriesWrapper>
          <Text>Cena</Text>
          <hr />
          <Text>Kolor</Text>
          <Text>Rozmiar</Text>
        </FiltersWrapper>

        <DisplayProduct />
      </Wrapper>
    </>
  );
};

export default Products;
