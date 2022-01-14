import { MainWrapper } from './MainTemplate.style';
import { useLocation } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <MainWrapper paddingtop={pathname.length > 1 ? true : false}>
      {children}
    </MainWrapper>
  );
};

export default MainTemplate;
