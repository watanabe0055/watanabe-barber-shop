import { CONCEPT } from "@/app/const/concept";
import { BoardText } from "./atoms/content/boardText";
import { BoardTitle } from "./atoms/title";
import GlassMorphism from "@/app/atoms/GlassMorphism";

/**
 * コンセプトなどの文章を表示するボード
 */
const BoardSection = () => {
  const textList = CONCEPT.CONTENT;
  const title = CONCEPT.TITLE;
  return (
    <>
      <section className="relative">
        {/* <Image
          src="/splash_00175.jpg"
          alt={"コンセプトのバックイメージ"}
          layout={`fill`}
          objectFit={`cover`}
        /> */}
        <GlassMorphism>
          <BoardTitle title={title} />
          <BoardText text={textList} />
        </GlassMorphism>
      </section>
    </>
  );
};

export default BoardSection;
