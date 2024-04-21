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
import Failed from "@layouts/Failed";

export default function Favorite(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["my-favorites-posts"],
    queryFn: () => getFavoritePosts("authorID")
  });

  if (isLoading) return <Spinner />;
  if (data && data?.data?.length === 0)
    return <Empty subtitle="Vous n'avez pas encore de CV favoris" />;

  if (data)
    return (
      <Fragment>
        <main id="favorite">
          <SubHeader>
            <FavSearchBar />
          </SubHeader>
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
          {data && data?.data?.length > 0 && <Pagination totalPages={Number(data.totalPage)} />}
        </main>
      </Fragment>
    );

  return <Failed />;
}
