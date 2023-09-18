import React from "react";
import MenuPrice from "../price";
import Typography from "@/app/atoms/Typography";

interface PriceDataProps {
  item: {
    name: string;
    price: number;
  };
}

const PriceData: React.FC<PriceDataProps> = ({ item }) => {
  return (
    <>
      <div className="p-3">
        <Typography text={item.name} size="m" />
        <MenuPrice price={item.price} />
      </div>
    </>
  );
};

export default PriceData;
