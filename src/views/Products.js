import { useState } from 'react';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { categoriesData, testProducts } from 'data';
import MenuNavigation from 'components/molecules/MenuNavigation/MenuNavigation';
import {
  ProductsWrapper,
  FiltersWrapper,
  Wrapper,
  SubCategoryLink,
  Text,
  CategoriesWrapper,
  CategoryLink,
} from './styles/Products.style';

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
