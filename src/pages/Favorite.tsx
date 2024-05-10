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
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { AppQueryClient } from "../App";
import { SearchInputType } from "@types";

export default function Favorite(): JSX.Element {
  const location = useLocation();
  const [queries] = useSearchParams();
  const page = queries.get("page") || 1;
  const search = queries.get("search") || "";
  const jobType = queries.get("jobtype") || "";
  const experienceLevel = queries.get("level") || "";

  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("search", search);
  params.append("jobtype", jobType);
  params.append("level", experienceLevel);

  const { data, isLoading } = useQuery({
    queryKey: ["my-favorites-posts", page],
    queryFn: () => getFavoritePosts(+page, { search, jobType, experienceLevel } as SearchInputType)
  });

  useEffect(() => {
    AppQueryClient.refetchQueries({
      queryKey: ["my-favorites-posts", page]
    });
  }, [page, search, jobType, experienceLevel]);

  if (isLoading) return <Spinner />;

  if (data)
    return (
      <Fragment>
        <Navigate to={`${location.pathname}?${params.toString()}`} replace={true} />
        <main id="favorite">
          <SubHeader>
            <FavSearchBar />
          </SubHeader>
          {data && data?.data.length === 0 && (
            <Empty
              subtitle="Aucun curriculum vitae (CV) n'a été trouvé dans vos favoris"
              btn={false}
            />
          )}
          {data && data?.data?.length > 0 && (
            <section id="favorite-posts">
              {data.data.map(post => (
                <FavCard key={post.id} data={post} />
              ))}
            </section>
          )}
          {data && data?.data?.length > 0 && <Pagination totalPages={Number(data.totalPages)} />}
        </main>
      </Fragment>
    );

  return <Failed />;
}
