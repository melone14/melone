const { Title } = require('./SectionTitle.style');

const SectionTitle = ({ children, center }) => (
  <Title center={center}>{children}</Title>
);

export default SectionTitle;
