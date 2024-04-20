import "./styles/Favorite.scss";
import SubHeader from "@layouts/SubHeader";
import { FavSearchBar } from "@components/SearchBars";
import { FavCard } from "@components/PostsCards";
import { Fragment } from "react/jsx-runtime";
import Empty from "@layouts/Empty";
import Spinner from "@layouts/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getFavoritePosts } from "../API";
import Pagination from "@components/Pagination";

export default function Favorite(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["my-favorites-posts"],
    queryFn: () => getFavoritePosts("authorID")
  });

  return (
    <Fragment>
      <main id="favorite">
        <SubHeader>
          <FavSearchBar />
        </SubHeader>
        {isLoading && <Spinner />}
        {!isLoading && data?.data?.length == 0 && <Empty />}
        {data && data?.data?.length > 0 && (
          <section id="favorite-posts">
            {data.data.map(post => (
              <FavCard
                key={post.id}
                title={post.title}
                description={post.description}
                bookmarkCount={post.totalFav}
              />
            ))}
          </section>
        )}
        {data && data?.data?.length > 0 && <Pagination />}
      </main>
    </Fragment>
  );
}
