import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

import foto1 from 'assets/images/1.png';
import foto2 from 'assets/images/2.png';
import foto3 from 'assets/images/3.png';
import foto4 from 'assets/images/4.png';

export const categoriesData = [
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
        path: 'kurtki-przejsciowe',
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

export const testProducts = [
  {
    bestseller: true,
    image: foto1,
    news: '',
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 12231,
  },
  {
    bestseller: true,
    image: foto2,
    news: '',
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 154352,
  },
  {
    bestseller: true,
    image: foto3,
    news: '',
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 1234532,
  },
  {
    bestseller: true,
    image: foto4,
    news: '',
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932,
  },
  {
    bestseller: true,
    image: foto1,
    news: '',
    price: '1230,00',
    name: 'Płaszcz Amoloco',
    gid: 1224331,
  },
  {
    bestseller: true,
    image: foto2,
    news: '',
    price: '860,00',
    name: 'Koszula Bolton Gacio',
    gid: 15431152,
  },
  {
    bestseller: true,
    image: foto3,
    news: '',
    price: '480,00',
    name: 'Koszula Fortes Powder Pink',
    gid: 123443532,
  },
  {
    bestseller: true,
    image: foto4,
    news: '',
    price: '480,00',
    name: 'Koszula Fortes White Pearl',
    gid: 107932432,
  },
];

export const dummyData = ['S', 'M', 'L', 'XL', 'XXL'];

export const testBasketProducts = [
  {
    foto: foto2,
    size: 'XL',
    color: 'Biały',
    gid: 298219,
    name: 'T-Shirt miami palm men white',
    price: 164.5,
  },
  {
    foto: foto2,
    size: 'XL',
    color: 'Biały',
    gid: 298319,
    name: 'T-Shirt miami palm men white',
    price: 164.5,
  },
  {
    foto: foto2,
    size: 'XL',
    color: 'Biały',
    gid: 298119,
    name: 'T-Shirt miami palm men white',
    price: 164.5,
  },
  {
    foto: foto2,
    size: 'XL',
    color: 'Biały',
    gid: 298349,
    name: 'T-Shirt miami palm men white',
    price: 164.5,
  },
  {
    foto: foto2,
    size: 'XL',
    color: 'Biały',
    gid: 298379,
    name: 'T-Shirt miami palm men white',
    price: 164.5,
  },
];
