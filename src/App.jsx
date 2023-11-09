import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
