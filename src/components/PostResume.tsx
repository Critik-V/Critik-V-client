import "./styles/PostResume.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { favoritePost, isFavPost } from "@api/posts";
import { useEffect, useRef, useState } from "react";
import { FavActionType } from "@api/types";
import { AppQueryClient } from "../App";
import AwesomeIcons from "./AwesomeIcons";
import resumePlaceholder from "@assets/resume-placeholder.png";

export function PostResume({
  id,
  totalFav,
  src
}: {
  id: string;
  totalFav: number;
  src?: string;
}): JSX.Element {
  const [totalFavPost, setTotalFavPost] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTotalFavPost(totalFav);
  }, [totalFav]);

  const { data: isFav } = useQuery({
    queryKey: ["favorite", id],
    queryFn: () => isFavPost(id)
  });

  const onSuccess = (): void => {
    AppQueryClient.invalidateQueries({
      queryKey: ["favorite", id]
    });
    AppQueryClient.invalidateQueries({
      queryKey: ["my-favorites-posts", "1"]
    });
    setTotalFavPost(prev => (isFav?.data ? prev - 1 : prev + 1));
  };

  const favMutation = useMutation({
    mutationFn: () => favoritePost(id, FavActionType.ADD),
    onSuccess
  });
  const favMutationRemove = useMutation({
    mutationFn: () => favoritePost(id, FavActionType.REMOVE),
    onSuccess
  });

  const handleFavorite = () => {
    if (!isFav?.data) {
      favMutation.mutate();
    }
    if (isFav?.data) {
      favMutationRemove.mutate();
    }
  };

  return (
    <div id="single-post-resume">
      <button onClick={handleFavorite}>
        <span>{totalFavPost}</span>
        <AwesomeIcons type={isFav?.data ? "solid" : "regular"} name="bookmark" />
      </button>
      <div className="display">
        <div className="img-container">
          <img id="resume-img" ref={imgRef} src={src ? src : resumePlaceholder} alt="resume" />
        </div>
      </div>
    </div>
  );
}
