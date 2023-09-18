import Typography from "@/app/atoms/Typography";

const MenuPrice = (Props: { price: number }) => {
  const convertPrice = Props.price.toLocaleString() + "円";

  return (
    <>
      <div className="pl-3">
        <Typography text={convertPrice} size="m" />
      </div>
    </>
  );
};

export default MenuPrice;
