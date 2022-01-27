import classes from "./cardStyle.module.scss";
const MovieCardCssModules = ({ movie: { poster_path, title } }) => {
  return (
    <div className={classes["movie-card"]}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="Avatar"
        className={classes["movie-card__img"]}
      />
      <div className={classes["movie-card__info"]}>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default MovieCardCssModules;
