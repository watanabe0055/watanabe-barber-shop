import {
  FONT_SIZE,
  FONT_WEIGHT,
  FontSize,
  FontWeight,
} from "../const/Typography";

type TypographyProps = { text: string; size?: FontSize; weight?: FontWeight };

const Typography = ({
  text,
  size = "l",
  weight = "normal",
}: TypographyProps) => {
  return <p className={`${FONT_SIZE[size]} ${FONT_WEIGHT[weight]}`}>{text}</p>;
};

export default Typography;
