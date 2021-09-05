import React from "react";
import styles from "./Card.module.scss";

function Card({
  onClickFavorite,
  onClickPlus,
  title,
  imageUrl,
  price,
  favorited,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onPlus = () => {
    onClickPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  React.useEffect(() => {}, [isAdded]);

  const onFavorite = () => {
    onClickFavorite(title, imageUrl, price);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          width={14}
          height={14}
          src={isFavorite ? "/img/like.svg" : "/img/heart.svg"}
          alt="unlike"
        />
      </div>
      <img width={133} height={133} src={imageUrl} alt="sheakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price} $ </b>
        </div>
        <img
          className={styles.plus}
          onClick={onPlus}
          width={15}
          height={15}
          src={
            isAdded
              ? "./img/check-box-with-check-sign.svg"
              : "/img/plus-cross.svg"
          }
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
