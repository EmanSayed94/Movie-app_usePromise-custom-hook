const MovieCardTailwind = ({ movie: { poster_path, title, vote_average } }) => {
  return (
    <div className="relative h-[400px] w-60 rounded-2xl overflow-hidden my-5 mx-8">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="Avatar"
        className="h-full transition ease-in-out delay-1300  hover:-translate-y-1 hover:scale-150 duration-500"
      />
      <div className="absolute bottom-0 w-full text-center h-1/4 bg-[#0000008f]">
        <div className={"pt-5 text-white"}>{title}</div>
      </div>
    </div>
  );
};

export default MovieCardTailwind;
