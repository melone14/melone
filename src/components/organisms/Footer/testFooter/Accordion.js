import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const MainText = styled.div`
  position: relative;
  display: block;
  padding: 10px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  &:after {
    content: '+';
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  opacity: 0;
  padding: 0;
  margin: 0;
  max-height: 0vh;
  overflow: hidden;
  transition: max-height 0.4s, opacity 0.25s;
`;

const ListItem = styled.li`
  padding: 6px 0;
  font-size: 13px;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.15s;
  &:hover {
    color: black;
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  padding: 0 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      & > ${List} {
        max-height: 400px;
        opacity: 1;
      }
      & > ${MainText}:after {
        content: '-';
      }
    `};

  @media (min-width: 750px) {
    /* border: 1px solid red; */
    width: 210px;
    & > ${List} {
      max-height: 400px;
      opacity: 1;
    }

    & > ${MainText}:after {
      display: none;
    }
  }
`;

const Accordion = ({ heading, links, infos, melone }) => {
  const [isActive, setActive] = useState(false);

  const expand = () => {
    setActive(!isActive);
  };

  return (
    <Wrapper onClick={expand} isActive={isActive}>
      <MainText>{heading}</MainText>
      {links ? (
        <List>
          {links.map(({ path, name }) => (
            <ListItem key={name}>
              <StyledLink to={path}>{name}</StyledLink>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {infos.map(({ text }) => (
            <ListItem key={text}>
              <StyledLink to={text}>INFO </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

Accordion.defaultProps = {
  links: [],
  infos: [],
};

Accordion.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  infos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Accordion;
