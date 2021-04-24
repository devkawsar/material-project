import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/posts/:id">
					<PostDetail />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
