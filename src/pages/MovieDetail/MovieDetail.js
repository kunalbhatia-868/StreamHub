import React, { useEffect, useState } from "react";
import { KEY, BASE_URL, IMAGE_BASE } from "../../key";

function Movie({ movie_id }) {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=en-US`)
			.then((response) => response.json())
			.then((data) => {
				setMovie(data);
			});
	}, []);

	let image_url = "";
	if (movie.poster_path !== undefined) {
		image_url = `${IMAGE_BASE}w300/${movie.poster_path}`;
	}
	return (
		<div>
			<div className="card">
				<div className="card-image">
					<img src={image_url} alt="" />
				</div>
				<div className="card-info">{movie.original_title}</div>
			</div>
		</div>
	);
}
export default Movie;
