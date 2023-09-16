import {
  FontSize,
  FontWeight,
  FontAlign,
  FontColor,
  TYPOGRAPHY_CONST_LIST,
} from "../const/Typography";

type TypographyProps = {
  text: string;
  size?: FontSize;
  weight?: FontWeight;
  align?: FontAlign;
  color?: FontColor;
};

const Typography = ({
  text,
  size = "l",
  weight = "normal",
  align = "left",
  color = "black",
}: TypographyProps) => {
  return (
    <div className={`${TYPOGRAPHY_CONST_LIST.FONT_ALIGN[align]}`}>
      <p
        className={`${TYPOGRAPHY_CONST_LIST.FONT_SIZE[size]} ${TYPOGRAPHY_CONST_LIST.FONT_WEIGHT[weight]} ${TYPOGRAPHY_CONST_LIST.FONT_COLOR[color]}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Typography;
