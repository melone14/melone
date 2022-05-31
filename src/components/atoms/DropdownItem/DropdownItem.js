import styled from 'styled-components';

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    display: block;
    width: 90px;
    height: 90px;
  }

  h1 {
    font-size: 14px;
    font-weight: 400;
    display: block;
    max-width: 120px;
    margin: 0 5px;
  }

  p {
    font-size: 17px;

    span {
      font-size: 11px;
      color: inherit;
    }
  }
`;

const DropdownItem = ({ product: { name, price, image, quantity } }) => (
  <Wrapper>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <p>
      <span>{quantity ? `${quantity} x` : '1 x'}</span> {price}
    </p>
  </Wrapper>
);

export default DropdownItem;
