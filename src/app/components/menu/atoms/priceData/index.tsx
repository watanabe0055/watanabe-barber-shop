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
      <div className="m-2 p-2 bg-gray-200 rounded">
        {item.name}
        <MenuPrice price={item.price} />
      </div>
    </>
  );
};

export default PriceData;
