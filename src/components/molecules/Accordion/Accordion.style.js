import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 272px;

  @media (max-width: 1250px) {
    height: unset;
    padding-bottom: 30px;
  }
`;

export const TopicWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Title = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.black};
  padding-right: 20px;
  cursor: pointer;
  padding-top: 5px;

  svg {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.black};
    transition: all 0.7s;
  }

  svg.activeAccordion {
    transform: rotate(-180deg);
  }
`;

export const Content = styled.div`
  padding: 5px 20px 12px 20px;
  overflow: hidden;
  line-height: 1.4;
  font-size: 14px;
  max-height: 119px;
  /* overflow-y: scroll; */

  &.visibleAccordion {
    display: block;
  }

  &.hiddenAccordion {
    display: none;
  }

  @media (max-width: 1250px) {
    max-height: 115px;
  }
`;

export const SubTopicWrapper = styled.div`
  padding-bottom: 5px;

  span {
    font-weight: bold;
  }
`;
