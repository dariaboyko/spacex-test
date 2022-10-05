import styled from "styled-components";
import { useState, useEffect } from "react";
import AstronautIMG from "../../assets/images/gallery/astronaut.jpg";
import SpaceIMG from "../../assets/images/gallery/space.jpg";
import WomanIMG from "../../assets/images/gallery/woman.jpg";
import ArrowSVG from "../../assets/icons/arrow";

type Props = {
  children: JSX.Element;
};
const images = [SpaceIMG, AstronautIMG, WomanIMG];
const BannerImage = styled.img`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
`;
const BannerTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;
const BannerFirstStroke = styled.div`
  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  text-transform: uppercase;
  color: #ffffff;
`;
const BannerSecondStroke = styled.div`
  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 310px;
  text-transform: uppercase;
  color: #ffffff;
  margin: -50px 0 0 0;
`;
const BannerSwitcher = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 180px;
  left: 473px;
`;
const BannerSwitcherOuterDiv = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;
const BannerSwitcherInnerDiv = styled.div`
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  margin: 5px 0 0 5px;
`;
const ExploreLink = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin: -70px 0 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;
export function MainHero({ children }: Props) {
  const [imageURL, setImageURL] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageURL === 2) {
        setImageURL(0);
      } else {
        setImageURL(imageURL + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [imageURL]);
  return (
    <section>
      {children} <BannerImage src={images[imageURL]}></BannerImage>
      <BannerTextContainer>
        <BannerFirstStroke>The space is waiting for</BannerFirstStroke>
        <BannerSecondStroke>you</BannerSecondStroke>
        <BannerSwitcher>
          <BannerSwitcherOuterDiv
            onClick={() => {
              setImageURL(0);
            }}
          >
            {imageURL === 0 && <BannerSwitcherInnerDiv />}
          </BannerSwitcherOuterDiv>
          <BannerSwitcherOuterDiv
            onClick={() => {
              setImageURL(1);
            }}
          >
            {imageURL === 1 && <BannerSwitcherInnerDiv />}
          </BannerSwitcherOuterDiv>
          <BannerSwitcherOuterDiv
            onClick={() => {
              setImageURL(2);
            }}
          >
            {imageURL === 2 && <BannerSwitcherInnerDiv />}
          </BannerSwitcherOuterDiv>
        </BannerSwitcher>
      </BannerTextContainer>
      <ExploreLink>
        Explore tours
        <ArrowSVG />
      </ExploreLink>
    </section>
  );
}
