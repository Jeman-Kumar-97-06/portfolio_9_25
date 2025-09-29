// import InitialInternet from "./components/Blog0";
import HowInternetWorks from "./components/Blog1";
import BlogList from "./components/BlogList";
import GuideList from "./components/GuideList";
import MainPage from "./components/MainPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import ProjectsMERN from "./components/ProjectsMERN";
import ProjectsPy from "./components/ProjectsPy";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* My Name */}
        <button className="name_div">
          <Link to='/' className="name">JEMAN</Link>
        </button>
        {/* Main DIV */}
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route exact path='/article_list' element={<BlogList/>}/>
          <Route exact path='/guide_list' element={<GuideList/>}/>
          <Route exact path='/how_internet_works' element={<HowInternetWorks/>}/>
          <Route exact path='/projects_mern' element={<ProjectsMERN/>}/>
          <Route exact path='/projects_py' element={<ProjectsPy/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
