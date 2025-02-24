import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCats } from "./store/catSlice";
import Slider1 from "./sliders/Slider1";
import Slider2 from "./sliders/Slider2";
import Slider3 from "./sliders/Slider3";
import Slider4 from "./sliders/Slider4";
import Slider5 from "./sliders/Slider5";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <Router>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-center mb-5">
          Cat Image Sliders
        </h1>
        <nav className="flex gap-4 justify-center mb-5">
          <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/">
            Slider 1
          </Link>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            to="/slider2">
            Slider 2
          </Link>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            to="/slider3">
            Slider 3
          </Link>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            to="/slider4">
            Slider 4
          </Link>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            to="/slider5">
            Slider 5
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Slider1 />} />
          <Route path="/slider2" element={<Slider2 />} />
          <Route path="/slider3" element={<Slider3 />} />
          <Route path="/slider4" element={<Slider4 />} />
          <Route path="/slider5" element={<Slider5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
