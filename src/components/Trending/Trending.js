import React, { useState, useEffect } from "react";
import { KEY, BASE_URL } from "../../key";
import Movie from "../Movie/Movie";

function Trending() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
				console.log(data.results);
			});
	}, []);
	return (
		<div className="trending-movies flex flex-wrap justify-center">
			{movies.map((movie) => {
				return <Movie key={movie.id} movie={movie} />;
			})}
		</div>
	);
}

export default Trending;
