import { Fragment } from "react/jsx-runtime";
import "./styles/MyArchivedPosts.scss";
import { ArchivedCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";
import { getArchivedPosts } from "@api/index";
import Spinner from "@layouts/Spinner";
import Empty from "@layouts/Empty";
import { useQuery } from "@tanstack/react-query";
import Failed from "@layouts/Failed";
import { Navigate, useSearchParams } from "react-router-dom";

export default function MyArchivedPosts(): JSX.Element {
  const [queries] = useSearchParams();
  const page = queries.get("page") || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["my-archived-posts", page],
    queryFn: () => getArchivedPosts(+page)
  });

  if (isLoading) return <Spinner />;

  if (data && data.data?.length === 0)
    return <Empty subtitle="Vous n'avez archivé aucun CV." btn={false} />;

  if (data)
    return (
      <Fragment>
        <Navigate to={"/my-posts/archived?page=" + page} replace={true} />
        <section id="my-archived-posts">
          {data.data.map(post => (
            <ArchivedCard key={post.id} data={post} />
          ))}
        </section>
        <Pagination totalPages={Number(data.totalPages)} />
      </Fragment>
    );

  return <Failed />;
}
