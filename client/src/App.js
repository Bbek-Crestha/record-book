import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import CustomSpinner from "./components/CustomSpinner";
import Home from "./pages/Home";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
	return (
		<Suspense fallback={<CustomSpinner />}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}>
						<Route path="" element={<Dashboard />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default App;
