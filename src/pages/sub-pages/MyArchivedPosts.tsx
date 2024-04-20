import { Fragment } from "react/jsx-runtime";
import "./styles/MyArchivedPosts.scss";
import { ArchivedCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";
import { getArchivedPosts } from "../../API";
import Spinner from "@layouts/Spinner";
import Empty from "@layouts/Empty";
import { useQuery } from "@tanstack/react-query";

export default function MyArchivedPosts(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["my-archived-posts"],
    queryFn: () => getArchivedPosts("authorID")
  });

  if (isLoading) return <Spinner />;

  if (!data || data?.data.length == 0) return <Empty subtitle="Vous n'avez arhcivé aucun CV" />;

  return (
    <Fragment>
      <section id="my-archived-posts">
        {data.data.map(post => (
          <ArchivedCard
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
