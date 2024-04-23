import "./styles/Favorite.scss";
import SubHeader from "@layouts/SubHeader";
import { FavSearchBar } from "@components/SearchBars";
import { FavCard } from "@components/PostsCards";
import { Fragment } from "react/jsx-runtime";
import Empty from "@layouts/Empty";
import Spinner from "@layouts/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getFavoritePosts } from "@api/index";
import Pagination from "@components/Pagination";
import Failed from "@layouts/Failed";
import { Navigate, useSearchParams } from "react-router-dom";

export default function Favorite(): JSX.Element {
  const [queries] = useSearchParams();
  const page = queries.get("page") || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["my-favorites-posts", page],
    queryFn: () => getFavoritePosts("authorID", +page)
  });

  if (isLoading) return <Spinner />;
  if (data && data?.data?.length === 0)
    return <Empty subtitle="Vous n'avez pas encore de CV favoris" />;

  if (data)
    return (
      <Fragment>
        <Navigate to={"/favorites?page=" + page} replace={true} />
        <main id="favorite">
          <SubHeader>
            <FavSearchBar />
          </SubHeader>
          {data && data?.data?.length > 0 && (
            <section id="favorite-posts">
              {data.data.map(post => (
                <FavCard key={post.id} data={post} />
              ))}
            </section>
          )}
          {data && data?.data?.length > 0 && <Pagination totalPages={Number(data.totalPage)} />}
        </main>
      </Fragment>
    );

  return <Failed />;
}
