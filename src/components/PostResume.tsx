import "./styles/PostResume.scss";
import pinImg from "@assets/pin.png";
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
  src,
  newCommentPinXnY,
  commentPosition,
  canPin
}: {
  id: string;
  totalFav: number;
  src?: string;
  newCommentPinXnY?: (output: { x: number; y: number }) => void;
  commentPosition?: { x: number; y: number };
  canPin: boolean;
}): JSX.Element {
  const [totalFavPost, setTotalFavPost] = useState<number>(0);
  const [pinPosition, setPinPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTotalFavPost(totalFav);
  }, [totalFav]);

  useEffect(() => console.log(commentPosition), [commentPosition]); // TODO: removet

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
          {canPin && (
            <img
              className="pin"
              src={pinImg}
              style={{
                top: `${pinPosition.y}%`,
                left: `${pinPosition.x}%`,
                transform: `translate(-${pinPosition.x / 2}%, -${pinPosition.y / 2}%)`
              }}
              alt="pin"
            />
          )}
          {commentPosition && !canPin && (
            <img
              className="pin pin-comment"
              src={pinImg}
              style={{
                top: `${commentPosition.y}%`,
                left: `${commentPosition.x}%`,
                transform: `translate(-${pinPosition.x / 2}%, -${pinPosition.y / 2}%)`
              }}
              alt="pin"
            />
          )}
          <img
            id="resume-img"
            onClick={e => {
              if (canPin) {
                const rect = imgRef.current?.getBoundingClientRect();
                if (rect) {
                  const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
                  const yPercent = ((e.clientY - rect.top) / rect.height) * 100 - 2;

                  setPinPosition({ x: xPercent, y: yPercent });
                  newCommentPinXnY && newCommentPinXnY({ x: xPercent, y: yPercent });
                }
              }
            }}
            ref={imgRef}
            src={
              src ? src : resumePlaceholder
            }
            alt="resume"
          />
        </div>
      </div>
    </div>
  );
}
