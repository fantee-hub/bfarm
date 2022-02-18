import React from "react";
import styled from "styled-components";
import flower from "../images/flower.svg";
import vector from "../images/Vector 1.svg";
import corn from "../images/corn-isolated 1.png";
import arrow from "../images/arrow.svg";

export default function Home() {
  return (
    <HomeContainer>
      <div className="home-content">
        <div className="header-section">
          <span className="bifarin">
            Bifarin <img src={flower} alt="flower" />
          </span>
          <span className="farms">FARMS</span>
          <img className="wavy-line" src={vector} alt="wavy line" />
        </div>
        <div className="text-content">
          <p>
            Food Farming is proud of our past and excited about our future. We
            strive to continue being one of India and New Zealand's great food
            companies, offering quality fruits and vegetable.
          </p>
        </div>
        <div className="home-button">
          <button>Read more</button>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
      <div className="home-image">
        <img src={corn} alt="corn" />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .home-content {
    .header-section {
      img {
        width: 3rem;
      }
      span {
        font-family: "Playfair Display", serif;
        display: block;
        color: #3f4042;
      }
      .bifarin {
        font-size: 3.125rem;
      }
      .farms {
        font-size: 4.7rem;
      }
      .wavy-line {
        width: 10rem;
      }
    }
    .text-content {
      max-width: 30rem;
      padding: 1.5rem 0;
      p {
        line-height: 1.6;
      }
    }
  }
  .home-image {
    img {
      width: 100%;
    }
    @media screen and (max-width: 765px) {
      display: none;
    }
  }
  .home-button {
    display: flex;
    align-items: center;
    padding-top: 1.5rem;

    span {
      background: #43a22a;
      padding: 1.3rem;
      cursor: pointer;
    }
    button {
      padding: 1.3rem 1.5rem;
      border: none;
      background: #f4faf2;
      border: 2px solid #43a22a;
      cursor: pointer;
      color: #3f4042;
      font-family: "Avenir";
      letter-spacing: 0.06em;
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
