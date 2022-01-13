import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
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

const SubCategoryLink = ({category}) => {
 const [subnav, setSubnav] = useState(false);

 const handleCateogryClick = () => setSubnav(!subnav);

 return()
}



export default SubCategoryLink;
