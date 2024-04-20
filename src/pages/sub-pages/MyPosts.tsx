import { Fragment } from "react/jsx-runtime";
import "./styles/MyPosts.scss";
import { MyPostCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";
import { getMyPosts } from "../../API";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@layouts/Spinner";
import Empty from "@layouts/Empty";

export default function MyPosts(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["my-posts"],
    queryFn: () => getMyPosts("authorID")
  });

  if (isLoading) return <Spinner />;

  if (!data || data?.data.length == 0)
    return <Empty subtitle="Vous n'avez pas encore poster de CV" />;

  return (
    <Fragment>
      <section id="my-posts">
        {data.data.map(post => (
          <MyPostCard
            key={post.id}
            title={post.title}
            description={post.description}
            bookmarkCount={post.totalFav}
          />
        ))}
      </section>
      <Pagination totalPages={Number(data.totalPage)} />
    </Fragment>
  );
}
