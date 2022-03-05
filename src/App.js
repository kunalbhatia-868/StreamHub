import "./App.css";
import Trending from "./components/Trending/Trending";

function App() {
	return (
		<div className="App">
			<h1 className="text-center font-medium font-serif text-3xl m-4">
				Trending Movies
			</h1>
			<Trending />
		</div>
	);
}

export default App;
