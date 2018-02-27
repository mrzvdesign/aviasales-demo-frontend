import React from "react";
import styled from "styled-components";

import Form from "./Form";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;

  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  display: none;
  margin: 0;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export default function() {
  return (
    <Hero>
      <Title>Поиск дешевых авиабилетов</Title>
      <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
      <div className="row center-md">
        <div className="col-md-10">
          <Form />
        </div>
      </div>
    </Hero>
  );
}
