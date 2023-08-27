import React from "react";
import MenuPrice from "../price";

interface PriceDataProps {
  item: {
    name: string;
    price: number;
  };
}

const PriceData: React.FC<PriceDataProps> = ({ item }) => {
  return (
    <>
      {item.name}
      <MenuPrice price={item.price} />
    </>
  );
};

export default PriceData;
