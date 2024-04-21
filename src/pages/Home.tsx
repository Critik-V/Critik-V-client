import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Home.scss";
import { SearchBar } from "@components/SearchBars";
import SubHeader from "@layouts/SubHeader";
import { PostCard } from "@components/PostsCards";
import { Link } from "react-router-dom";
import Pagination from "@components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../API";
import Empty from "@layouts/Empty";
import Spinner from "@layouts/Spinner";
import Failed from "@layouts/Failed";

export default function Home(): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts()
  });

  if (isLoading) return <Spinner />;

  if (data && data?.data?.length === 0)
    return <Empty subtitle="Aucun CV n'a été posté pour le moment" />;

  if (data)
    return (
      <main id="Home">
        <SubHeader>
          <SearchBar />
          <Link to="/new-post">
            <button id="make-post-btn">
              <AwesomeIcons type="regular" name="file" />
              Poster son CV
            </button>
          </Link>
        </SubHeader>
        {data && data?.data?.length > 0 && (
          <section id="all-posts">
            {data.data.map(post => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                bookmarkCount={post.totalFav}
              />
            ))}
          </section>
        )}
        {data && data?.data?.length > 0 && <Pagination totalPages={Number(data?.totalPage)} />}
      </main>
    );

  return <Failed />;
}
