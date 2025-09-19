// import InitialInternet from "./components/Blog0";
import HowInternetWorks from "./components/Blog1";
import BlogList from "./components/BlogList";
import GuideList from "./components/GuideList";
import MainPage from "./components/MainPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* My Name */}
        {/* <div className="name_div">
          <Link to='/' className="name">JEMAN</Link>
        </div> */}
        {/* Main DIV */}
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route exact path='/article_list' element={<BlogList/>}/>
          <Route exact path='/guide_list' element={<GuideList/>}/>
          <Route exact path='/how_internet_works' element={<HowInternetWorks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
