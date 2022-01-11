import styled from 'styled-components';
import { useState } from 'react';
import ProductCard from 'components/molecules/ProductCard/ProductCard';
// import { Routes, Route } from 'react-router-dom';

import foto1 from 'assets/images/1.png';
import foto2 from 'assets/images/2.png';
import foto3 from 'assets/images/3.png';
import foto4 from 'assets/images/4.png';
import { Link } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

const SomeTemplate = styled.section`
  padding-top: 100px;
`;

const Wrapper = styled.section`
  min-height: 1000px;
  display: grid;
  grid-template-columns: 320px 30fr 1fr;
`;

const FiltersWrapper = styled.aside`
  width: 320px;
  /* border: 1px solid red; */
  height: 600px;
  padding: 20px 40px;
`;

const ProductsWrapper = styled.section`
  min-height: 700px;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding-left: 20px;
  padding-bottom: 30px;
`;

const Text = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 5px 0 15px 0;
`;

const CateogriesWrapper = styled.ul`
  /* border: 2px solid red; */
  list-style: none;
`;

const CategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin: 10px 0;
  display: flex;
  /* border: 1px solid green; */
  height: 30px;
  justify-content: flex-start;
  align-items: center;

  span {
    padding-left: 5px;
    padding-right: 4px;
  }
`;

const SubCategoryLink = styled(Link)`
  color: red;
  font-size: 12px;
  text-decoration: none;
  padding-left: 20px;
  display: block;
`;

const categoriesData = [
  {
    title: 'Koszule',
    path: 'koszule',
    icon: <RiIcons.RiShirtLine />,
    quantity: 3,
    subMenu: [
      {
        title: 'Koszule na co dzień',
        path: 'koszule-na-co-dzien',
      },
      {
        title: 'Koszule biznesowe',
        path: 'koszule-biznesowe',
      },
    ],
  },
  {
    title: 'Bluzy',
    path: 'bluzy',
    quantity: 12,
    icon: <GiIcons.GiHoodie />,
    subMenu: [
      {
        title: 'Bluzy z kapturem',
        path: 'bluzy-z-kapturem',
      },
      {
        title: 'Bluzy bez kaptura',
        path: 'bluzy-bez-kaptura',
      },
      {
        title: 'Bluzy rozpinane',
        path: 'bluzy-rozpinane',
      },
      {
        title: 'Bluzy nierozpinane',
        path: 'bluzy-nierozpinane',
      },
    ],
  },
  {
    title: 'Kurtki',
    path: 'kurtki',
    quantity: 11,
    icon: <GiIcons.GiMonclerJacket />,
    subMenu: [
      {
        title: 'Kurtki zimowe',
        path: 'kurtki-zimowe',
      },
      {
        title: 'Kurtki przejściowe',
        path: 'kurtki-przejściowe',
      },
      {
        title: 'Kurtki skórzane',
        path: 'kurtki-skorzane',
      },
      {
        title: 'Kurtki pikowane',
        path: 'kurtki-pikowane',
      },
    ],
  },
  {
    title: 'Jeansy',
    path: 'jeansy',
    quantity: 24,
    icon: <GiIcons.GiTrousers />,
    subMenu: [
      {
        title: 'Skinny fit',
        path: 'jeansy-skinny-fit',
      },
      {
        title: 'Slim fit',
        path: 'jeansy-slim-fit',
      },
      {
        title: 'Straight leg',
        path: 'jeansy-straight-leg',
      },
    ],
  },
];

const testProducts = [
  {
    bestseller: true,
    image: foto1,
    news: false,
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 12231,
  },
  {
    bestseller: true,
    image: foto2,
    news: false,
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 154352,
  },
  {
    bestseller: true,
    image: foto3,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 1234532,
  },
  {
    bestseller: true,
    image: foto4,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932,
  },
  {
    bestseller: true,
    image: foto1,
    news: false,
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 12231,
  },
  {
    bestseller: true,
    image: foto2,
    news: false,
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 154352,
  },
  {
    bestseller: true,
    image: foto3,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 1234532,
  },
  {
    bestseller: true,
    image: foto4,
    news: false,
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932,
  },
];

const Products = () => {
  const [subnav, setSubnav] = useState(false);

  const handleCateogryClick = () => setSubnav(!subnav);

  return (
    <SomeTemplate>
      <Text style={{ paddingLeft: '30px' }}>
        Strona główna > Mężczyźni > Koszule
      </Text>
      <Wrapper>
        <FiltersWrapper>
          <Text>Kategorie</Text>
          <CateogriesWrapper>
            {categoriesData.map((category, index) => (
              <>
                <CategoryLink
                  to={category.path}
                  key={index}
                  onClick={handleCateogryClick}
                >
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
              </>
            ))}
          </CateogriesWrapper>
          <Text>Cena</Text>
          <hr />
          <Text>Kolor</Text>
          <Text>Rozmiar</Text>
        </FiltersWrapper>

        <ProductsWrapper>
          {testProducts.map((product) => (
            <ProductCard slider product={product} key={product.gid} />
          ))}
        </ProductsWrapper>
      </Wrapper>
    </SomeTemplate>
  );
};

export default Products;
