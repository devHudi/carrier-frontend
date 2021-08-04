import styled from 'styled-components';
import React from 'react';
import { Navigation, Container, Margin } from 'carrier-ui';
import * as fa from 'react-icons/fa';
import { GiWaveCrest, GiPartyPopper } from 'react-icons/gi';
import SearchBar from './components/SearchBar';
import CityCarousel from './components/CityCarousel';
// , { createGlobalStyle }

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  margin-top: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;

const Category = styled.div`
  font-size: 12pt;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  margin-top: 30px;
`;

// const CityWrapper = styled.div`
//   display: flex;
// `;

const Search = () => (
  <>
    <Navigation />
    <Logo>CARRIER</Logo>
    <Container>
      <SearchBar />
      <Margin size={32} />
      <Category>
        지금 가장 인기있는 곳&nbsp;
        <fa.FaHotjar />
      </Category>
      <CityCarousel />
      <Category>
        여름에는 역시 바다!&nbsp;
        <GiWaveCrest />
      </Category>
      <Category>
        매일 화려한 이 축제&nbsp;
        <GiPartyPopper />
      </Category>
      <Category>
        인생샷 스팟들이 가득!&nbsp;
        <fa.FaCameraRetro />
      </Category>
    </Container>
  </>
);

export default Search;
