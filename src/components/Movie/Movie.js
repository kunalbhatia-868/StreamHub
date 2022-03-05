import { IMAGE_BASE } from "../../key";
import "../../index.css";

function Movie({ movie }) {
	const image_url = `${IMAGE_BASE}w300/${movie.poster_path}`;
	let movie_name = movie.original_title;
	if (movie.original_title === undefined) {
		movie_name = movie.original_name;
	}
	return (
		<div>
			<div className="card m-5">
				<div className="card-image">
					<img
						src={image_url}
						alt=""
						className="rounded-lg bg-cyan-700 shadow-lg hover:scale-110 shadow-cyan-500/50 hover:shadow-blue-900"
					/>
				</div>
				<div className="card-info font-nunito text-xl text-center">
					{movie_name}
				</div>
			</div>
		</div>
	);
}
export default Movie;
