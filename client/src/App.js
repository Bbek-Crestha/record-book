import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import CustomSpinner from "./components/CustomSpinner";
import Home from "./pages/Home";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
	return (
		<Suspense fallback={<CustomSpinner />}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />}>
						<Route exact path="" element={<Dashboard />} />
					</Route>

					<Route exact path="/login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default App;
