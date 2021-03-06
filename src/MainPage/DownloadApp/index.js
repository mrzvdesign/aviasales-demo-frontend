import React from "react";
import styled from "styled-components";

import Rating from "./Rating";

import xsPhone from "./phone-xs.png";
import mdPhone from "./phone-md.png";
import xsPhone2x from "./xs-phone2x.png";
import mdPhone2x from "./md-phone2x.png";

import apple from "./apple.svg";
import android from "./android.svg";
import winphone from "./w-ph.svg";

const DownloadApp = styled.section`
  padding: 0;
  margin: 0;
  background: linear-gradient(110.1deg, #00b0de -38.19%, #196ebd 61.81%);
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-top: 1rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 2rem;
    padding: 0;
  }
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    padding: 3rem 0;
  }
`;

const AppLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: 14px;

  color: #ffffff;
  padding: 1rem 0;

  @media (min-width: 768px) {
    margin-right: 2rem;
    padding: 2;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const MarketImg = styled.img`
  height: 24px;
  margin-right: 0.75rem;
`;

const WindowsImg = MarketImg.extend`
  height: 19px;
`;

// Rfhnbyrf

const PhoneImg = styled.div`
  height: 100%;
  position: relative;
`;

const Picture = styled.picture`
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default function() {
  return (
    <DownloadApp>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating />
          </div>
        </div>
        <div className="row bottom-xs">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <PhoneImg>
              <Picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={xsPhone + " , " + xsPhone2x + "2x"}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={mdPhone + " , " + mdPhone2x + "2x"}
                />
                <Img src={xsPhone} srcSet={xsPhone + "2x"} alt="Мокап" />
              </Picture>
            </PhoneImg>
          </div>
          <div className="col-xs-6 col-md-8 col-xl">
            <AppList>
              <AppLink href="#">
                <MarketImg src={apple} alt="" /> iPhone или iPad
              </AppLink>
              <AppLink href="#">
                <MarketImg src={android} alt="" /> Android
              </AppLink>
              <AppLink href="#">
                <WindowsImg src={winphone} alt="" /> Windows Phone
              </AppLink>
            </AppList>
          </div>
        </div>
      </div>
    </DownloadApp>
  );
}
