import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SocialIcon = styled(Link)`
  width: 35px;
  height: 35px;
  padding: 0;
  margin-left: 10px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  transition: 0.2s;
  cursor: pointer;
`;

export default SocialIcon;
