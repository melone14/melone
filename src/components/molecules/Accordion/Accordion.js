import {
  Wrapper,
  TopicWrapper,
  Title,
  Content,
  SubTopicWrapper,
} from './Accordion.style';
import * as BiIcons from 'react-icons/bi';
import { useState } from 'react';

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
