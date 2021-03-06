import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  margin-top: 10px;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a:nth-child(odd) {
    position: relative;
    top: 50px;
  }

  a:nth-child(2) {
    position: relative;
    bottom: 20px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;

    a:nth-child(odd) {
      position: relative;
      top: 0px;
    }

    a:nth-child(2) {
      position: relative;
      bottom: 0px;
    }
  }
`;
