import styled from "styled-components";
import { useState, useEffect } from "react";
import { BuyButton } from "../buttons/BuyButton";
import { FavoritesButton } from "../buttons/FavoritesButton";
type Props = {
  title: string;
  description: string;
  imgURL: string;
};
const ProductDiv = styled.div`
  height: 572px;
  width: 411px;
  border: 1px solid #d3eaff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 24px 0;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 296px;
`;
const ProductTitle = styled.p`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #1e1e1e;
  margin: 32px 0 0 0;
`;
const ProductDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #556b84;
  margin: 16px 32px 0 32px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export function ProductCard({ title, description, imgURL }: Props) {
  return (
    <ProductDiv>
      <ProductImage src={imgURL} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <Buttons>
        <BuyButton />
        <FavoritesButton />
      </Buttons>
    </ProductDiv>
  );
}
