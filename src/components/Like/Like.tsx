import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClickEvent: () => void;
}

function Like({ onClickEvent }: LikeProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onClickEvent;
  };

  return liked ? (
    <AiFillHeart size={25} color="#ff6b81" onClick={handleLike} />
  ) : (
    <AiOutlineHeart size={25} color="#ff6b81" onClick={handleLike} />
  );
}

export default Like;
