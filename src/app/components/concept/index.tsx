import Image from "next/image";
import { CONCEPT } from "@/app/const/concept";
import { BoardText } from "./atoms/content/boardText";
import { BoardTitle } from "./atoms/title";
import GlassMorphism from "@/app/atoms/GlassMorphism";

/**
 * コンセプトなどの文章を表示するボード
 * @returns
 */
const BoardSection = () => {
  const textList = CONCEPT.CONTENT;
  const title = CONCEPT.TITLE;
  return (
    <>
      <div className="relative">
        <Image
          src="/splash_00175.jpg"
          alt={"コンセプトのバックイメージ"}
          layout={`fill`}
          objectFit={`cover`}
        />
        <GlassMorphism>
          <BoardTitle title={title} />
          <BoardText text={textList} />
        </GlassMorphism>
      </div>
    </>
  );
};

export default BoardSection;
