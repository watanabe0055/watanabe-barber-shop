const MenuPrice = (Props: { price: number }) => {
  const convertPrice = Props.price.toLocaleString() + "円";

  return (
    <>
      <p className="">{convertPrice}</p>
    </>
  );
};

export default MenuPrice;
