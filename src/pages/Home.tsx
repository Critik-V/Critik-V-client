import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Home.scss";
import { SearchBar } from "@components/SearchBars";
import SubHeader from "@layouts/SubHeader";
import { PostCard } from "@components/PostsCards";
import { Link, Navigate, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "@components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@api/index";
import Empty from "@layouts/Empty";
import Spinner from "@layouts/Spinner";
import Failed from "@layouts/Failed";
import { Fragment } from "react/jsx-runtime";
import { SearchInputType } from "@types";
import { useEffect } from "react";
import { AppQueryClient } from "../App";

export default function Home(): JSX.Element {
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
    queryKey: ["posts"],
    queryFn: () => getPosts(+page, { search, jobType, experienceLevel } as SearchInputType)
  });

  useEffect(() => {
    AppQueryClient.refetchQueries({
      queryKey: ["posts"]
    });
  }, [page, search, jobType, experienceLevel]);

  if (isLoading) return <Spinner />;

  if (data)
    return (
      <main id="Home">
        <Navigate to={`${location.pathname}?${params.toString()}`} replace={true} />
        <SubHeader>
          <SearchBar />
          <Link to="/new-post">
            <button id="make-post-btn">
              <AwesomeIcons type="regular" name="file" />
              Poster son CV
            </button>
          </Link>
        </SubHeader>
        {data && data?.data.length === 0 && (
          <Empty subtitle="Aucun curriculum vitae (CV) n'a été trouvé" btn={false} />
        )}
        {data && data?.data?.length > 0 && (
          <section id="all-posts">
            {data.data.map(post => (
              <PostCard key={post.id} data={post} />
            ))}
          </section>
        )}
        {data && data?.data?.length > 0 && <Pagination totalPages={Number(data?.totalPages)} />}
      </main>
    );

  return (
    <Fragment>
      <Failed />
    </Fragment>
  );
}
