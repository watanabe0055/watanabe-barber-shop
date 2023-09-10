import Board from "../components/concept";
import Information from "../components/information";
import Menu from "../components/menu";
import NewsList from "../components/news";
import Review from "../components/review";
import { getList } from "../libs/client";

export default async function StaticPage() {
  const { contents } = await getList();
  console.log("StaticPage:", contents);

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <Board />
      <Information />
      <Menu />
      <Review />
      <ul>
        {contents.map((post) => {
          return (
            <div key={post.id}>
              <NewsList news={post} />
            </div>
          );
        })}
      </ul>
    </>
  );
}
