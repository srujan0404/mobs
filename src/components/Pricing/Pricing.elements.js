import styled, { css } from "styled-components";

export const PricingSection = styled.div`
  padding: 60px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffdf59;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ExternalButton = styled.a`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? "#fff" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    background: #ddd;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 12px 0;
  }
`;

export const PricingHeading = styled.h1`
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  border-radius: 8px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const PricingCardIconStyled = styled.div`
  margin: 24px 0;
`;

export const HighlightedFeature = styled.li`
  font-family: "Poppins", sans-serif;
  color: #6fc276; /* Highlight color */
  font-weight: bold;
  font-size: 18px; /* Increase font size for highlight */
`;

export const PricingCard = styled.div`
  background: #101522;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 480px;
  height: 750px;
  text-decoration: none;
  border-radius: 25px;
  overflow: hidden;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const PricingCardIcon = styled.div`
  margin: 16px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

export const OriginalPrice = styled.h4`
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  text-decoration: line-through;
  color: #ca2c2a; /* Color for the original price */
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
  font-family: "Poppins", sans-serif;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  width: 100%;
  height: 100%;
`;

export const PricingCardFeature = styled.li`
  font-family: "Poppins", sans-serif;
`;
