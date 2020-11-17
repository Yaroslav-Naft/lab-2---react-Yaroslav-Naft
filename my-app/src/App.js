import './App.css';
import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Movies";
import DropdownMenu from "./DropdownMenu";

function App() {
  return (
   <div className="App">
    <Header />

    <Movies />
    <Footer />
  </div>
  );
}

export default App;
