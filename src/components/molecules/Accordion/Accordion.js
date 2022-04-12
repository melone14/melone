import styled from 'styled-components';

import * as BiIcons from 'react-icons/bi';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 272px;

  @media (max-width: 1250px) {
    height: unset;
    padding-bottom: 30px;
  }
`;

const TopicWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const Title = styled.div`
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

const Content = styled.div`
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

const SubTopicWrapper = styled.div`
  padding-bottom: 5px;

  span {
    font-weight: bold;
  }
`;

const Accordion = () => {
  const [activeAccordion, setAccordion] = useState('materials');

  const handleClickAccordion = (topic) => {
    topic === activeAccordion ? setAccordion('any') : setAccordion(topic);
  };

  return (
    <Wrapper>
      <TopicWrapper>
        <Title onClick={() => handleClickAccordion('materials')}>
          Materiał i wskazówki pielęgnacyjne
          {activeAccordion === 'materials' ? (
            <BiIcons.BiChevronUp />
          ) : (
            <BiIcons.BiChevronUp className="activeAccordion" />
          )}
        </Title>
        <Content
          className={
            activeAccordion === 'materials'
              ? 'visibleAccordion'
              : 'hiddenAccordion'
          }
        >
          <SubTopicWrapper>
            <span>Materiał: </span>95% bawełna, 5% elastan <br />
          </SubTopicWrapper>
          <SubTopicWrapper>
            <span>Struktura/rodzaj materiału: </span>Dżersej <br />
          </SubTopicWrapper>
          <SubTopicWrapper>
            <span>Wskazówki pielęgnacyjne: </span>Pranie w pralce w 40°C, nie
            suszyć w suszarce bębnowej, pranie delikatne
          </SubTopicWrapper>
        </Content>
      </TopicWrapper>
      <TopicWrapper>
        <Title onClick={() => handleClickAccordion('size')}>
          Rozmiar i krój
          {activeAccordion === 'size' ? (
            <BiIcons.BiChevronUp />
          ) : (
            <BiIcons.BiChevronUp className="activeAccordion" />
          )}
        </Title>
        <Content
          className={
            activeAccordion === 'size' ? 'visibleAccordion' : 'hiddenAccordion'
          }
          style={{ overflowY: 'scroll' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          dignissimos deleniti officia deserunt voluptatem accusamus velit
          impedit ex, corrupti sed. Distinctio perferendis harum impedit
          expedita illum voluptates nemo inventore aliquam? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Aperiam dignissimos deleniti
          officia deserunt voluptatem accusamus velit impedit ex, corrupti sed.
          Distinctio perferendis harum impedit expedita illum voluptates nemo
          inventore aliquam?
        </Content>
      </TopicWrapper>
      <TopicWrapper>
        <Title onClick={() => handleClickAccordion('infos')}>
          Informacje dodatkowe
          {activeAccordion === 'infos' ? (
            <BiIcons.BiChevronUp />
          ) : (
            <BiIcons.BiChevronUp className="activeAccordion" />
          )}
        </Title>
        <Content
          className={
            activeAccordion === 'infos' ? 'visibleAccordion' : 'hiddenAccordion'
          }
          style={{ overflowY: 'scroll' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          dignissimos deleniti officia deserunt voluptatem accusamus velit
          impedit ex, corrupti sed. Distinctio perferendis harum impedit
          expedita illum voluptates nemo inventore aliquam?
        </Content>
      </TopicWrapper>
    </Wrapper>
  );
};

export default Accordion;
