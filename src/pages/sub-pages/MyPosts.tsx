import { Fragment } from "react/jsx-runtime";
import "./styles/MyPosts.scss";
import { MyPostCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";
import { getMyPosts } from "@api/index";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@layouts/Spinner";
import Empty from "@layouts/Empty";
import Failed from "@layouts/Failed";
import { Navigate, useSearchParams } from "react-router-dom";

export default function MyPosts(): JSX.Element {
  const [queries] = useSearchParams();
  const page = queries.get("page") || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["my-posts", page],
    queryFn: () => getMyPosts(+page)
  });

  if (isLoading) return <Spinner />;

  if (data && data?.data.length == 0)
    return <Empty subtitle="Vous n'avez pas encore poster de CV" />;

  if (data)
    return (
      <Fragment>
        <Navigate to={"/my-posts?page=" + page} replace={true} />
        <section id="my-posts">
          {data.data.map(post => (
            <MyPostCard key={post.id} data={post} />
          ))}
        </section>
        <Pagination totalPages={Number(data.totalPages)} />
      </Fragment>
    );

  return <Failed />;
}
