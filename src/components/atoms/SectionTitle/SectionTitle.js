import PropTypes from 'prop-types';
import { Title } from './SectionTitle.style';

const SectionTitle = ({ children, center, withoutUnderline }) => (
  <Title center={center} withoutUnderline={withoutUnderline}>
    {children}
  </Title>
);

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
  withoutUnderline: PropTypes.bool,
};

export default SectionTitle;
