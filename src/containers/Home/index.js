import axios from "axios";
import { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import MovieCardCssModules from "../../components/MovieCardCssModules";
import MovieCardTailwind from "../../components/MovieCardTailwind";
import usePromise from "../../Hooks/usePromise";
import classes from "./home.module.scss";

const Home = () => {
  const [tailwind, setTailwind] = useState(true);
  const getPromiseToFetchMovies = useCallback(() => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    );
  }, []);
  const { data, loading, error } = usePromise(getPromiseToFetchMovies);

  const handleCssStyleChange = (value) => {
    setTailwind(value);
  };

  if (loading) return <div className="text-white">LOADING...</div>;
  if (error) return <div className="text-white p-5">{error} !!!</div>;

  return (
    <>
      <button
        className={`p-3  rounded-full text-white m-5 ${
          tailwind ? "bg-[#ffc7c7a1]" : "bg-[#3a424d]"
        }`}
        onClick={() => handleCssStyleChange(true)}
      >
        Tailwind
      </button>
      <button
        className={`p-3 rounded-full text-white m-5 ${
          !tailwind ? "bg-[#ffc7c7a1]" : "bg-[#3a424d]"
        }`}
        onClick={() => handleCssStyleChange(false)}
      >
        SCSS modules
      </button>
      {!tailwind ? (
        <div className={classes["cards-container"]}>
          {data?.results?.map((movie) => {
            return <MovieCardCssModules key={movie.id} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-auto-fit-20 justify-center items-center">
          {data?.results?.map((movie) => {
            return <MovieCardTailwind key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Home;
