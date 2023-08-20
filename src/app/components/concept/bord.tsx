import { CONCEPT } from "@/app/const/concept";
import { BoardText } from "./atoms/content/boardText";
import { BoardTitle } from "./atoms/title";

/**
 * コンセプトなどの文章を表示するボード
 * @returns
 */
const Board = () => {
  const textList = CONCEPT.CONTENT;
  const title = CONCEPT.TITLE;
  return (
    <div className="board bg-gray-100 p-4 md:p-8">
      <div className="board-inner bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
        <BoardTitle title={title} />
        <BoardText text={textList} />
      </div>
    </div>
  );
};

export default Board;
