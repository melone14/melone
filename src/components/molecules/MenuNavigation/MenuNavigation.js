import { useLocation } from 'react-router-dom';
import {
  MenuNavigationWrapper,
  MenuNavigationLink,
} from './MenuNavigation.style';

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

export default MenuNavigation;
