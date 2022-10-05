import styled from "styled-components";
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ProductCard } from "../cards/ProductCard";
import { NextButton } from "../buttons/NextButton";
import { PreviousButton } from "../buttons/PreviousButton";
const ContentTitle = styled.h2`
  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  color: #1e1e1e;
`;
const Content = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 5vh 0 0 0;
  height: calc(100vh - 5px);
`;
const ProductContent = styled.div`
  display: flex;
  gap: 24px;
  margin: 5vh 0 0 0;
`;
const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 10px 0;
`;
const Switcher = styled.div`
  display: flex;
  gap: 8px;
`;
const SwitcherOuterDiv = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #1e1e1e;
  border-radius: 50%;
`;
const SwitcherInnerDiv = styled.div`
  width: 12px;
  height: 12px;
  background: #1e1e1e;
  border-radius: 50%;
  margin: 5px 0 0 5px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
interface Link {
  flickr_images: string[];
}
interface Flight {
  mission_name: string;
  details: string;
  links: Link;
}
interface Histories {
  flight: Flight;
}
interface Data {
  histories: Histories[];
}

const GET_FLIGHTS = gql`
  query {
    histories {
      flight {
        mission_name
        details
        links {
          flickr_images
        }
      }
    }
  }
`;
export interface IFilteredData {
  flight: Flight;
}
export function MainPageContent() {
  const { loading, data } = useQuery<Data>(GET_FLIGHTS);
  const [currentPage, setCurrentPage] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  let filtered;
  let pagesAmount = 1;
  if (data) {
    filtered = data.histories.filter(
      (item) =>
        item.flight && item.flight.links.flickr_images[0] && item.flight.details
    );
    pagesAmount = Math.ceil(filtered.length / 3);
  }
  let pagination = [];
  for (let i = 0; i < pagesAmount; i++) {
    pagination.push(i);
  }
  useEffect(() => {
    for (let i = 0; i <= currentPage; i++) {
      setFirstIndex(i * 3);
    }
  }, [currentPage]);
  return (
    <Content>
      <Header>
        <ContentTitle>popular tours</ContentTitle>
        <Buttons>
          <PreviousButton
            onClick={() => {
              if (currentPage !== 0) setCurrentPage(currentPage - 1);
            }}
          />
          <NextButton
            onClick={() => {
              if (currentPage !== pagesAmount - 1)
                setCurrentPage(currentPage + 1);
            }}
          />
        </Buttons>
      </Header>
      <ProductContent>
        {filtered &&
          filtered
            .slice(firstIndex, firstIndex + 3)
            .map(
              (item) =>
                item.flight &&
                item.flight.links.flickr_images[0] &&
                item.flight.details && (
                  <ProductCard
                    title={item.flight.mission_name}
                    description={item.flight.details.slice(0, 55)}
                    imgURL={item.flight.links.flickr_images[0]}
                    key={Math.random()}
                  />
                )
            )}
      </ProductContent>
      <SwitcherWrapper>
        <Switcher>
          {pagination.map((i) => (
            <SwitcherOuterDiv
              onClick={() => setCurrentPage(i)}
              key={Math.random()}
            >
              {currentPage === i && <SwitcherInnerDiv />}
            </SwitcherOuterDiv>
          ))}
        </Switcher>
      </SwitcherWrapper>
    </Content>
  );
}
