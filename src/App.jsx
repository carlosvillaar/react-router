import { BrowserRouter, Routes, Route } from "react-router-dom";

//pagine
import DefaultLayout from "./Components/DefaultLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={AboutUs} />
          <Route path="/contatti" Component={Contacts} />
          <Route path="/posts" Component={PostList} />
          <Route path="/posts/dettaglio-post/:id" Component={PostDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
