import React, { useState } from "react";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import Video from "../../videos/space1.mp4";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeH1,
  HomeBtnContainer,
  HomeContent,
  HomeP,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HomePageElements";

const HomePage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <NavbarHome />
      <HomeContainer>
        <HomeBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HomeBg>
        <HomeContent>
          <HomeH1>Expand Your Horizons</HomeH1>
          <HomeP>Join us today and embark on a life-changing experience.</HomeP>
          <HomeBtnContainer>
            <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
              Sign up {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnContainer>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default HomePage;
